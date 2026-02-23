import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        dept: '',
        year: '',
        internshipInterest: '',
        acceptedTerms: false,
        plan: 'Premium'
    });

    const [isOtherYear, setIsOtherYear] = useState(false);
    const [isOtherInterest, setIsOtherInterest] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => {
        if (step === 1) {
            if (!formData.name || !formData.email || !formData.phone || !formData.college || !formData.dept || !formData.year || !formData.internshipInterest) {
                alert('Please fill in all required fields');
                return;
            }
        }
        if (step === 2) {
            if (!formData.acceptedTerms) {
                alert('Please accept the Terms and Conditions to proceed');
                return;
            }
        }
        setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const handlePayment = async () => {
        try {
            // Use production API URL if provided, otherwise empty for same-domain
            const API_URL = import.meta.env.VITE_API_URL || '';

            // 1. Create Order on Backend
            const response = await fetch(`${API_URL}/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 99, currency: 'INR' })
            });

            const order = await response.json();

            if (!order.id) throw new Error('Order creation failed');

            // 2. Configure Razorpay Options
            const options = {
                key: order.key_id,
                amount: order.amount,
                currency: order.currency,
                name: "Novus",
                description: "Lifetime Premium Access",
                order_id: order.id,
                handler: async function (response) {
                    // 3. Verify Payment on Backend
                    const verifyRes = await fetch(`${API_URL}/verify-payment`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            ...response,
                            userData: formData // Send user details to be saved
                        })
                    });
                    const verifyData = await verifyRes.json();
                    console.log('Verification response:', verifyData);

                    if (verifyData.status === 'success') {
                        window.location.href = '/success';
                    } else {
                        console.error('Verification failed:', verifyData);
                        alert(`Payment verification failed: ${verifyData.message}`);
                        window.location.href = '/cancel';
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#2563EB"
                }
            };

            // 3. Open Razorpay Checkout Modal
            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                console.error(response.error);
                window.location.href = '/cancel';
            });
            rzp1.open();

        } catch (err) {
            console.error('Payment initialization failed:', err);
            alert('Payment initialization failed. Is the backend running?');
        }
    };

    return (
        <div className="form-container">
            <div className="step-indicator">
                <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>1</div>
                <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>2</div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
            </div>

            <div className="card">
                {step === 1 && (
                    <div className="form-step">
                        <h2 style={{ marginBottom: '1.5rem' }}>Personal Information</h2>
                        <div className="form-group">
                            <label>Full Name*</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Email Address*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number*</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+91 00000 00000"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>College/Institution Name*</label>
                            <input
                                type="text"
                                name="college"
                                value={formData.college}
                                onChange={handleInputChange}
                                placeholder="University Name"
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Dept*</label>
                                <input
                                    type="text"
                                    name="dept"
                                    value={formData.dept}
                                    onChange={handleInputChange}
                                    placeholder="Computer Science"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Year*</label>
                                <select
                                    name="year"
                                    value={isOtherYear ? "Others" : formData.year}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (value === 'Others') {
                                            setIsOtherYear(true);
                                            setFormData(prev => ({ ...prev, year: '' }));
                                        } else {
                                            setIsOtherYear(false);
                                            setFormData(prev => ({ ...prev, year: value }));
                                        }
                                    }}
                                    required
                                >
                                    <option value="" disabled>Select Year</option>
                                    <option value="1st Year">1st Year</option>
                                    <option value="2nd Year">2nd Year</option>
                                    <option value="3rd Year">3rd Year</option>
                                    <option value="4th Year">4th Year</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>
                        {isOtherYear && (
                            <div className="form-group">
                                <label>Specify Year*</label>
                                <input
                                    type="text"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleInputChange}
                                    placeholder="Enter your year"
                                    required
                                />
                            </div>
                        )}
                        <div className="form-group">
                            <label>Internship Interest*</label>
                            <select
                                name="internshipInterest"
                                value={isOtherInterest ? "Others" : formData.internshipInterest}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === 'Others') {
                                        setIsOtherInterest(true);
                                        setFormData(prev => ({ ...prev, internshipInterest: '' }));
                                    } else {
                                        setIsOtherInterest(false);
                                        setFormData(prev => ({ ...prev, internshipInterest: value }));
                                    }
                                }}
                                required
                            >
                                <option value="" disabled>Select Interest</option>
                                <option value="Web Development">Web Development</option>
                                <option value="AI / ML">AI / ML</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="Cloud Computing">Cloud Computing</option>
                                <option value="Hardware/IoT">Hardware/IoT</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        {isOtherInterest && (
                            <div className="form-group">
                                <label>Specify Interest*</label>
                                <input
                                    type="text"
                                    name="internshipInterest"
                                    value={formData.internshipInterest}
                                    onChange={handleInputChange}
                                    placeholder="Enter your interest"
                                    required
                                />
                            </div>
                        )}
                        <div className="form-actions">
                            <div></div>
                            <button className="btn-primary" onClick={nextStep}>Next Step</button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="form-step">
                        <h2 style={{ marginBottom: '1.5rem' }}>Order Summary</h2>
                        <div className="summary-list">
                            <div className="summary-item">
                                <span>Selected Plan</span>
                                <span style={{ fontWeight: 600 }}>{formData.plan}</span>
                            </div>
                            <div className="summary-item">
                                <span>Access Duration</span>
                                <span>Lifetime</span>
                            </div>
                            <div className="summary-item">
                                <span>Service Fee</span>
                                <span>₹0.00</span>
                            </div>
                            <div className="summary-total">
                                <span>Total Amount</span>
                                <span>₹99.00</span>
                            </div>
                        </div>
                        <div className="terms-checkbox">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={formData.acceptedTerms}
                                onChange={(e) => setFormData(prev => ({ ...prev, acceptedTerms: e.target.checked }))}
                            />
                            <label htmlFor="terms">
                                I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> (No Refund Policy applies)
                            </label>
                        </div>
                        <div className="form-actions">
                            <button className="btn-secondary" onClick={prevStep}>Back</button>
                            <button className="btn-primary" onClick={nextStep}>Confirm Order</button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="form-step" style={{ textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Secure Checkout</h2>
                        <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>
                            You are about to be redirected to our PCI-compliant secure payment processor.
                        </p>
                        <div className="checkout-amount-box">
                            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Amount to pay:</p>
                            <h3 style={{ fontSize: '2rem' }}>₹99.00</h3>
                        </div>
                        <div className="form-actions" style={{ flexDirection: 'column', gap: '1rem' }}>
                            <button className="btn-primary" style={{ width: '100%' }} onClick={handlePayment}>
                                Pay Now with Secure Gateway
                            </button>
                            <button className="btn-secondary" onClick={prevStep}>Change Order</button>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '1.5rem' }}>
                            🔒 Secured by Industry Standard Encryption
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentForm;
