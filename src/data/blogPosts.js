// Blog posts data - HTML content is sanitized before rendering
export const blogPosts = [
  {
 content: `
  <h2>Introduction to Python Programming</h2>
  <p>
    Python is a high-level, interpreted programming language known for its clean syntax,
    readability, and ease of learning. It is designed to help beginners focus on problem
    solving rather than complex syntax, while still being powerful enough for professional
    software development.
  </p>
  <p>
    Python is widely used in web development, data science, artificial intelligence,
    machine learning, automation, scientific computing, and backend systems.
  </p>

  <h2>Why Python Is Ideal for Beginners</h2>
  <ul>
    <li><strong>Simple Syntax:</strong> Python code is easy to read and understand.</li>
    <li><strong>No Compilation:</strong> Python runs directly, speeding up learning.</li>
    <li><strong>Large Ecosystem:</strong> Thousands of libraries for every domain.</li>
    <li><strong>Industry Adoption:</strong> Used by Google, Netflix, Instagram, NASA.</li>
  </ul>

  <h2>Installing Python</h2>
  <p>
    Python can be installed from the official website. After installation,
    verify it using the command line.
  </p>
  <pre><code>
python --version
  </code></pre>

  <h2>Your First Python Program</h2>
  <pre><code>
print("Hello, World!")
  </code></pre>
  <p>
    The <code>print()</code> function outputs text to the screen.
    This is usually the first program written when learning any language.
  </p>

  <h2>Variables and Data Types</h2>
  <p>
    Variables store data in memory. Python automatically detects the data type
    based on the value assigned.
  </p>
  <pre><code>
age = 20          # Integer
height = 5.8      # Float
name = "Alex"     # String
is_student = True # Boolean
  </code></pre>

  <h3>Built-in Data Types</h3>
  <pre><code>
numbers = [1, 2, 3, 4]          # List
coordinates = (10, 20)         # Tuple
person = {"name": "John"}      # Dictionary
unique_ids = {1, 2, 3, 3}       # Set
  </code></pre>

  <h2>Operators in Python</h2>
  <pre><code>
a = 10
b = 3

print(a + b)   # Addition
print(a - b)   # Subtraction
print(a * b)   # Multiplication
print(a / b)   # Division
print(a % b)   # Modulus
  </code></pre>

  <h2>Control Flow Statements</h2>

  <h3>Conditional Statements</h3>
  <pre><code>
marks = 75

if marks >= 90:
    print("Excellent")
elif marks >= 60:
    print("Good")
else:
    print("Needs Improvement")
  </code></pre>

  <h3>Loops</h3>
  <pre><code>
for i in range(1, 6):
    print(i)
  </code></pre>

  <pre><code>
count = 1
while count <= 5:
    print(count)
    count += 1
  </code></pre>

  <h3>Break and Continue</h3>
  <pre><code>
for i in range(10):
    if i == 5:
        break
    print(i)
  </code></pre>

  <h2>Functions</h2>
  <p>
    Functions allow code reuse and make programs modular and readable.
  </p>
  <pre><code>
def greet(name):
    return "Hello " + name

print(greet("Alice"))
  </code></pre>

  <h3>Default and Variable Arguments</h3>
  <pre><code>
def power(base, exponent=2):
    return base ** exponent

print(power(5))
print(power(5, 3))
  </code></pre>

  <pre><code>
def add_numbers(*args):
    return sum(args)

print(add_numbers(1, 2, 3, 4))
  </code></pre>

  <h2>Object-Oriented Programming (OOP)</h2>
  <p>
    OOP helps structure programs using classes and objects, which is essential
    for large-scale applications.
  </p>
  <pre><code>
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print("My name is", self.name, "and I am", self.age, "years old")

p1 = Person("Alice", 25)
p1.introduce()
  </code></pre>

  <h3>Inheritance</h3>
  <pre><code>
class Student(Person):
    def __init__(self, name, age, roll_no):
        super().__init__(name, age)
        self.roll_no = roll_no

    def study(self):
        print(self.name, "is studying")

s1 = Student("Bob", 21, 101)
s1.introduce()
s1.study()
  </code></pre>

  <h2>Advanced Python Concepts</h2>

  <h3>List Comprehensions</h3>
  <pre><code>
squares = [x*x for x in range(1, 6)]
print(squares)
  </code></pre>

  <h3>Generators</h3>
  <pre><code>
def generate_numbers():
    for i in range(3):
        yield i

for num in generate_numbers():
    print(num)
  </code></pre>

  <h3>Decorators</h3>
  <pre><code>
def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello")

say_hello()
  </code></pre>

  <h2>Conclusion</h2>
  <p>
    Python is a powerful yet beginner-friendly programming language that enables
    learners to progress from simple scripts to complex, real-world applications.
    By mastering fundamentals such as variables, control flow, functions, and
    object-oriented programming, you build a strong foundation.
  </p>
  <p>
    With continuous practice and project-based learning, Python can lead you into
    advanced fields such as data science, machine learning, web development, and
    automation. Consistency and hands-on coding are the keys to success.
  </p>
`

  },
  {
    slug: 'machine-learning-basics',
    title: 'Machine Learning Basics',
    date: 'January 10, 2026',
    excerpt: 'Understanding the fundamentals of machine learning.',
    content: `
      <h2>Understanding Machine Learning</h2>
      <p>
        Machine learning enables systems to learn from data without being explicitly programmed.
      </p>
    `
  },
  {
    slug: 'data-visualization-tips',
    title: 'Data Visualization Tips',
    date: 'January 5, 2026',
    excerpt: 'Best practices for effective data visualization.',
    content: `
      <h2>The Art of Data Visualization</h2>
      <p>
        Data visualization helps communicate insights clearly and effectively.
      </p>
    `
  },
  {
    slug: 'python-for-data-science',
    title: 'Python for Data Science',
    date: 'December 28, 2025',
    excerpt: 'Essential Python libraries for data science.',
    content: `
      <h2>Python for Data Science</h2>
      <p>
        Python dominates data science because of NumPy, Pandas, and Scikit-learn.
      </p>
    `
  },
  {
    slug: 'understanding-neural-networks',
    title: 'Understanding Neural Networks',
    date: 'December 20, 2025',
    excerpt: 'Introduction to neural networks.',
    content: `
      <h2>Neural Networks Explained</h2>
      <p>
        Neural networks are inspired by the human brain and power modern AI systems.
      </p>
    `
  },
  {
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization',
    date: 'December 15, 2025',
    excerpt: 'Techniques to improve web application performance.',
    content: `
      <h2>Optimizing Web Performance</h2>
      <p>
        Performance directly impacts user experience and engagement.
      </p>
    `
  }
];

// Helper function to get a single post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};
