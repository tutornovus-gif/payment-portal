import React from 'react';

const Terms = () => {
    return (
        <div className="page-container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
                fontSize: '3rem',
                marginBottom: '2.5rem',
                textAlign: 'center',
                fontFamily: 'var(--font-tech)',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                background: 'linear-gradient(to right, var(--primary-green), var(--secondary-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
            }}>
                Terms and Conditions
            </h1>

            <div className="card" style={{ padding: '3rem', lineHeight: '1.8' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>1. Registration Fees</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        The registration fee for the internship program is <strong>₹99 (INR)</strong>.
                        All payments are processed securely through Razorpay encryption.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>2. Strict No-Refund Policy</h2>
                    <div style={{
                        background: 'rgba(74, 222, 128, 0.05)',
                        borderLeft: '4px solid var(--primary-green)',
                        padding: '1.5rem',
                        borderRadius: '0 8px 8px 0',
                        marginBottom: '1.5rem',
                        boxShadow: 'var(--shadow-glow)'
                    }}>
                        <p style={{ color: 'var(--primary-green)', fontWeight: '700', fontSize: '1.1rem' }}>
                            CRITICAL: Amount cannot be refunded once paid under any circumstances.
                        </p>
                    </div>
                    <p style={{ color: 'var(--text-muted)' }}>
                        By proceeding with the ₹99 payment, you explicitly acknowledge that this fee is non-refundable, regardless of program participation or withdrawal.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>3. Data Privacy</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        Your registered information (Name, Email, Mobile, Academic details) will be securely stored in our Novus Solutions database solely for program administration and communication.
                    </p>
                </section>

                <div style={{ marginTop: '3rem', textAlign: 'center', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <button
                        className="btn-primary"
                        onClick={() => window.close()}
                        style={{ display: window.opener ? 'inline-block' : 'none' }}
                    >
                        Close Portal
                    </button>
                    <a href="/" className="btn-secondary" style={{ textDecoration: 'none' }}>
                        Return Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Terms;
