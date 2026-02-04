import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../utils/scrollReveal';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <ScrollReveal>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Learning Journal
              </h1>
              <p className={styles.heroSubtitle}>
                A personal space for exploring AI, Machine Learning, Data Science, and software development. 
                Documenting experiments, sharing insights, and building in public.
              </p>
              <div className={styles.heroActions}>
                <Link to="/blog" className={styles.primaryBtn}>
                  <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  Explore Blog
                </Link>
                <Link to="/about" className={styles.secondaryBtn}>
                  <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Content Grid */}
      <section className={styles.featured}>
        <ScrollReveal delay={100}>
          <h2 className={styles.sectionTitle}>Focus Areas</h2>
        </ScrollReveal>
        
        <div className={`${styles.cardGrid} scroll-reveal-stagger`}>
          {/* AI & ML Card */}
          <ScrollReveal delay={200}>
            <div className={`glass-card ${styles.featureCard}`}>
              <div className={styles.cardIconWrapper}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h.01M15 9h.01M9 15h6" />
                  </svg>
                </div>
              </div>
              <h3 className={styles.cardTitle}>AI & Machine Learning</h3>
              <p className={styles.cardDescription}>
                Neural networks, deep learning frameworks, and practical ML applications
              </p>
            </div>
          </ScrollReveal>

          {/* Data Science Card */}
          <ScrollReveal delay={300}>
            <div className={`glass-card ${styles.featureCard}`}>
              <div className={styles.cardIconWrapper}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9M13 17V5M8 17v-3" />
                  </svg>
                </div>
              </div>
              <h3 className={styles.cardTitle}>Data Science</h3>
              <p className={styles.cardDescription}>
                Data analysis, visualization, and extracting insights from complex datasets
              </p>
            </div>
          </ScrollReveal>

          {/* Web Development Card */}
          <ScrollReveal delay={400}>
            <div className={`glass-card ${styles.featureCard}`}>
              <div className={styles.cardIconWrapper}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
              </div>
              <h3 className={styles.cardTitle}>Web Development</h3>
              <p className={styles.cardDescription}>
                Modern, responsive applications using React and cutting-edge technologies
              </p>
            </div>
          </ScrollReveal>

          {/* Learning & Growth Card */}
          <ScrollReveal delay={500}>
            <div className={`glass-card ${styles.featureCard}`}>
              <div className={styles.cardIconWrapper}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
              <h3 className={styles.cardTitle}>Continuous Learning</h3>
              <p className={styles.cardDescription}>
                Documenting progress, sharing knowledge, and growing as a developer
              </p>
            </div>
          </ScrollReveal>

          {/* Problem Solving Card */}
          <ScrollReveal delay={600}>
            <div className={`glass-card ${styles.featureCard}`}>
              <div className={styles.cardIconWrapper}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
              </div>
              <h3 className={styles.cardTitle}>Problem Solving</h3>
              <p className={styles.cardDescription}>
                Tackling complex challenges with algorithmic thinking and creative solutions
              </p>
            </div>
          </ScrollReveal>

          {/* Research & Innovation Card */}
          <ScrollReveal delay={700}>
            <div className={`glass-card ${styles.featureCard}`}>
              <div className={styles.cardIconWrapper}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                    <path d="M12 2v10h10" />
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  </svg>
                </div>
              </div>
              <h3 className={styles.cardTitle}>Research & Innovation</h3>
              <p className={styles.cardDescription}>
                Exploring cutting-edge technologies and contributing to the AI research community
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
