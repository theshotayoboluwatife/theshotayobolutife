import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebase';

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
      <div style={{ textAlign: 'center', padding: '4em 0', color: 'rgba(255,255,255,0.7)', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <p style={{ fontSize: '1.2rem' }}>Loading projects...</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4em 0', color: 'rgba(255,255,255,0.7)', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <p style={{ fontSize: '1.2rem' }}>No projects available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="projects" id="project_list">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <div
            className="project-image"
            style={{
              background: `url('/uploads/${project.imageName}') no-repeat center center/cover`,
              minHeight: '400px'
            }}
          ></div>

          <div className="project-content">
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: '800', marginBottom: '1rem' }}>
              {project.title}
            </h2>

            <p style={{ marginTop: '1em', marginBottom: '1.5em', lineHeight: '1.8', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: '#5f5f5f' }}>
              {project.about}
            </p>

            <div className="badges" style={{ marginBottom: '2em', marginTop: '1.5em', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags && project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="badge"
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    border: '2px solid #4caf50',
                    color: '#4caf50',
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                    fontWeight: '600'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

          <div className="buttons" style={{ marginTop: '1.5em', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.liveLink && (
              <a
                href={project.liveLink}
                className="btn live-demo"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '0.85rem 1.8rem',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  fontWeight: '700',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  transition: 'all 0.3s',
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
                className="btn view-source"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '0.85rem 1.8rem',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  fontWeight: '700',
                  borderRadius: '8px',
                  background: '#f5f5f5',
                  color: '#333',
                  transition: 'all 0.3s',
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

export default ProjectsSection;