import { useState } from 'react';
import { blogPosts } from '../../data/blogPosts';
import styles from './BlogTopicPage.module.css';

const BlogTopicPage = ({ title, topicKey, description }) => {
    const [expandedSlug, setExpandedSlug] = useState(null);

    // Filter posts based on the topicKey
    const posts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(topicKey.toLowerCase()) ||
        post.slug.toLowerCase().includes(topicKey.toLowerCase()) ||
        post.content.toLowerCase().includes(topicKey.toLowerCase())
    );

    const toggleExpand = (slug) => {
        setExpandedSlug(expandedSlug === slug ? null : slug);
    };

    return (
        <div className={styles.blogTopicPage}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        <span className="gradient-text">{title}</span>
                    </h1>
                    <p className={styles.description}>{description}</p>
                </header>

                <div className={styles.postsGrid}>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <article key={post.slug} className={styles.postCard}>
                                <header className={styles.postHeader}>
                                    <time className={styles.date}>{post.date}</time>
                                    <h2 className={styles.postTitle}>{post.title}</h2>
                                </header>

                                <p className={styles.excerpt}>{post.excerpt}</p>

                                {expandedSlug === post.slug && (
                                    <div
                                        className={styles.expandedContent}
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                )}

                                <button
                                    className={styles.expandBtn}
                                    onClick={() => toggleExpand(post.slug)}
                                >
                                    {expandedSlug === post.slug ? 'Show Less' : 'Read Full Post →'}
                                </button>
                            </article>
                        ))
                    ) : (
                        <div className={styles.postCard} style={{ textAlign: 'center' }}>
                            <p>No posts found for this topic yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogTopicPage;
