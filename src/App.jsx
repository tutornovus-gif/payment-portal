import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import PaymentForm from './components/PaymentForm'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import Banner from './components/Banner'
import Terms from './pages/Terms'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import Programs from './pages/Programs'

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderContent = () => {
    switch (path) {
      case '/success': return <Success />;
      case '/cancel': return <Cancel />;
      case '/terms': return <Terms />;
      case '/about': return <About />;
      case '/contact': return <Contact />;
      case '/privacy': return <Privacy />;
      case '/refund': return <Refund />;
      case '/programs': return <Programs />;
      default: return (
        <>
          <Hero />
          <PaymentForm />
        </>
      );
    }
  };

  return (
    <div className="app-wrapper">
      {showBanner && <Banner onClose={() => setShowBanner(false)} />}
      <div className="gradient-bg"></div>
      <div className="glow" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow" style={{ bottom: '10%', right: '5%', background: 'var(--secondary-blue)' }}></div>

      <div className="app-container">
        {renderContent()}
        <footer className="footer-v2">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>NOVUS SOLUTIONS</h3>
              <p>Transforming ideas into digital solutions with cutting-edge technology.</p>
              <div className="contact-info">
                <p>📍 67/B3 Thillai Nagar, Tiruchirappalli - 620018</p>
                <p>📧 contact@novussols.in</p>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="/about">About Us</a>
              <a href="/programs">Programs</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-links">
              <h4>Compliance</h4>
              <a href="/terms">Terms & Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/refund">Refund Policy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Novus Solutions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
