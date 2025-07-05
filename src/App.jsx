import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Staffs from './components/Staffs';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <section id="home"><Hero /></section>

      {/* About Section */}
      <section id="about"><About /></section>

      {/* Services Section */}
      <section id="services"><Services /></section>

      {/* Staffs Section */}
      <section id="staffs"><Staffs /></section>

      {/* Sponsors Section */}
      <section id="sponsors"><Sponsors /></section>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}

export default App;