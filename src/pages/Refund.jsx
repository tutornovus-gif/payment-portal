import React from 'react';

const Refund = () => {
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
                Refund Policy
            </h1>

            <div className="card" style={{ padding: '3rem', lineHeight: '1.8' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>No Refund Policy</h2>
                    <div style={{
                        background: 'rgba(74, 222, 128, 0.05)',
                        borderLeft: '4px solid var(--primary-green)',
                        padding: '1.5rem',
                        borderRadius: '0 8px 8px 0',
                        marginBottom: '1.5rem',
                        boxShadow: 'var(--shadow-glow)'
                    }}>
                        <p style={{ color: 'var(--primary-green)', fontWeight: '700', fontSize: '1.1rem' }}>
                            All registration fees paid for webinars or internships are non-refundable.
                        </p>
                    </div>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>Conditions</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        By proceeding with the payment, you acknowledge that the amount paid cannot be refunded under any circumstances, including but not limited to:
                    </p>
                    <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                        <li>Change of mind or personal schedule conflicts.</li>
                        <li>Inability to attend the live session (recordings may be provided where applicable).</li>
                        <li>Withdrawal from the internship program after registration.</li>
                    </ul>
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

export default Refund;
