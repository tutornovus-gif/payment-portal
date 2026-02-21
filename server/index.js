const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const crypto = require('crypto');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Payment Schema
const paymentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    college: String,
    dept: String,
    year: String,
    internshipInterest: String,
    razorpay_order_id: String,
    razorpay_payment_id: String,
    amount: Number,
    currency: String,
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

const Payment = mongoose.model('Payment', paymentSchema);

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Step 1: Create an Order
app.post('/create-order', async (req, res) => {
    const { amount, currency = 'INR', receipt = 'receipt_1' } = req.body;
    console.log('Order creation request received:', req.body);

    if (!amount) {
        return res.status(400).json({ error: 'Amount is required' });
    }

    const options = {
        amount: amount * 100, // Amount in paise
        currency,
        receipt,
    };

    try {
        const order = await razorpay.orders.create(options);
        console.log('Razorpay order created:', order.id);
        res.json({
            ...order,
            key_id: process.env.RAZORPAY_KEY_ID
        });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        res.status(500).json({ error: error.message });
    }
});

// Step 2: Verify Payment and Save to DB
app.post('/verify-payment', async (req, res) => {
    console.log('Verification request received:', req.body);
    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        userData // Added from frontend
    } = req.body;

    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const generated_signature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(text)
        .digest('hex');

    console.log('Signature Comparison:', {
        received: razorpay_signature,
        generated: generated_signature,
        match: generated_signature === razorpay_signature
    });

    if (generated_signature === razorpay_signature) {
        try {
            // Save payment details to MongoDB
            const newPayment = new Payment({
                ...userData,
                razorpay_order_id,
                razorpay_payment_id,
                amount: 99, // Static price for now
                currency: 'INR',
                status: 'success'
            });
            await newPayment.save();
            console.log('Payment saved to DB successfully');

            res.json({ status: 'success', message: 'Payment verified and saved successfully' });
        } catch (dbError) {
            console.error('Error saving payment to DB:', dbError);
            res.status(500).json({ status: 'partial_success', message: 'Payment verified but failed to save data' });
        }
    } else {
        console.warn('Verification failed: Signatures do not match');
        res.status(400).json({ status: 'failure', message: 'Payment verification failed' });
    }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
