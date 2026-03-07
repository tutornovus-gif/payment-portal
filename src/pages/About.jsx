import React from 'react';

const About = () => {
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
                About Us
            </h1>

            <div className="card" style={{ padding: '3rem', lineHeight: '1.8' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>Who We Are</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        Novus Solutions is a forward-thinking web development company specializing in creating innovative digital experiences. We combine cutting-edge technology with creative design to deliver solutions that exceed expectations.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>Our Mission</h2>
                    <p style={{ color: 'var(--text-main)' }}>
                        To empower businesses with scalable, intelligent web solutions that drive growth and innovation in the digital age.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--primary-green)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>Our Expertise</h2>
                    <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem' }}>
                        <li>Web & App Development</li>
                        <li>AI & Machine Learning Solutions</li>
                        <li>Cloud Integration & ERP Systems</li>
                        <li>UI/UX Design</li>
                        <li>Live Domain Training & Internships</li>
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

export default About;
