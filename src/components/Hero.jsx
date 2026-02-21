import React from 'react';
import logo from '../assets/logo.png';

const Hero = () => {
    return (
        <section className="hero-section" style={{ textAlign: 'center', padding: '3rem 1rem 2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <img
                    src={logo}
                    alt="Novus Solutions Logo"
                    style={{
                        height: '100px',
                        filter: 'drop-shadow(0 0 10px rgba(74, 222, 128, 0.3))'
                    }}
                />
            </div>
            <h1 style={{
                fontSize: '3.2rem',
                fontWeight: '800',
                color: 'var(--text-main)',
                marginBottom: '1rem',
                letterSpacing: '1px',
                fontFamily: 'var(--font-tech)',
                textTransform: 'uppercase'
            }}>
                NOVUS <span style={{
                    background: 'linear-gradient(to right, var(--primary-green), var(--secondary-blue))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>SOLUTIONS</span>
            </h1>
            <p style={{
                fontSize: '1.2rem',
                color: 'var(--text-muted)',
                maxWidth: '700px',
                margin: '0 auto',
                fontFamily: 'var(--font-tech)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: '500'
            }}>
                Innovate. Integrate. Inspire.
            </p>
        </section>
    );
};

export default Hero;
