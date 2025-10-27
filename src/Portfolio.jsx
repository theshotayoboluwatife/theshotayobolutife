import React, { useEffect, useState } from 'react';

// CSS imports
import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/unicons.css';
import './assets/css/tooplate-style.css';
import './assets/css/revamp.css';

import ProjectsSection from './components/projectSection';

const Home = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(prev => !prev);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const progresses = document.querySelectorAll('.skill-progress');
    progresses.forEach(progress => {
      const width = progress.style.width;
      progress.style.width = '0';
      setTimeout(() => {
        progress.style.width = width;
      }, 200);
    });
  }, []);

  return (
    <>
<style>{`
  @media (max-width: 768px) {
    .mobile-nav-menu {
      display: none;
    }
    .mobile-hamburger {
      display: block !important;
    }
    .hero-decorative {
      display: none !important;
    }
    .about-flex-container {
      flex-direction: column !important;
    }
    .about-logo-container {
      width: 200px !important;
      height: 200px !important;
    }
    .contact-info-grid {
      flex-direction: column !important;
      gap: 30px !important;
    }
    .nav-logo-text {
      font-size: 1rem !important;
    }
    .nav-logo-img {
      height: 45px !important;
      width: 45px !important;
    }
  }
  .mobile-hamburger {
    display: none;
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`}</style>

    {/* NAVIGATION */}
      <nav style={{ backgroundColor: '#0f0f1e', padding: '15px 0', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 1000 }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', maxWidth: '1400px', margin: '0 auto' }}>
             <a href="index.html" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '12px' }}>
               <img src="images/teddverse-logo.png" alt="Teddverse Technologies" className="nav-logo-img" style={{ height: '65px', width: '65px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(102,126,234,0.3)', boxShadow: '0 4px 15px rgba(102,126,234,0.2)' }} />
               <span className="nav-logo-text" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px', whiteSpace: 'nowrap' }}>
                 Teddverse <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Tech</span>
               </span>
             </a>

             {/* Hamburger only on mobile */}
             {isMobile && (
               <div
                 className="mobile-hamburger"
                 onClick={toggleMobileMenu}
                 style={{
                   fontSize: '1.8rem',
                   color: '#fff',
                   cursor: 'pointer',
                 }}
               >
                 ☰
               </div>
             )}

             {/* Desktop menu */}
             {!isMobile && (
               <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                 <ul style={{ listStyle: 'none', display: 'flex', gap: '25px', margin: 0, padding: 0, alignItems: 'center' }}>
                   <li><a href="#about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '1.05rem', fontWeight: '600' }}>About</a></li>
                   <li><a href="#services" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '1.05rem', fontWeight: '600' }}>Services</a></li>
                   <li><a href="#project_list" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '1.05rem', fontWeight: '600' }}>Projects</a></li>
                   <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '700', padding: '10px 25px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'inline-block', whiteSpace: 'nowrap' }}>Contact</a></li>
                 </ul>
               </div>
             )}
           </div>

           {/* Mobile menu dropdown */}
           {isMobile && showMobileMenu && (
             <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#0f0f1e', padding: '15px 20px' }}>
               <a href="#about" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', padding: '10px 0' }}>About</a>
               <a href="#services" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', padding: '10px 0' }}>Services</a>
               <a href="#project_list" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', padding: '10px 0' }}>Projects</a>
               <a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '10px' }}>Contact</a>
             </div>
           )}
         </nav>


      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%)', padding: 'clamp(60px, 15vw, 120px) 20px', position: 'relative', overflow: 'hidden', minHeight: 'clamp(500px, 80vh, 750px)', display: 'flex', alignItems: 'center' }}>
        <div className="hero-decorative" style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', background: 'linear-gradient(135deg, rgba(102,126,234,0.15) 0%, rgba(118,75,162,0.15) 100%)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', transform: 'rotate(45deg)' }}></div>
        <div className="hero-decorative" style={{ position: 'absolute', bottom: '15%', left: '8%', width: '300px', height: '300px', border: '3px solid rgba(102,126,234,0.2)', borderRadius: '50%' }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', color: '#fff', marginBottom: 'clamp(20px, 5vw, 30px)', lineHeight: '1.1', textShadow: '0 4px 30px rgba(0,0,0,0.5)', letterSpacing: 'clamp(-1px, -0.5vw, -2px)' }}>
              Building Digital<br />Solutions That<br /><span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Matter</span>
            </h1>
            <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', fontWeight: '400', color: 'rgba(255,255,255,0.75)', marginBottom: 'clamp(25px, 5vw, 40px)', letterSpacing: '1px', textTransform: 'uppercase' }}>Innovative Technology Company</h2>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '50px', maxWidth: '900px', margin: '0 auto 50px' }}>
              We transform ideas into powerful, scalable products that drive business growth. From mobile applications to web solutions, we deliver technology that makes an impact.
            </p>
            <div style={{ display: 'flex', gap: 'clamp(15px, 3vw, 25px)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'clamp(40px, 10vw, 80px)' }}>
              <a href="#project_list" style={{ display: 'inline-block', padding: 'clamp(14px, 3vw, 18px) clamp(30px, 5vw, 45px)', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontWeight: '700', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 15px 40px rgba(102,126,234,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>View Our Work</a>
              <a href="#contact" style={{ display: 'inline-block', padding: 'clamp(14px, 3vw, 18px) clamp(30px, 5vw, 45px)', backgroundColor: 'transparent', color: '#fff', fontWeight: '700', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', borderRadius: '50px', textDecoration: 'none', border: '3px solid rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Get Started</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(30px, 8vw, 80px)', flexWrap: 'wrap', paddingTop: 'clamp(20px, 5vw, 40px)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px' }}>50+</div><div style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Projects</div></div>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px' }}>30+</div><div style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Clients</div></div>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px' }}>5+</div><div style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Years</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="project py-5" id="services" style={{ padding: 'clamp(40px, 8vw, 80px) 20px' }}>
        <div className="col-lg-11 text-center mx-auto col-12">
          <div className="col-lg-8 mx-auto" style={{ marginBottom: '3em' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Our Core Services</h2>
            <p style={{ color: '#666', marginTop: '1em', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>Comprehensive technology solutions tailored to your business needs</p>
          </div>
        </div>
        <div className="skill-rating"><div className="skill-rating-container">
          <div className="skill-column">
            <div className="skill-item"><div className="skill-icon" style={{ marginBottom: '1.5em', display: 'flex', justifyContent: 'center' }}><div style={{ width: 'clamp(140px, 30vw, 180px)', height: 'clamp(140px, 30vw, 180px)', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" alt="Mobile Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div><h3 className="skill-title" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>Mobile App Development</h3><p style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: '#666', marginTop: '8px' }}>Native and cross-platform mobile solutions</p></div>
            <div className="skill-item"><div className="skill-icon" style={{ marginBottom: '1.5em', display: 'flex', justifyContent: 'center' }}><div style={{ width: 'clamp(140px, 30vw, 180px)', height: 'clamp(140px, 30vw, 180px)', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" alt="Web Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div><h3 className="skill-title" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>Web Development</h3><p style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: '#666', marginTop: '8px' }}>Responsive and scalable web applications</p></div>
          </div>
          <div className="skill-column">
            <div className="skill-item"><div className="skill-icon" style={{ marginBottom: '1.5em', display: 'flex', justifyContent: 'center' }}><div style={{ width: 'clamp(140px, 30vw, 180px)', height: 'clamp(140px, 30vw, 180px)', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" alt="UI/UX Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div><h3 className="skill-title" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>UI/UX Design</h3><p style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: '#666', marginTop: '8px' }}>User-centered design that converts</p></div>
            <div className="skill-item"><div className="skill-icon" style={{ marginBottom: '1.5em', display: 'flex', justifyContent: 'center' }}><div style={{ width: 'clamp(140px, 30vw, 180px)', height: 'clamp(140px, 30vw, 180px)', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80" alt="Cloud Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div><h3 className="skill-title" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>Cloud Solutions</h3><p style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: '#666', marginTop: '8px' }}>Scalable backend and infrastructure</p></div>
          </div>
        </div></div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)', padding: 'clamp(60px, 12vw, 100px) 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="about-flex-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '80px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>Why Choose <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Teddverse?</span></h1>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'rgba(255,255,255,0.7)', marginBottom: 'clamp(30px, 6vw, 50px)', lineHeight: '1.6' }}>Your trusted partner in digital transformation</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 4vw, 35px)', marginBottom: 'clamp(30px, 6vw, 50px)' }}>
                <div><h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', marginBottom: '10px', color: '#667eea', fontWeight: '700' }}>Our Mission</h3><p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Empowering businesses through innovative technology solutions</p></div>
                <div><h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', marginBottom: '10px', color: '#764ba2', fontWeight: '700' }}>Our Expertise</h3><p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Flutter, React, Node.js, Firebase, AWS, and modern tech stack</p></div>
                <div><h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', marginBottom: '10px', color: '#a78bfa', fontWeight: '700' }}>Our Promise</h3><p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Quality delivery, transparent communication, and ongoing support</p></div>
              </div>
              <a href="#contact" style={{ display: 'inline-block', padding: 'clamp(12px, 2.5vw, 16px) clamp(30px, 5vw, 40px)', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontWeight: '700', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 30px rgba(102,126,234,0.3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Get In Touch →</a>
            </div>
            <div className="about-logo-container" style={{ flexShrink: 0, width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden', border: '5px solid rgba(102,126,234,0.2)', boxShadow: '0 20px 60px rgba(102,126,234,0.2)', position: 'relative' }}>
<div style={{ position: 'absolute', inset: '-30px', background: 'linear-gradient(45deg, #667eea, #764ba2)', filter: 'blur(40px)', opacity: 0.3 }}></div>              <img src="images/teddverse-logo.png" alt="Teddverse Technologies" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS HEADER */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', padding: 'clamp(60px, 10vw, 80px) 20px clamp(30px, 5vw, 40px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: '#fff', marginBottom: '20px' }}>Our <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Portfolio</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.6' }}>Explore the innovative projects we've delivered for our clients</p>
        </div>
      </section>

      <ProjectsSection />

      {/* CONTACT */}
      <section id="contact" style={{ background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)', padding: 'clamp(60px, 12vw, 100px) 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', marginBottom: '25px', color: '#fff', lineHeight: '1.2' }}>Let's Build Something <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Great</span></h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: 'rgba(255,255,255,0.7)', marginBottom: '50px', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 50px' }}>Ready to transform your ideas into reality? Get in touch with us today and let's start building your next digital success story.</p>
          <div style={{ display: 'flex', gap: 'clamp(15px, 3vw, 25px)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:bolu@teddverse.pro" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: 'clamp(14px, 3vw, 18px) clamp(30px, 5vw, 45px)', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontWeight: '700', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 15px 40px rgba(102,126,234,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>📧 Email Us</a>
            <a href="tel:+2348020560976" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: 'clamp(14px, 3vw, 18px) clamp(30px, 5vw, 45px)', backgroundColor: 'transparent', color: '#fff', fontWeight: '700', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', borderRadius: '50px', textDecoration: 'none', border: '3px solid rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '1px' }}>📞 Call Us</a>
          </div>
          <div className="contact-info-grid" style={{ marginTop: 'clamp(50px, 10vw, 80px)', padding: 'clamp(25px, 5vw, 40px)', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(30px, 8vw, 60px)', flexWrap: 'wrap' }}>
              <div><div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</div><div style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: '#fff', fontWeight: '600' }}>bolu@teddverse.pro</div></div>
              <div><div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</div><div style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: '#fff', fontWeight: '600' }}>+234 802 056 0976</div></div>
              <div><div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</div><div style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: '#fff', fontWeight: '600' }}>Akure, Nigeria</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0a0a14', color: '#fff', padding: '40px 20px', borderTop: '1px solid rgba(102,126,234,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: '0', fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>© 2025 Teddverse Technologies. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;