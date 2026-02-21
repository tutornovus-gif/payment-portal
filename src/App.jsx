import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import PaymentForm from './components/PaymentForm'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

import Terms from './pages/Terms'

function App() {
  const [path, setPath] = useState(window.location.pathname);

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
      <div className="gradient-bg"></div>
      <div className="glow" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow" style={{ bottom: '10%', right: '5%', background: 'var(--secondary-blue)' }}></div>

      <div className="app-container">
        {renderContent()}
      </div>
    </div>
  )
}

export default App
