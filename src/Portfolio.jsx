import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase/firebase'; // Adjust this import path to match your project structure

// ProjectsSection Component - Fetches from Firebase
const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const projectData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects: ", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4em 0', color: '#666' }}>
        <p style={{ fontSize: '1.2rem' }}>Loading projects...</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4em 0', color: '#666' }}>
        <p style={{ fontSize: '1.2rem' }}>No projects available at the moment.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
      {projects.map((project) => (
        <div key={project.id} className="project-card" style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e0e0e0', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '250px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
            <img
              src={`/uploads/${project.imageName}`}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '700', color: '#1a1a1a' }}>
              {project.title}
            </h3>

            <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.6', fontSize: '0.95rem', flex: 1 }}>
              {project.about}
            </p>

            {project.tags && project.tags.length > 0 && (
              <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '6px',
                      backgroundColor: '#f0f0f0',
                      color: '#333',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'auto' }}>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    borderRadius: '8px',
                    backgroundColor: '#333',
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'inline-block',
                    textAlign: 'center'
                  }}
                >
                  Live Project ↗
                </a>
              )}

              {project.sourceLink && (
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                    color: '#333',
                    border: '2px solid #333',
                    textDecoration: 'none',
                    display: 'inline-block',
                    textAlign: 'center'
                  }}
                >
                  View Source
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setShowMobileMenu(prev => !prev);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#fff', color: '#333', minHeight: '100vh' }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        @media (max-width: 768px) {
          .hero-profile { width: 180px !important; height: 180px !important; }
          .skill-grid { grid-template-columns: 1fr !important; }
          .info-grid { grid-template-columns: 1fr !important; }
        }
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .skill-badge {
          transition: all 0.3s ease;
        }
        .skill-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* NAVIGATION */}
      <nav style={{ backgroundColor: '#fff', padding: '20px 0', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', maxWidth: '1400px', margin: '0 auto' }}>
          <a href="#" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', fontWeight: '800', color: '#333', textDecoration: 'none', letterSpacing: '-0.5px' }}>
            Shotayo Boluwatife
          </a>

          {isMobile ? (
            <div onClick={toggleMobileMenu} style={{ fontSize: '1.8rem', cursor: 'pointer', color: '#333' }}>☰</div>
          ) : (
            <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
              <a href="#skills" style={{ color: '#666', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', transition: 'color 0.3s' }}>Skills</a>
              <a href="#projects" style={{ color: '#666', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', transition: 'color 0.3s' }}>Projects</a>
              <a href="#contact" style={{ padding: '12px 28px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '0.95rem' }}>Contact</a>
            </div>
          )}
        </div>

        {isMobile && showMobileMenu && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#fff', padding: '20px', borderTop: '1px solid #e0e0e0' }}>
            <a href="#skills" style={{ color: '#333', textDecoration: 'none', fontWeight: '600', padding: '10px 0' }}>Skills</a>
            <a href="#projects" style={{ color: '#333', textDecoration: 'none', fontWeight: '600', padding: '10px 0' }}>Projects</a>
            <a href="#contact" style={{ color: '#333', textDecoration: 'none', fontWeight: '700', padding: '10px 0', borderTop: '1px solid #e0e0e0' }}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#f8f9fa', padding: 'clamp(80px, 12vw, 120px) 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
       {/* Profile Picture */}
       <div
         className="hero-profile"
         style={{
           width: '250px',
           height: '250px',
           borderRadius: '50%',
           overflow: 'hidden',
           marginBottom: '40px',
           border: '4px solid #333',
           boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
         }}
       >
         <img
           src="/images/profile.jpg"
           alt="Shotayo Boluwatife"
           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
         />
       </div>


          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '900', marginBottom: '20px', lineHeight: '1.1', color: '#1a1a1a' }}>
            Mobile Application Developer
          </h1>



          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: '#777', maxWidth: '900px', lineHeight: '1.7', marginBottom: '40px' }}>
I build reliable and user-friendly mobile applications and backend systems that solve specific problems. From concept to launch, I focus on designing and developing products that work efficiently.
My stack includes Flutter, React Native, Swift, Java, and TypeScript.          </p>

          <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#projects" style={{ padding: '16px 38px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>View Projects →</a>
            <a href="#contact" style={{ padding: '16px 38px', backgroundColor: 'transparent', color: '#333', textDecoration: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', border: '2px solid #333' }}>Get In Touch</a>
          </div>
        </div>
      </section>




       {/* SKILLS SECTION */}
            <section id="skills" style={{ padding: 'clamp(70px, 12vw, 110px) 20px', backgroundColor: '#f8f9fa' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', marginBottom: '20px', textAlign: 'center', color: '#1a1a1a' }}>
                  Skills & Technologies
                </h2>
                <p style={{ color: '#666', textAlign: 'center', fontSize: '1.1rem', marginBottom: '50px' }}>Technologies I work with daily</p>

                <div className="skill-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
                  {[
                    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
                    { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
                    { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
                    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
                    { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
                    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                 { name: 'Replit', logo: 'https://replit.com/public/images/logo-small.png' },
                               { name: 'Twilio', logo: 'https://www.logo.wine/a/logo/Twilio/Twilio-Logo.wine.svg' }
                  ].map((skill, index) => (
                    <div key={index} className="skill-badge" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
                      <div style={{ height: '60px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={skill.logo} alt={skill.name} style={{ maxHeight: '60px', maxWidth: '60px', objectFit: 'contain' }} />
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#333' }}>{skill.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>

      {/* PROJECTS SECTION */}
      <section id="projects" style={{ padding: 'clamp(70px, 12vw, 110px) 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', marginBottom: '20px', textAlign: 'center', color: '#1a1a1a' }}>
            Work Experience
          </h2>
          <p style={{ color: '#666', textAlign: 'center', fontSize: '1.1rem', marginBottom: '50px' }}>Recent projects and collaborations</p>

          <ProjectsSection />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ padding: 'clamp(70px, 12vw, 110px) 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '25px', color: '#1a1a1a' }}>
            Let's Work Together
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#666', marginBottom: '50px', lineHeight: '1.6' }}>
            Available for freelance projects and full-time opportunities
          </p>

          <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
            <a href="mailto:shotayobolu@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '18px 42px', backgroundColor: '#333', color: '#fff', fontWeight: '700', fontSize: '1.05rem', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>Email Me</a>
            <a href="tel:+2348020560976" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '18px 42px', backgroundColor: 'transparent', color: '#333', fontWeight: '700', fontSize: '1.05rem', borderRadius: '8px', textDecoration: 'none', border: '2px solid #333' }}>Call Me</a>
          </div>

          <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Email</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '600', color: '#333' }}>shotayobolu@gmail.com</div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Phone</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '600', color: '#333' }}>+234 802 056 0976</div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Location</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '600', color: '#333' }}>Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '40px 20px', textAlign: 'center' }}>
        <p style={{ color: '#ccc', fontSize: '1rem' }}>© 2025 Shotayo Boluwatife. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;