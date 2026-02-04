import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import styles from './BlogList.module.css';

const BlogList = () => {
  return (
    <div className={styles.blogList}>
      <div className="container-narrow">
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>
            <span className="gradient-text">Blog Posts</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Thoughts, learnings, and insights on AI, ML, web development, and tech.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className={styles.postsContainer}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`glass-card ${styles.postCard}`}
            >
              <div className={styles.postMeta}>
                <span className={styles.postDate}>{post.date}</span>
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <span className={styles.readMore}>
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
