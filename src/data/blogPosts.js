// Blog posts data - HTML content is sanitized before rendering
export const blogPosts = [
  {
    slug: 'python-programming-from-scratch-to-advanced',
    title: 'Python Programming: From Scratch to Advanced',
    date: 'February 9, 2026',
    excerpt: 'A comprehensive Python tutorial covering basics to advanced concepts with examples.',
    content: `
      <h2>Introduction to Python Programming</h2>
      <p>Python is an easy-to-learn, powerful programming language that is widely used in many fields like web development, data science, artificial intelligence, automation, etc. It is known for its simple syntax, readability, and versatility.</p>
      <p><strong>Why Python?</strong></p>
      <ul>
        <li><strong>Easy to learn:</strong> Python’s syntax is simple and easy to read, making it an ideal choice for beginners.</li>
        <li><strong>Versatile:</strong> You can use Python for web development, data analysis, automation, machine learning, and much more.</li>
        <li><strong>Huge Libraries:</strong> Python has a vast collection of libraries that make development faster and easier.</li>
      </ul>

      <h3>Python Installation</h3>
      <p>To install Python on your computer:</p>
      <ol>
        <li>Go to <a href="https://www.python.org/downloads/">python.org/downloads</a></li>
        <li>Download the latest version.</li>
        <li>Follow the installation instructions.</li>
      </ol>

      <h3>Example Code: "Hello, World!"</h3>
      <pre><code>print("Hello, World!")</code></pre>

      <h2>Variables and Data Types in Python</h2>
      <p>A variable is a name given to a memory location in Python that stores a value.</p>

      <h3>Data Types in Python</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>int</td>
            <td>Integer numbers (whole numbers)</td>
            <td>x = 5</td>
          </tr>
          <tr>
            <td>float</td>
            <td>Floating-point numbers (decimals)</td>
            <td>x = 5.7</td>
          </tr>
          <tr>
            <td>str</td>
            <td>String (text)</td>
            <td>x = "Hello"</td>
          </tr>
          <tr>
            <td>bool</td>
            <td>Boolean (True or False)</td>
            <td>x = True</td>
          </tr>
          <tr>
            <td>list</td>
            <td>Ordered collection of items (mutable)</td>
            <td>x = [1, 2, 3]</td>
          </tr>
          <tr>
            <td>tuple</td>
            <td>Immutable collection of items</td>
            <td>x = (1, 2, 3)</td>
          </tr>
          <tr>
            <td>dict</td>
            <td>Collection of key-value pairs</td>
            <td>x = {"name": "John", "age": 30}</td>
          </tr>
          <tr>
            <td>set</td>
            <td>Collection of unique items</td>
            <td>x = {1, 2, 3}</td>
          </tr>
        </tbody>
      </table>

      <h3>Example Code: Working with Variables and Data Types</h3>
      <pre><code>
# Assigning different data types to variables
num = 10  # int
pi = 3.14  # float
name = "John"  # string
is_active = True  # boolean

# Using a list
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Output: apple

# Using a tuple
coordinates = (10, 20)
print(coordinates[1])  # Output: 20

# Using a dictionary
person = {"name": "John", "age": 30}
print(person["name"])  # Output: John

# Using a set
unique_numbers = {1, 2, 3, 3}
print(unique_numbers)  # Output: {1, 2, 3} (no duplicates)
</code></pre>

      <h2>Control Flow Statements in Python</h2>
      <p>Control flow statements help manage the flow of execution in a program. There are mainly conditional statements and looping statements.</p>

      <h3>1. Conditional Statements: if, elif, else</h3>
      <pre><code>
age = 18
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
</code></pre>

      <h3>2. Looping Statements: for, while</h3>
      <p><strong>For Loop Syntax:</strong></p>
      <pre><code>
for item in iterable:
    # execute this block
</code></pre>
      <p>Example:</p>
      <pre><code>
# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
</code></pre>

      <p><strong>While Loop Syntax:</strong></p>
      <pre><code>
while condition:
    # execute this block
</code></pre>
      <p>Example:</p>
      <pre><code>
i = 1
while i <= 5:
    print(i)
    i += 1
</code></pre>

      <h3>3. Break and Continue</h3>
      <pre><code>
for i in range(10):
    if i == 5:
        break  # Stop the loop when i equals 5
    print(i)
</code></pre>

      <h2>Functions in Python</h2>
      <p>A function is a block of reusable code designed to perform a single task.</p>

      <h3>Defining a Function</h3>
      <pre><code>
def function_name(parameters):
    # function body
    return result
</code></pre>
      <p>Example:</p>
      <pre><code>
# Function to add two numbers
def add(x, y):
    return x + y

result = add(3, 5)
print(result)  # Output: 8
</code></pre>

      <h3>Default Arguments</h3>
      <pre><code>
def greet(name="John"):
    print(f"Hello, {name}!")

greet()  # Output: Hello, John!
greet("Alice")  # Output: Hello, Alice!
</code></pre>

      <h3>Variable-Length Arguments</h3>
      <pre><code>
def add_numbers(*args):
    return sum(args)

print(add_numbers(1, 2, 3, 4))  # Output: 10
</code></pre>

      <h2>Object-Oriented Programming (OOP)</h2>
      <p>OOP allows you to structure your programs in terms of objects, which bundle data (attributes) and functions (methods) that operate on the data.</p>

      <h3>1. Defining a Class</h3>
      <pre><code>
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")
</code></pre>

      <h3>2. Creating an Object</h3>
      <pre><code>
person1 = Person("Alice", 25)
person1.greet()  # Output: Hello, my name is Alice and I am 25 years old.
</code></pre>

      <h3>3. Inheritance</h3>
      <pre><code>
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def study(self):
        print(f"{self.name} is studying.")

student1 = Student("Bob", 21, "S12345")
student1.greet()  # Inherited method
student1.study()  # Method from Student class
</code></pre>

      <h2>Advanced Python Concepts</h2>
      <p>Let’s explore some advanced Python topics.</p>

      <h3>1. List Comprehensions</h3>
      <pre><code>
squares = [x**2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
</code></pre>

      <h3>2. Decorators</h3>
      <pre><code>
def decorator_func(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@decorator_func
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function call
# Hello!
# After function call
</code></pre>

      <h3>3. Generators</h3>
      <pre><code>
def generate_numbers():
    for i in range(5):
        yield i

gen = generate_numbers()
for number in gen:
    print(number)
# Output: 0 1 2 3 4
</code></pre>

      <h2>Conclusion</h2>
      <p>This tutorial has covered the essentials of Python programming, starting from the basics to more advanced concepts. By practicing the examples and working on projects, you will become proficient in Python.</p>
    `
  }
];
,{
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
