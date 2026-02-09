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
            <h1 className={styles.heroTitle}>
              Learning <br /> Journal
            </h1>
            <p className={styles.heroSubtitle}>
              A personal space for exploring AI, Machine Learning, Data Science, and modern web development.
              Documenting experiments, sharing insights, and building in public.
            </p>
            <div className={styles.heroActions}>
              <Link to="/blog" className={styles.primaryBtn}>
                Explore Blog
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/about" className={styles.secondaryBtn}>
                About Me
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Content Grid */}
      <section className={styles.featured}>
        <ScrollReveal delay={100}>
          <h2 className={styles.sectionTitle}>Focus Areas</h2>
        </ScrollReveal>

        <div className={styles.cardGrid}>
          {/* AI & ML Card */}
          <ScrollReveal delay={200}>
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>AI & Machine Learning</h3>
              <p className={styles.cardDescription}>
                Neural networks, deep learning frameworks, and practical ML applications.
              </p>
            </div>
          </ScrollReveal>

          {/* Data Science Card */}
          <ScrollReveal delay={300}>
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Data Science</h3>
              <p className={styles.cardDescription}>
                Data analysis, visualization, and extracting insights from complex datasets.
              </p>
            </div>
          </ScrollReveal>

          {/* Web Development Card */}
          <ScrollReveal delay={400}>
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Web Development</h3>
              <p className={styles.cardDescription}>
                Modern, responsive applications using React and cutting-edge technologies.
              </p>
            </div>
          </ScrollReveal>

          {/* Learning & Growth Card */}
          <ScrollReveal delay={500}>
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Continuous Learning</h3>
              <p className={styles.cardDescription}>
                Documenting progress, sharing knowledge, and growing as a developer.
              </p>
            </div>
          </ScrollReveal>

          {/* Problem Solving Card */}
          <ScrollReveal delay={600}>
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Problem Solving</h3>
              <p className={styles.cardDescription}>
                Tackling complex challenges with algorithmic thinking and creative solutions.
              </p>
            </div>
          </ScrollReveal>

          {/* Research & Innovation Card */}
          <ScrollReveal delay={700}>
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v8h8"></path>
                  <path d="M12 2a10 10 0 1 1-10 10 10 10 0 0 1 10-10z"></path>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Research & Innovation</h3>
              <p className={styles.cardDescription}>
                Exploring cutting-edge technologies and contributing to the AI community.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
