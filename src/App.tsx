import { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { AdminContacts } from './components/AdminContacts';

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  // Check for admin access in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      setShowAdmin(true);
    }
  }, []);

  if (showAdmin) {
    return <AdminContacts />;
  }

  return <LandingPage />;
}