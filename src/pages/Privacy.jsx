import React from 'react';

const Privacy = () => {
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
                Privacy Policy
            </h1>

            <div className="card" style={{ padding: '3rem', lineHeight: '1.8' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>1. Information Collection</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        We collect personal information such as Name, Email, Mobile Number, and Academic details when you register for our programs or webinars.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>2. Use of Information</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        The data collected is used solely for the following purposes:
                    </p>
                    <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                        <li>Processing your registration and payments.</li>
                        <li>Communicating updates regarding webinars or internships.</li>
                        <li>Issuing certificates and program-related materials.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>3. Data Security</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        We implement strict security measures to protect your data. Payment information is handled through Razorpay's secure, encrypted gateway; we do not store your credit card or banking details on our servers.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>4. Data Retention Policy</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including:
                    </p>
                    <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                        <li>Active participation in the registered webinar or internship.</li>
                        <li>Compliance with legal, accounting, or reporting requirements.</li>
                        <li>Internal audit and verification purposes.</li>
                    </ul>
                    <p style={{ color: 'var(--text-main)', marginTop: '1rem' }}>
                        Once the data is no longer required, it is securely deleted or anonymized in accordance with our security protocols.
                    </p>
                </section>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <a href="/" className="btn-secondary" style={{ textDecoration: 'none' }}>
                        Return Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
