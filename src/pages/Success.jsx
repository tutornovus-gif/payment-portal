import React from 'react';

const Success = () => {
    return (
        <div className="card" style={{ maxWidth: '600px', margin: '4rem auto', textAlign: 'center', padding: '4rem 3rem' }}>
            <div style={{
                width: '100px',
                height: '100px',
                background: 'rgba(74, 222, 128, 0.1)',
                border: '2px solid var(--primary-green)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2.5rem',
                color: 'var(--primary-green)',
                fontSize: '3rem',
                boxShadow: 'var(--shadow-glow)'
            }}>
                ✓
            </div>
            <h1 style={{
                color: 'var(--text-main)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-tech)',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }}>
                Registration Success!
            </h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                Thank you for joining Novus Solutions. Your internship registration fee of ₹99 has been processed securely.
            </p>
            <button className="btn-primary" onClick={() => window.location.href = '/'}>
                Back to Dashboard
            </button>
        </div>
    );
};

export default Success;
