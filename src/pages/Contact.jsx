import React from 'react';

const Contact = () => {
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
                Contact Us
            </h1>

            <div className="card" style={{ padding: '3rem', lineHeight: '1.8' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>Head Office</h2>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>
                        Novus Solutions<br />
                        67/B1, Thirupathur Road<br />
                        Devakottai-630302<br />
                        Tamil Nadu, India
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>Email Support</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        <a href="mailto:contact@novussols.in" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: 'bold' }}>
                            contact@novussols.in
                        </a>
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

export default Contact;
