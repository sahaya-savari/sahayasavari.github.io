import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../utils/scrollReveal';
import styles from './BlogList.module.css';

const BlogList = () => {
  return (
    <div className={styles.blogList}>
      <div className="container">
        {/* Page Header */}
        <ScrollReveal>
          <header className={styles.header}>
            <h1 className={styles.pageTitle}>Explore Topics</h1>
            <p className={styles.pageSubtitle}>
              Dive into specialized articles and walkthroughs on the technologies and concepts I'm currently exploring.
            </p>
          </header>
        </ScrollReveal>

        {/* Blog Topics Grid */}
        <div className={styles.postsContainer}>
          <ScrollReveal delay={100}>
            <Link to="/blog/python" className={styles.topicCard}>
              <div className={styles.topicIcon}>🐍</div>
              <h2 className={styles.topicTitle}>Python & AI</h2>
              <p className={styles.topicDescription}>
                Core learning: Neural networks, machine learning frameworks, and Python core concepts.
              </p>
              <span className={styles.viewBtn}>
                View Collection
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link to="/blog/github" className={styles.topicCard}>
              <div className={styles.topicIcon}>🛠️</div>
              <h2 className={styles.topicTitle}>GitHub Guide</h2>
              <p className={styles.topicDescription}>
                Essential dev skills: Repository management, version control, and collaboration workflows.
              </p>
              <span className={styles.viewBtn}>
                Read Guide
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link to="/blog/programming" className={styles.topicCard}>
              <div className={styles.topicIcon}>🗺️</div>
              <h2 className={styles.topicTitle}>Learning Path</h2>
              <p className={styles.topicDescription}>
                Universal roadmap: How to learn programming effectively and stay consistent.
              </p>
              <span className={styles.viewBtn}>
                Explore Roadmap
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Link to="/blog/react" className={styles.topicCard}>
              <div className={styles.topicIcon}>⚛️</div>
              <h2 className={styles.topicTitle}>React & Web</h2>
              <p className={styles.topicDescription}>
                Modern UI development, React Hooks, and frontend best practices.
              </p>
              <span className={styles.viewBtn}>
                View Collection
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
