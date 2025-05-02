import React, { useEffect } from 'react';
import Layout from './layout/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Qualifications from './components/Qualifications';
import ContactForm from './components/ContactForm';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Local Web Refresh | Web Solutions for Auckland Businesses";
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Qualifications />
      <ContactForm />
    </Layout>
  );
}

export default App;