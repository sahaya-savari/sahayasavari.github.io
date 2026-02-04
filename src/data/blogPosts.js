// Blog posts data - HTML content is sanitized before rendering
export const blogPosts = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    date: 'January 15, 2026',
    excerpt: 'A comprehensive guide to building modern web applications with React, covering components, hooks, and best practices.',
    content: `
      <h2>Introduction to React</h2>
      <p>React has revolutionized the way we build user interfaces. In this comprehensive guide, we'll explore the fundamentals of React and how to get started building modern web applications.</p>
      
      <h3>What is React?</h3>
      <p>React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It allows developers to create reusable UI components and manage application state efficiently.</p>
      
      <h3>Key Concepts</h3>
      <p><strong>Components:</strong> The building blocks of React applications. Components are reusable pieces of UI that can be composed together to create complex interfaces.</p>
      
      <p><strong>JSX:</strong> A syntax extension that allows you to write HTML-like code in JavaScript. It makes component code more readable and expressive.</p>
      
      <p><strong>Props:</strong> Short for properties, props allow you to pass data from parent components to child components.</p>
      
      <p><strong>State:</strong> Local data that belongs to a component. When state changes, React automatically re-renders the component.</p>
      
      <h3>React Hooks</h3>
      <p>Hooks are functions that let you use state and other React features in functional components. The most commonly used hooks are:</p>
      
      <ul>
        <li><strong>useState:</strong> Manages local component state</li>
        <li><strong>useEffect:</strong> Handles side effects like data fetching</li>
        <li><strong>useContext:</strong> Accesses context values</li>
        <li><strong>useRef:</strong> Creates mutable references</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>When building React applications, keep these best practices in mind:</p>
      
      <ol>
        <li>Keep components small and focused on a single responsibility</li>
        <li>Use functional components with hooks instead of class components</li>
        <li>Lift state up when multiple components need access to the same data</li>
        <li>Use keys when rendering lists to help React identify which items have changed</li>
        <li>Optimize performance with React.memo and useMemo when necessary</li>
      </ol>
      
      <h3>Conclusion</h3>
      <p>React is a powerful tool for building modern web applications. By understanding its core concepts and following best practices, you can create efficient, maintainable, and scalable applications.</p>
    `
  },
  {
    slug: 'machine-learning-basics',
    title: 'Machine Learning Basics',
    date: 'January 10, 2026',
    excerpt: 'Understanding the fundamentals of machine learning, from supervised learning to neural networks.',
    content: `
      <h2>Understanding Machine Learning</h2>
      <p>Machine Learning is a subset of artificial intelligence that enables computers to learn from data without being explicitly programmed. Let's dive into the fundamentals.</p>
      
      <h3>Types of Machine Learning</h3>
      
      <h4>1. Supervised Learning</h4>
      <p>In supervised learning, the algorithm learns from labeled training data. Examples include:</p>
      <ul>
        <li><strong>Classification:</strong> Predicting discrete labels (spam vs. not spam)</li>
        <li><strong>Regression:</strong> Predicting continuous values (house prices)</li>
      </ul>
      
      <h4>2. Unsupervised Learning</h4>
      <p>The algorithm learns patterns from unlabeled data. Common techniques include:</p>
      <ul>
        <li><strong>Clustering:</strong> Grouping similar data points</li>
        <li><strong>Dimensionality Reduction:</strong> Reducing the number of features</li>
      </ul>
      
      <h4>3. Reinforcement Learning</h4>
      <p>An agent learns to make decisions by taking actions in an environment to maximize rewards.</p>
      
      <h3>Key Concepts</h3>
      
      <p><strong>Features:</strong> The input variables used to make predictions. Feature engineering is crucial for model performance.</p>
      
      <p><strong>Training:</strong> The process of feeding data to an algorithm so it can learn patterns.</p>
      
      <p><strong>Validation:</strong> Testing the model on unseen data to evaluate its performance.</p>
      
      <p><strong>Overfitting:</strong> When a model performs well on training data but poorly on new data.</p>
      
      <h3>Popular Algorithms</h3>
      <ul>
        <li>Linear Regression</li>
        <li>Logistic Regression</li>
        <li>Decision Trees</li>
        <li>Random Forests</li>
        <li>Support Vector Machines (SVM)</li>
        <li>Neural Networks</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To begin your machine learning journey, start with Python and libraries like scikit-learn, pandas, and NumPy. Practice with real datasets and gradually move to more complex algorithms and deep learning frameworks.</p>
    `
  },
  {
    slug: 'data-visualization-tips',
    title: 'Data Visualization Tips',
    date: 'January 5, 2026',
    excerpt: 'Best practices for creating effective and beautiful data visualizations that tell compelling stories.',
    content: `
      <h2>The Art of Data Visualization</h2>
      <p>Data visualization is more than just creating pretty charts. It's about communicating insights effectively and telling compelling stories with data.</p>
      
      <h3>Why Visualization Matters</h3>
      <p>Humans process visual information much faster than text. A well-designed visualization can reveal patterns, trends, and insights that might be hidden in raw data.</p>
      
      <h3>Choosing the Right Chart Type</h3>
      
      <h4>Line Charts</h4>
      <p>Best for showing trends over time. Use when you want to display continuous data.</p>
      
      <h4>Bar Charts</h4>
      <p>Perfect for comparing categories. Keep bars clearly labeled and avoid 3D effects.</p>
      
      <h4>Scatter Plots</h4>
      <p>Ideal for showing relationships between two variables and identifying correlations.</p>
      
      <h4>Pie Charts</h4>
      <p>Use sparingly and only when showing parts of a whole (limit to 5-7 segments).</p>
      
      <h3>Design Principles</h3>
      
      <p><strong>1. Simplicity:</strong> Remove chart junk and focus on the data. Less is often more.</p>
      
      <p><strong>2. Color Choice:</strong> Use color purposefully. Consider accessibility and color blindness.</p>
      
      <p><strong>3. Proper Labels:</strong> Always label axes, include units, and provide clear titles.</p>
      
      <p><strong>4. Context:</strong> Provide enough context for viewers to understand the data.</p>
      
      <p><strong>5. Consistency:</strong> Use consistent colors, fonts, and styles across related visualizations.</p>
      
      <h3>Common Mistakes to Avoid</h3>
      <ul>
        <li>Starting axes at non-zero values to exaggerate differences</li>
        <li>Using too many colors or patterns</li>
        <li>3D charts that distort perception</li>
        <li>Inappropriate chart types for the data</li>
        <li>Too much information in a single visualization</li>
      </ul>
      
      <h3>Tools and Libraries</h3>
      <p>Popular tools for data visualization include:</p>
      <ul>
        <li><strong>Python:</strong> Matplotlib, Seaborn, Plotly</li>
        <li><strong>JavaScript:</strong> D3.js, Chart.js</li>
        <li><strong>R:</strong> ggplot2</li>
        <li><strong>Tableau:</strong> For business intelligence</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Effective data visualization combines technical skills with design principles. Practice regularly, seek feedback, and always keep your audience in mind.</p>
    `
  },
  {
    slug: 'python-for-data-science',
    title: 'Python for Data Science',
    date: 'December 28, 2025',
    excerpt: 'Exploring Python libraries and tools essential for data science and analysis.',
    content: `
      <h2>Python: The Language of Data Science</h2>
      <p>Python has become the dominant language in data science due to its simplicity, powerful libraries, and active community.</p>
      
      <h3>Essential Libraries</h3>
      
      <h4>NumPy</h4>
      <p>The foundation for numerical computing in Python. Provides support for arrays, matrices, and mathematical functions.</p>
      
      <h4>Pandas</h4>
      <p>The go-to library for data manipulation and analysis. Works with DataFrames, making it easy to clean and transform data.</p>
      
      <h4>Matplotlib & Seaborn</h4>
      <p>Visualization libraries for creating static, animated, and interactive plots.</p>
      
      <h4>Scikit-learn</h4>
      <p>Comprehensive machine learning library with tools for classification, regression, clustering, and more.</p>
      
      <h3>Data Analysis Workflow</h3>
      <ol>
        <li>Data Collection</li>
        <li>Data Cleaning</li>
        <li>Exploratory Data Analysis (EDA)</li>
        <li>Feature Engineering</li>
        <li>Model Building</li>
        <li>Model Evaluation</li>
        <li>Deployment</li>
      </ol>
      
      <h3>Best Practices</h3>
      <p>Keep your code organized, document your analysis, use version control, and make your work reproducible.</p>
    `
  },
  {
    slug: 'understanding-neural-networks',
    title: 'Understanding Neural Networks',
    date: 'December 20, 2025',
    excerpt: 'A beginner-friendly introduction to neural networks and deep learning concepts.',
    content: `
      <h2>Neural Networks Explained</h2>
      <p>Neural networks are the backbone of modern AI. Inspired by the human brain, they consist of interconnected nodes (neurons) that process information.</p>
      
      <h3>Architecture</h3>
      
      <h4>Input Layer</h4>
      <p>Receives the raw data features.</p>
      
      <h4>Hidden Layers</h4>
      <p>Process and transform the data. Deep learning involves multiple hidden layers.</p>
      
      <h4>Output Layer</h4>
      <p>Produces the final prediction or classification.</p>
      
      <h3>How They Learn</h3>
      <p>Neural networks learn through backpropagation, adjusting weights to minimize the difference between predictions and actual values.</p>
      
      <h3>Activation Functions</h3>
      <ul>
        <li><strong>ReLU:</strong> Most common for hidden layers</li>
        <li><strong>Sigmoid:</strong> For binary classification</li>
        <li><strong>Softmax:</strong> For multi-class classification</li>
      </ul>
      
      <h3>Applications</h3>
      <p>Neural networks power image recognition, natural language processing, recommendation systems, and autonomous vehicles.</p>
    `
  },
  {
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization',
    date: 'December 15, 2025',
    excerpt: 'Techniques and strategies to make your web applications faster and more efficient.',
    content: `
      <h2>Optimizing Web Performance</h2>
      <p>In today's fast-paced digital world, performance is crucial. Users expect websites to load quickly and respond instantly.</p>
      
      <h3>Key Metrics</h3>
      <ul>
        <li><strong>First Contentful Paint (FCP):</strong> When the first content appears</li>
        <li><strong>Largest Contentful Paint (LCP):</strong> When main content loads</li>
        <li><strong>Time to Interactive (TTI):</strong> When page becomes fully interactive</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> Visual stability</li>
      </ul>
      
      <h3>Optimization Techniques</h3>
      
      <h4>1. Minimize Bundle Size</h4>
      <p>Use code splitting, tree shaking, and lazy loading to reduce JavaScript bundle size.</p>
      
      <h4>2. Optimize Images</h4>
      <p>Use modern formats (WebP), compress images, and implement responsive images.</p>
      
      <h4>3. Leverage Caching</h4>
      <p>Use browser caching, CDNs, and service workers for offline support.</p>
      
      <h4>4. Optimize CSS</h4>
      <p>Remove unused CSS, minimize files, and use CSS-in-JS efficiently.</p>
      
      <h3>Tools</h3>
      <p>Use Lighthouse, WebPageTest, and Chrome DevTools to measure and improve performance.</p>
    `
  }
];

// Helper function to get a single post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};
