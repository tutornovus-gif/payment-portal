import React from 'react';

const Programs = () => {
    const webinars = [
        {
            title: "Full Stack Web Development",
            description: "Master modern web technologies including React, Node.js, and Cloud deployment. Transition from basics to advanced architecture.",
            duration: "4 Weeks",
            type: "Internship & Training"
        },
        {
            title: "AI & Machine Learning Essentials",
            description: "Explore the world of Artificial Intelligence. Learn to integrate ML models into real-world web applications.",
            duration: "2 Weeks",
            type: "Workshop"
        },
        {
            title: "UI/UX Design Masterclass",
            description: "Create stunning user interfaces. Learn the psychology behind user-centered design and modern design tools.",
            duration: "1 Week",
            type: "Webinar Series"
        }
    ];

    return (
        <div className="page-container" style={{ padding: '4rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                textAlign: 'center',
                fontFamily: 'var(--font-tech)',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                background: 'linear-gradient(to right, var(--primary-green), var(--secondary-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
            }}>
                Our Programs
            </h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                Expert-led training and internship opportunities to kickstart your tech career.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {webinars.map((item, index) => (
                    <div key={index} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--primary-green)',
                            fontFamily: 'var(--font-tech)',
                            marginBottom: '0.5rem',
                            textTransform: 'uppercase'
                        }}>
                            {item.type} • {item.duration}
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{item.title}</h2>
                        <p style={{ color: 'var(--text-muted)', flexGrow: 1, marginBottom: '1.5rem' }}>{item.description}</p>
                        <a href="/" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none', padding: '10px' }}>
                            Register Now
                        </a>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <a href="/" className="btn-secondary" style={{ textDecoration: 'none' }}>
                    Return Home
                </a>
            </div>
        </div>
    );
};

export default Programs;
