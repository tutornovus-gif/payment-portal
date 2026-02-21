import React from 'react';

const Cancel = () => {
    return (
        <div className="card" style={{ maxWidth: '600px', margin: '4rem auto', textAlign: 'center', padding: '4rem 3rem' }}>
            <div style={{
                width: '100px',
                height: '100px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '2px solid var(--secondary-blue)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2.5rem',
                color: 'var(--secondary-blue)',
                fontSize: '3rem',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)'
            }}>
                !
            </div>
            <h1 style={{
                color: 'var(--text-main)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-tech)',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }}>
                Process Halted
            </h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                The payment process was interrupted or cancelled. No charges were made to your account.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn-primary" onClick={() => window.location.href = '/'}>
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default Cancel;
