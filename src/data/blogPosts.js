// Blog posts data - HTML content is sanitized before rendering
export const blogPosts = [
  {
    slug: 'python-foundations-part-1',
    category: 'python',
    title: '🐍 Python Programming — Complete Beginner to Practical Guide',
    date: 'February 10, 2026',
    excerpt: 'The definitive article-style guide for absolute beginners. Explore the why, what, and how of Python through a comprehensive 26-section journey.',
    content: `
      <h2 id="1-introduction-to-programming">1. Introduction to Programming 🧠</h2>
      <p>At its heart, <strong>Programming</strong> is nothing more than communication. Humans use languages like English or Spanish to share ideas; we use programming languages to give specific, logical instructions to a computer. 🟢</p>
      <h3>Why do we need it?</h3>
      <p>Computers are incredibly fast but they are not "smart" in the human sense. They cannot guess what you want. If you want a computer to calculate your taxes or generate a 3D world, you must provide a precise list of steps.</p>
      <p><strong>The Analogy:</strong> Imagine teaching a robot to make a peanut butter sandwich. You cannot just say "make it." You must say:</p>
      <ol>
        <li>"Pick up the bread."</li>
        <li>"Open the jar."</li>
        <li>"Spread the peanut butter."</li>
      </ol>
      <p>Programming is the act of writing that "recipe" for a machine.</p>

      <h2 id="2-what-is-python">2. What is Python 🐍</h2>
      <p><strong>Python</strong> is a high-level, interpreted programming language created by Guido van Rossum in 1991. 🟢</p>
      <ul>
        <li><strong>High-Level:</strong> This means the language is far away from computer "machine code" (0s and 1s) and very close to human English.</li>
        <li><strong>Interpreted:</strong> This means the code is executed line-by-line, which makes it easier to test and find <a href="#16-error-handling">errors</a>.</li>
      </ul>
      <p>Python's philosophy focuses on <strong>readability</strong>. It uses simple keywords and clear structures so that even someone who doesn't code can often understand what a Python script is trying to do.</p>

      <h2 id="3-why-learn-python-use-cases-table">3. Why Learn Python (Use Cases Table)</h2>
      <p>Python is currently the most popular programming language in the world because it is a "Swiss Army Knife." It is used by NASA, Google, Netflix, and millions of small businesses. 🟢</p>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>How Python is Used</th>
            <th>Notable Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Data Science</strong></td>
            <td>Cleaning and analyzing massive amounts of data.</td>
            <td>Pandas, NumPy</td>
          </tr>
          <tr>
            <td><strong>Artificial Intelligence</strong></td>
            <td>Building "brains" like ChatGPT or Image Recognizers.</td>
            <td>TensorFlow, PyTorch</td>
          </tr>
          <tr>
            <td><strong>Web Development</strong></td>
            <td>Creating the backend (server) of professional websites.</td>
            <td>Django, Flask</td>
          </tr>
          <tr>
            <td><strong>Automation</strong></td>
            <td>Writing scripts to handle repetitive office tasks.</td>
            <td>Selenium, Openpyxl</td>
          </tr>
        </tbody>
      </table>

      <h2 id="4-installing-python-windows">4. Installing Python (Windows)</h2>
      <p>To start writing code, your computer needs the "Python Interpreter"—the software that reads your text files and performs the actions. 🟢</p>
      <ol>
        <li>Visit the official <strong>python.org</strong> website.</li>
        <li>Download the latest stable version (e.g., Python 3.12+).</li>
        <li><strong>⚠️ CRITICAL STEP:</strong> Run the installer. On the first screen, you <strong>must</strong> check the box that says <strong>"Add Python to PATH"</strong>. If you skip this, your computer's terminal won't be able to run Python commands.</li>
        <li>Click "Install Now."</li>
      </ol>
      <p>Once finished, restart your computer to ensure all settings take effect.</p>

      <h2 id="5-running-your-first-python-program">5. Running Your First Python Program</h2>
      <p>In programming, the tradition is to start with a "Hello World" program. This simply proves that your setup is working. 🟢</p>
      <h3>Using the Terminal</h3>
      <p>Open <strong>PowerShell</strong> or <strong>Command Prompt</strong> on your Windows machine and type:</p>
      <pre><code>python --version</code></pre>
      <p>If it returns a version number, success! Now, let's write code.</p>
      <h3>The "Hello World" Script</h3>
      <p>Create a new file on your desktop named <code>hello.py</code>. Open it and type:</p>
      <pre><code>print("Hello, World!")</code></pre>
      <h3>Explaining the Code</h3>
      <ul>
        <li><code>print()</code>: This is a built-in <a href="#12-functions">Function</a> that tells the computer to display whatever is inside the parentheses on the screen.</li>
        <li><code>"Hello, World!"</code>: This is a <a href="#7-variables-and-data-types">String</a> (text). We use quotes to tell Python "this is literally what I want you to read."</li>
      </ul>

      <h2 id="6-python-syntax-basics">6. Python Syntax Basics</h2>
      <p><strong>Syntax</strong> refers to the rules of a language. If you break the syntax, the computer won't understand you, resulting in a "Syntax Error." 🟢</p>
      <h3>1. Indentation (The "Holy Grail" of Python)</h3>
      <p>Unlike other languages, Python uses spaces (4 spaces or 1 Tab) to group code blocks.</p>
      <pre><code>if True:
    print("This is correct.")
print("This is also correct but outside the block.")</code></pre>
      <h3>2. Comments</h3>
      <p>Sometimes you want to leave notes for yourself or other humans. Python ignores anything after a <code>#</code> symbol.</p>
      <pre><code># This is a comment. Python won't run this.
print("Hello") # This prints Hello</code></pre>

      <h2 id="7-variables-and-data-types-table">7. Variables and Data Types (Table)</h2>
      <p>In programming, you often need to remember information. We use <strong>Variables</strong>—think of them as labeled boxes where you store items. 🟢</p>
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Integer (int)</strong></td>
            <td>Whole numbers (no decimals).</td>
            <td><code>age = 25</code></td>
          </tr>
          <tr>
            <td><strong>Float (float)</strong></td>
            <td>Numbers with decimals.</td>
            <td><code>price = 19.99</code></td>
          </tr>
          <tr>
            <td><strong>String (str)</strong></td>
            <td>Text data wrapped in quotes.</td>
            <td><code>name = "Savari"</code></td>
          </tr>
          <tr>
            <td><strong>Boolean (bool)</strong></td>
            <td>Logical True or False.</td>
            <td><code>is_logged_in = True</code></td>
          </tr>
        </tbody>
      </table>

      <h2 id="8-input-and-output">8. Input and Output</h2>
      <p>Programs are only useful if they can interact with users. 🟢</p>
      <h3>Output (print)</h3>
      <p>We've already seen <code>print</code>. A professional way to include variables in text is using <strong>f-strings</strong>:</p>
      <pre><code>name = "Savari"
print(f"Welcome to the blog, {name}!")</code></pre>
      <h3>Input (input)</h3>
      <p>This command pauses the program and waits for the user to type something.</p>
      <pre><code>user_input = input("What is your favorite color? ")
print(f"Oh, I like {user_input} too!")</code></pre>
      <p><strong>Why it exists:</strong> It transforms a static script into an interactive experience.</p>

      <h2 id="9-operators-arithmetic-comparison-logical">9. Operators (Arithmetic, Comparison, Logical)</h2>
      <p>Operators are symbols used to perform math or logic. 🟢</p>
      <h3>1. Arithmetic Operators (Math)</h3>
      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Name</th>
            <th>Example</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>+</code></td>
            <td>Addition</td>
            <td><code>10 + 5</code></td>
            <td><code>15</code></td>
          </tr>
          <tr>
            <td><code>-</code></td>
            <td>Subtraction</td>
            <td><code>20 - 10</code></td>
            <td><code>10</code></td>
          </tr>
          <tr>
            <td><code>*</code></td>
            <td>Multiplication</td>
            <td><code>4 * 3</code></td>
            <td><code>12</code></td>
          </tr>
          <tr>
            <td><code>/</code></td>
            <td>Division</td>
            <td><code>10 / 2</code></td>
            <td><code>5.0</code></td>
          </tr>
        </tbody>
      </table>

      <h2 id="10-conditional-statements-if-elif-else">10. Conditional Statements (if / elif / else)</h2>
      <p>This is how we give a program "intelligence." We use <code>if</code>, <code>elif</code> (else if), and <code>else</code>. 🟢</p>
      <pre><code>score = 85
if score >= 90:
    print("Excellent! Grade: A")
elif score >= 80:
    print("Good job! Grade: B")
else:
    print("Keep studying!")</code></pre>
      <p><strong>Why it exists:</strong> Without conditions, every program would run the exact same way every time. Conditions allow for branching logic.</p>

      <h2 id="11-loops-for-while">11. Loops (for / while)</h2>
      <p><strong>Loops</strong> allow you to repeat a block of code multiple times without writing it over and over. 🟢</p>
      <h3>The for loop</h3>
      <p>Used when you know how many times to repeat.</p>
      <pre><code>for i in range(5):
    print(f"This is iteration number {i}")</code></pre>
      <h3>The while loop</h3>
      <p>Used when you want to repeat until a certain condition becomes false.</p>
      <pre><code>count = 3
while count > 0:
    print(count)
    count = count - 1
print("Blast off!")</code></pre>

      <h2 id="12-functions-why-they-exist-how-to-use">12. Functions (Why they exist + how to use)</h2>
      <p>A <strong>Function</strong> is a reusable packet of code. Instead of writing 20 lines of logic repeatedly, you wrap it in a function and "call" its name. 🟢</p>
      <pre><code>def make_coffee(flavor):
    print(f"Heating water...")
    print(f"Adding {flavor} beans...")
    return f"One {flavor} coffee is ready! ☕"

# Now we just call it
result = make_coffee("Vanilla")
print(result)</code></pre>
      <p><strong>Why it exists:</strong> It makes code clean, reduces <a href="#16-error-handling">errors</a>, and saves time.</p>

      <h2 id="13-lists-tuples-sets-dictionaries-comparison-table">13. Lists, Tuples, Sets, Dictionaries (Comparison Table)</h2>
      <p>Data structures are special variables that can hold many items at once. 🟢</p>
      <table>
        <thead>
          <tr>
            <th>Structure</th>
            <th>Syntax</th>
            <th>Key Unique Feature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>List</strong></td>
            <td><code>[1, 2, 3]</code></td>
            <td>Ordered and changeable.</td>
          </tr>
          <tr>
            <td><strong>Tuple</strong></td>
            <td><code>(1, 2, 3)</code></td>
            <td>Ordered but <strong>cannot</strong> be changed.</td>
          </tr>
          <tr>
            <td><strong>Set</strong></td>
            <td><code>{1, 2, 3}</code></td>
            <td>Unordered and only unique items (no duplicates).</td>
          </tr>
          <tr>
            <td><strong>Dictionary</strong></td>
            <td><code>{"key": "value"}</code></td>
            <td>Stores data in pairs (like a real dictionary).</td>
          </tr>
        </tbody>
      </table>

      <h2 id="14-strings-common-operations">14. Strings (Common Operations)</h2>
      <p>Since text is everywhere, Python has powerful tools just for <a href="#7-variables-and-data-types">Strings</a>. 🟢</p>
      <pre><code>text = "python programming"
print(text.upper())      # PYTHON PROGRAMMING
print(text.capitalize()) # Python programming
print(len(text))         # 18</code></pre>

      <h2 id="15-file-handling-read-write">15. File Handling (Read / Write)</h2>
      <p>Python can talk to your hard drive to read or write files. 🟢</p>
      <pre><code># Writing to a file
with open("note.txt", "w") as file:
    file.write("I am a Python developer now!")

# Reading from a file
with open("note.txt", "r") as file:
    content = file.read()
    print(content)</code></pre>

      <h2 id="16-error-handling-try-except">16. Error Handling (try / except)</h2>
      <p>Even the best programmers make mistakes. <strong>Error Handling</strong> prevents your entire app from crashing when a problem occurs. 🟢</p>
      <pre><code>try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(result)
except ZeroDivisionError:
    print("Error: You cannot divide by zero!")
except ValueError:
    print("Error: That wasn't a valid number!")</code></pre>

      <h2 id="17-modules-and-packages">17. Modules and Packages</h2>
      <p>You don't have to build everything from scratch. Python comes with "Modules"—pre-written code scripts. 🟢</p>
      <pre><code>import math
import random
print(math.sqrt(16))      # 4.0
print(random.randint(1, 10))</code></pre>

      <h2 id="18-virtual-environments-beginner-explanation">18. Virtual Environments (Beginner Explanation)</h2>
      <p>A <strong>Virtual Environment</strong> is a "bubble" or a private folder where you store only the tools needed for one specific project. This keeps your main computer system clean. 🟢</p>
      <pre><code>python -m venv my_project_env</code></pre>

      <h2 id="19-writing-clean-python-code-best-practices">19. Writing Clean Python Code (Best Practices)</h2>
      <ul>
        <li><strong>Use Meaningful Names:</strong> <code>user_age</code> is better than <code>a</code>. 🟢</li>
        <li><strong>Space Things Out:</strong> Put spaces around <a href="#9-operators">Operators</a> (<code>x = 5</code>).</li>
        <li><strong>Snake Case:</strong> Use underscores for variable names.</li>
      </ul>

      <h2 id="20-common-beginner-mistakes-with-fixes">20. Common Beginner Mistakes ⚠️ (With Fixes)</h2>
      <table>
        <thead>
          <tr>
            <th>Mistake</th>
            <th>Why it happens</th>
            <th>The Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>IndentationError</strong></td>
            <td>Mixing tabs and spaces.</td>
            <td>Stick to 4 spaces per indent.</td>
          </tr>
          <tr>
            <td><strong>SyntaxError</strong></td>
            <td>Forgetting a colon or bracket.</td>
            <td>Double check line endings.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="21-small-practice-examples">21. Small Practice Examples</h2>
      <pre><code># Simple Bill Calculator
total = float(input("Bill: "))
pax = int(input("People: "))
print(f"Each pays: {total / pax}")</code></pre>

      <h2 id="22-how-to-practice-python-effectively">22. How to Practice Python Effectively</h2>
      <ul>
        <li><strong>The 20-Minute Rule:</strong> Daily practice is 100x better than weekly marathons. 🟢</li>
        <li><strong>Build Projects:</strong> Don't just watch; try to build a small to-do list.</li>
        <li><strong>Explain it:</strong> Teach someone else what you just learned.</li>
      </ul>

      <h2 id="23-python-learning-roadmap-beginner-intermediate-advanced-table">23. Python Learning Roadmap 📌 (Beginner → Intermediate → Advanced Table)</h2>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Focus Areas</th>
            <th>Estimated Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Beginner</strong></td>
            <td>Syntax, Variables, Loops, Functions.</td>
            <td>4-8 weeks</td>
          </tr>
          <tr>
            <td><strong>Intermediate</strong></td>
            <td>APIs, OOP, Data Cleaning.</td>
            <td>3-6 months</td>
          </tr>
          <tr>
            <td><strong>Advanced</strong></td>
            <td>Machine Learning, Architectures.</td>
            <td>1+ years</td>
          </tr>
        </tbody>
      </table>

      <h2 id="24-tools-for-python-developers">24. Tools for Python Developers</h2>
      <ul>
        <li><strong>VS Code:</strong> The most popular text editor for beginners. 🟢</li>
        <li><strong>Git:</strong> A tool to save versions and collaborate.</li>
        <li><strong>Pip:</strong> To install new Python libraries.</li>
      </ul>

      <h2 id="25-daily-python-practice-workflow">25. Daily Python Practice Workflow</h2>
      <p><code>Identify</code> → <code>Logic</code> → <code>Write</code> → <code>Debug</code> → <code>Refactor</code> 🟢</p>

      <h2 id="26-conclusion">26. Conclusion 🎯</h2>
      <p>You have just completed the ultimate foundation for Python programming. Practice these 26 sections, stay curious, and go build something! 🟢</p>
    `
  },
  {
    slug: 'github-guide-for-beginners',
    category: 'github',
    title: '🧰 Git & GitHub — Complete Beginner to Practical Guide',
    date: 'February 10, 2026',
    excerpt: 'The ultimate long-form guide to version control for absolute beginners. Master Git and GitHub through 26 detailed sections with real-world logic.',
    content: `
      <h2 id="1-introduction-to-version-control">1. Introduction to Version Control 🧠</h2>
      <p>Imagine you are writing a complex research paper. You save it as <code>paper_v1.docx</code>, then <code>paper_final.docx</code>, and finally <code>paper_real_final_V2.docx</code>. This is a mess. 🔵</p>
      <p><strong>Version Control</strong> is a system that manages this chaos automatically. It records every tiny change you make to a file so that you can go back to any previous version at any time. It solves the critical problem of "accidentally deleting work" or "breaking something that used to work."</p>
      <p><strong>In real life:</strong> It's like having a time machine for your project folders.</p>

      <h2 id="2-what-is-git">2. What is Git 🔧</h2>
      <p><strong>Git</strong> is the most widely used version control software in the world. Created by Linus Torvalds (the creator of Linux), it was designed to be fast, secure, and distributed. 🔵</p>
      <ul>
        <li><strong>Local:</strong> It runs directly on your computer.</li>
        <li><strong>Distributed:</strong> Every developer has a full copy of the project history, not just a central server.</li>
      </ul>
      <p>Git exists because early version control tools were slow and required a constant internet connection. Git works offline and is incredibly powerful.</p>

      <h2 id="3-what-is-github">3. What is GitHub 🐙</h2>
      <p>A common mistake is thinking Git and GitHub are the same. They are not. 🔵</p>
      <ul>
        <li><strong>Git:</strong> The tool (the engine) you install on your computer to track changes.</li>
        <li><strong>GitHub:</strong> A website (the garage) that stores your Git projects online so you can share them with others.</li>
      </ul>
      <p>Think of Git like your "saved games" on a console, and GitHub like the cloud service that lets you access those saves from any console in the world.</p>

      <h2 id="4-core-git-github-terminology-table">4. Core Git & GitHub Terminology (Table)</h2>
      <p>Before we touch the command line, let's define the "language" of version control. 🔵</p>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Plain English Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Repository (Repo)</strong></td>
            <td>Your project folder containing its full history.</td>
          </tr>
          <tr>
            <td><strong>Commit</strong></td>
            <td>A permanent snapshot or "save point" of your files.</td>
          </tr>
          <tr>
            <td><strong>Branch</strong></td>
            <td>A parallel timeline of your project (ideal for testing).</td>
          </tr>
          <tr>
            <td><strong>Remote</strong></td>
            <td>A version of your project stored on a server (GitHub).</td>
          </tr>
          <tr>
            <td><strong>Push</strong></td>
            <td>Uploading your local saves to the remote server.</td>
          </tr>
          <tr>
            <td><strong>Pull</strong></td>
            <td>Downloading updates from the remote server.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="5-installing-git-windows">5. Installing Git (Windows)</h2>
      <p>To use Git, you must first install the engine on your computer. 🔵</p>
      <ol>
        <li>Go to <strong>git-scm.com</strong> and download the Windows installer.</li>
        <li>Run the installer—default settings are fine for 99% of users.</li>
        <li>Open <strong>PowerShell</strong> and type <code>git --version</code> to verify it's active.</li>
      </ol>

      <h2 id="6-initial-git-configuration">6. Initial Git Configuration</h2>
      <p>Git needs to know who you are so it can label your saves (commits). 🔵</p>
      <pre><code>git config --global user.name "Your Name"
git config --global user.email "you@example.com"</code></pre>
      <ul>
        <li><code>git config</code>: Tells Git we want to change settings.</li>
        <li><code>--global</code>: Applies this to every project on your machine.</li>
        <li><code>user.name</code>: Your public identity.</li>
      </ul>
      <p><strong>Note:</strong> This is mandatory. Without it, Git will refuse to save your work later.</p>

      <h2 id="7-creating-your-first-git-repository">7. Creating Your First Git Repository</h2>
      <p>To start tracking a project, you must turn a folder into a <strong>Repository</strong>. 🔵</p>
      <pre><code>git init</code></pre>
      <p>This command creates a hidden folder named <code>.git</code>. This folder is the "brain" of your project—it stores every version of every file. Never delete it!</p>

      <h2 id="8-git-file-lifecycle">8. Git File Lifecycle</h2>
      <p>Git doesn't just watch everything; you have to tell it what to track. Files move through four stages: 🔵</p>
      <ol>
        <li><strong>Untracked:</strong> Git hasn't noticed this file yet.</li>
        <li><strong>Modified:</strong> You changed the file, but haven't told Git to prepare it.</li>
        <li><strong>Staged:</strong> You've marked the file as "ready to be saved."</li>
        <li><strong>Committed:</strong> The file and its changes are permanently in the project's history.</li>
      </ol>

      <h2 id="9-staging-files">9. Staging Files 📌</h2>
      <p>Before you commit, you must "Stage" your files using <strong>git add</strong>. 🔵</p>
      <pre><code>git add filename.txt
# To stage everything:
git add . </code></pre>
      <p><strong>Why staging exists:</strong> Imagine you are building a puzzle. Staging is like putting the correct pieces on the board before you glue them down forever (the commit). It allows you to choose exactly which changes go into a save point.</p>

      <h2 id="10-committing-changes">10. Committing Changes</h2>
      <p>A <strong>Commit</strong> is a permanent snapshot. Once committed, you can always return to this exact moment in time. 🔵</p>
      <pre><code>git commit -m "Fix login button alignment"</code></pre>
      <p>The <code>-m</code> stands for "message." A good message explains <em>why</em> you made the change. It's for your future self!</p>

      <h2 id="11-connecting-to-github">11. Connecting to GitHub</h2>
      <p>To share your code, you need to connect your local repo to a <strong>Remote</strong> server like GitHub. 🔵</p>
      <pre><code>git remote add origin https://github.com/user/repo.git</code></pre>
      <p><strong>Origin:</strong> This is just a nickname for your primary GitHub server. You could name it "home" if you wanted, but "origin" is the industry standard.</p>

      <h2 id="12-pushing-code-to-github">12. Pushing Code to GitHub</h2>
      <p>Now that you are connected, use <strong>git push</strong> to upload your work. 🔵</p>
      <pre><code>git push -u origin main</code></pre>
      <p>The <code>-u</code> flag links your local "main" branch to the one on GitHub. After the first time, you can just type <code>git push</code>.</p>

      <h2 id="13-cloning-repositories">13. Cloning Repositories</h2>
      <p>To download someone else's project (or your own on a new computer), use <strong>git clone</strong>. 🔵</p>
      <pre><code>git clone https://github.com/user/repo.git</code></pre>
      <p><strong>Difference from Download ZIP:</strong> A ZIP just gives you the current files. A <code>clone</code> gives you the files AND the entire history of every change ever made.</p>

      <h2 id="14-pulling-updates">14. Pulling Updates</h2>
      <p>If someone else (or you from another laptop) uploads changes to GitHub, you need to sync your local files using <strong>git pull</strong>. 🔵</p>
      <pre><code>git pull origin main</code></pre>
      <p>This "fetches" the data from the server and "merges" it into your files automatically.</p>

      <h2 id="15-branching">15. Branching 🌿</h2>
      <p><strong>Branches</strong> are parallel versions of your project. 🔵</p>
      <pre><code>git branch feature-login  # Create
git checkout feature-login # Switch
# OR do both at once:
git checkout -b feature-payment</code></pre>
      <p><strong>Why:</strong> You can break things in a branch without hurting the main "production" code. It's the ultimate safety net for experimentation.</p>

      <h2 id="16-merging-branches">16. Merging Branches</h2>
      <p>Once your experiment in a branch is finished and working, you "Merge" it back into the main timeline. 🔵</p>
      <pre><code>git checkout main
git merge feature-login</code></pre>
      <p><strong>Fact:</strong> A "Fast-forward" merge happens if the main branch hasn't changed since you started your feature—Git just slides your changes in easily.</p>

      <h2 id="17-forking-open-source-workflow">17. Forking & Open-Source Workflow</h2>
      <p><strong>Forking</strong> is a GitHub feature. It creates a complete copy of someone else's project into your own account. 🔵</p>
      <p><strong>The Flow:</strong> Fork (GitHub) → Clone (Local) → Branch → Commit → Push → PR (to the original owner).</p>

      <h2 id="18-pull-requests-prs">18. Pull Requests (PRs)</h2>
      <p>A <strong>Pull Request</strong> is a polite way of saying: "Hey, I improved your code. Please pull my changes into your project!" 🔵</p>
      <p>It's a dashboard where developers review code, leave comments, and suggest fixes before the code becomes permanent.</p>

      <h2 id="19-undoing-mistakes">19. Undoing Mistakes ⚠️</h2>
      <p>Don't panic! Git makes it hard to lose work permanently. 🔵</p>
      <pre><code># Undo changes to a single file:
git checkout -- filename.txt

# Undo recent commits (keep the work):
git reset --soft HEAD~1</code></pre>
      <p><strong>Revert vs Reset:</strong> Reset is like erasing history. Revert creates a "new" commit that undoes an old one—safely.</p>

      <h2 id="20-viewing-history">20. Viewing History</h2>
      <p>To see your project's history (who did what and when), use <strong>git log</strong>. 🔵</p>
      <pre><code>git log --oneline --graph</code></pre>
      <p>Using <code>--oneline</code> makes the list much easier to scan, showing just the commit ID and your message.</p>

      <h2 id="21-gitignore">21. .gitignore</h2>
      <p>Some files (like passwords, huge media files, or temporary system files) should never be tracked. We list these in a text file named <code>.gitignore</code>. 🔵</p>
      <pre><code># Example .gitignore content
.env
node_modules/
*.log</code></pre>

      <h2 id="22-authentication-https-vs-ssh">22. Authentication: HTTPS vs SSH</h2>
      <p>How does GitHub know it's really you? 🔵</p>
      <ul>
        <li><strong>HTTPS:</strong> Asks for your username and a "Personal Access Token." Best for beginners.</li>
        <li><strong>SSH:</strong> Uses a "key" stored on your computer. More secure and convenient for pros.</li>
      </ul>

      <h2 id="23-common-git-errors-fixes">23. Common Git Errors & Fixes ⚠️</h2>
      <table>
        <thead>
          <tr>
            <th>Error</th>
            <th>The Cause</th>
            <th>The Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Push Rejected</strong></td>
            <td>GitHub has changes you don't have.</td>
            <td>Run <code>git pull</code> first.</td>
          </tr>
          <tr>
            <td><strong>Detached HEAD</strong></td>
            <td>You checked out a specific commit, not a branch.</td>
            <td>Run <code>git checkout main</code>.</td>
          </tr>
          <tr>
            <td><strong>Merge Conflict</strong></td>
            <td>Two people changed the same line.</td>
            <td>Open the file, choose the correct code, and commit.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="24-git-github-best-practices">24. Git & GitHub Best Practices ✅</h2>
      <ul>
        <li><strong>Commit Small & Often:</strong> Don't wait 10 hours to save. 🔵</li>
        <li><strong>Never Commit Secrets:</strong> Keep API keys in <code>.env</code> and <a href="#21-gitignore">gitignore</a> them.</li>
        <li><strong>Write Imperative Messages:</strong> "Add login" instead of "Added login".</li>
      </ul>

      <h2 id="25-daily-git-workflow">25. Daily Git Workflow 📌</h2>
      <p>Follow this routine to stay safe: 🔵</p>
      <ol>
        <li>Start of day: <code>git pull</code></li>
        <li>Create branch: <code>git checkout -b feature-x</code></li>
        <li>Write code / Save: <code>git add .</code> → <code>git commit -m "msg"</code></li>
        <li>End of day: <code>git push origin feature-x</code></li>
      </ol>

      <h2 id="26-conclusion">26. Conclusion 🎯</h2>
      <p>Version control is a superpower. You have gone from wondering what a "terminal" is to understanding the workflow used by teams at Apple and Space-X. Stay consistent, keep pushing to GitHub, and never fear a mistake again! 🔵</p>
    `
  },
  {
    slug: 'how-to-learn-programming',
    category: 'programming',
    title: 'How to Learn Programming as a Beginner',
    date: 'February 9, 2026',
    excerpt: 'A universal roadmap for beginners to stay focused, consistent, and avoid burnout while learning to code.',
    content: `
      <h2>🚀 Introduction / Context</h2>
      <p>The hardest part of coding isn't the math—it is knowing where to start. 🟡 With thousands of tools, beginners often feel lost in the "tutorial hell".</p>

      <h2>❗ Problem or Motivation</h2>
      <p>Most people quit because they try to learn everything at once. 🟡 Burnout happens when you follow tutorials without actually building anything of your own.</p>

      <h2>🧠 Core Concept / Idea</h2>
      <p>Programming is <strong>Logic</strong>, not Memorization. 🟡 You are learning how to solve problems; the coding language is just the tool you use to do it.</p>

      <h2>🔑 Key Points or Observations</h2>

      <h3>1. Pick ONE Language 🟡</h3>
      <p>Don't jump between languages. Start with Python or JavaScript and stick with it until you can build a basic app.</p>

      <h3>2. The 20-Minute Rule 🟡</h3>
      <p>Consistency beats intensity. Coding for 20 minutes every day is better than a 5-hour marathon once a week.</p>

      <h3>3. Build "Useless" Things 🟡</h3>
      <p>Make a tip calculator or a name generator. Building something from scratch teaches more than 100 video tutorials.</p>

      <h2>🛠 Practical Understanding / Intuition</h2>
      <p>Think of learning to code like learning a <strong>Musical Instrument</strong>. 🟡</p>
      <p>Watching someone else play guitar doesn't make you a musician. You have to pick up the guitar, make some bad noises, and practice your scales every day.</p>

      <h2>⚠️ Limitations or Challenges</h2>
      <p>The "Imposter Syndrome" is real. 🟡 You will feel like you aren't "smart enough". Everyone feels this, even senior engineers at Google.</p>

      <h2>✍️ Personal Learning / Reflection</h2>
      <p>I spent months watching videos without writing a single line of code. 🟡 My progress only started when I tried to build a simple website and failed 50 times.</p>

      <h2>🎯 Conclusion / Takeaway</h2>
      <p>Stop overthinking the roadmap. 🟡 Pick a language, set a timer for 20 minutes, and write your first <code>print("Hello")</code> today.</p>
    `
  },
  {
    slug: 'getting-started-with-react',
    category: 'react',
    title: 'Getting Started with React',
    date: 'January 15, 2026',
    excerpt: 'A comprehensive guide to building modern web applications with React, covering components, hooks, and best practices.',
    content: `
      <h2>🚀 Introduction / Context</h2>
      <p>React is the engine behind modern websites like Facebook and Netflix. 🔵 It changes how we build the web by letting us create small, reusable pieces.</p>

      <h2>❗ Problem or Motivation</h2>
      <p>Old-school web coding required updating every single page manually. 🔵 It was slow and led to messy, hard-to-maintain code as apps grew larger.</p>

      <h2>🧠 Core Concept / Idea</h2>
      <p><strong>Components.</strong> 🔵 Think of your website as a set of LEGO bricks. You build a "Button" brick once and use it everywhere.</p>

      <h2>🔑 Key Points or Observations</h2>

      <h3>1. Components (The Bricks) 🔵</h3>
      <p>Every part of your UI—the header, the sidebar, the buttons—is a component. They are independent and easy to test.</p>

      <h3>2. State (The Memory) 🔵</h3>
      <p>State is how a component remembers things, like "Is this button clicked?" or "What is in the shopping cart?".</p>

      <h3>3. Hooks (The Simple Logic) 🔵</h3>
      <p>Hooks like <code>useState</code> allow you to add "life" and interactive behavior to your components with very little code.</p>

      <h2>🛠 Practical Understanding / Intuition</h2>
      <p>Think of React as a <strong>Smart Blueprint</strong>. 🔵</p>
      <p>Instead of drawing the whole house every time, you create blueprints for "Windows" and "Doors". When you want to change the color of all windows, you just update the blueprint once.</p>

      <h2>⚠️ Limitations or Challenges</h2>
      <p>React has a learning curve. 🔵 Concepts like "State" and "Props" can be confusing at first, and the setup (Vite/Node) can feel heavy.</p>

      <h2>✍️ Personal Learning / Reflection</h2>
      <p>I struggled with React until I stopped trying to understand the "whole app" and focused on building one tiny component at a time. 🔵 Small wins lead to big success.</p>

      <h2>🎯 Conclusion / Takeaway</h2>
      <p>React is a superpower for web devs. 🔵 Start by building a simple "Counter" button to see how components and state work together.</p>
    `
  },
  {
    slug: 'machine-learning-basics',
    category: 'python',
    title: 'Machine Learning Basics',
    date: 'January 10, 2026',
    excerpt: 'Understanding the fundamentals of machine learning, from supervised learning to neural networks.',
    content: `
      <h2>🚀 Introduction / Context</h2>
      <p>Machine Learning (ML) is the magic that lets computers learn patterns from data. 🟢 It is what powers your Netflix recommendations and face ID.</p>

      <h2>❗ Problem or Motivation</h2>
      <p>It's impossible to write code for every scenario (like recognizing every dog in the world). 🟢 We need a way for computers to "figure it out" themselves.</p>

      <h2>🧠 Core Concept / Idea</h2>
      <p><strong>Learning from Examples.</strong> 🟢 Instead of giving rules, you give the computer 10,000 photos and tell it: "These are dogs, these are not."</p>

      <h2>🔑 Key Points or Observations</h2>

      <h3>1. Supervised Learning 🟢</h3>
      <p>The "Teacher" method. You give labeled data (input + answer) so the computer can learn the relationship.</p>

      <h3>2. Features (The Clues) 🟢</h3>
      <p>Features are the specific details the computer looks at, like "ear shape" or "fur color", to make its decision.</p>

      <h3>3. The Model (The Prediction) 🟢</h3>
      <p>After training, the computer creates a "Model"—a math formula that can predict the answer for new data it hasn't seen before.</p>

      <h2>🛠 Practical Understanding / Intuition</h2>
      <p>Think of ML as a <strong>Child Learning</strong>. 🟢</p>
      <p>A child doesn't learn what a "chair" is through a technical definition. They learn by seeing 20 different chairs until their brain recognizes the pattern.</p>

      <h2>⚠️ Limitations or Challenges</h2>
      <p>ML requires <strong>Good Data</strong>. 🟢 If you give the computer bad examples (Bias), it will learn the wrong things and make bad predictions.</p>

      <h2>✍️ Personal Learning / Reflection</h2>
      <p>I thought I needed to be a math genius for ML. 🟢 I didn't. Most of it is about data cleaning and choosing the right tool for the job. Start with simple libraries!</p>

      <h2>🎯 Conclusion / Takeaway</h2>
      <p>ML is about finding patterns. 🟢 Start by playing with interactive tools like Google's Teachable Machine to see ML in action without any code.</p>
    `
  },
  {
    slug: 'data-visualization-tips',
    category: 'python',
    title: 'Data Visualization Tips',
    date: 'January 5, 2026',
    excerpt: 'Best practices for creating effective and beautiful data visualizations that tell compelling stories.',
    content: `
      <h2>🚀 Introduction / Context</h2>
      <p>Data visualization is the art of turning boring numbers into a story everyone can understand. 🟢 It is the bridge between data and decisions.</p>

      <h2>❗ Problem or Motivation</h2>
      <p>Spreadsheets are hard to read. 🟢 It is easy to miss a massive trend or a dangerous drop when it is buried in 1,000 rows of numbers.</p>

      <h2>🧠 Core Concept / Idea</h2>
      <p><strong>Visual Efficiency.</strong> 🟢 Humans process images 60,000 times faster than text. A good chart tells the whole story in 3 seconds.</p>

      <h2>🔑 Key Points or Observations</h2>

      <h3>1. Choose the Right Chart 🟢</h3>
      <ul>
        <li>Line Charts: For trends over time.</li>
        <li>Bar Charts: For comparing categories.</li>
        <li>Scatter Plots: For relationships between two things.</li>
      </ul>

      <h3>2. Less is More 🟢</h3>
      <p>Avoid "Chart Junk". Remove unnecessary lines, backgrounds, and 3D effects. Let the data speak for itself.</p>

      <h3>3. Color with Purpose 🟢</h3>
      <p>Use color to highlight what matters. Don't use 10 colors just because they look pretty; use them to guide the viewer's eye.</p>

      <h2>🛠 Practical Understanding / Intuition</h2>
      <p>Think of a chart like a <strong>Traffic Sign</strong>. 🟢</p>
      <p>A "Stop" sign is simple, clear, and uses color (Red) to tell you something vital instantly. Your data charts should be just as easy to understand at a glance.</p>

      <h2>⚠️ Limitations or Challenges</h2>
      <p>Charts can be <strong>Misleading</strong>. 🟢 Changing the scale of a graph can make a tiny change look like a huge disaster. Always be honest with your scales.</p>

      <h2>✍️ Personal Learning / Reflection</h2>
      <p>I used to try to make my charts look "complex" to seem smarter. 🟢 I learned that the most complex thing you can do is make something simple and clear.</p>

      <h2>🎯 Conclusion / Takeaway</h2>
      <p>Simplify your visuals. 🟢 Before you share a chart, ask: "Can a stranger understand this in 5 seconds?" If not, keep trimming.</p>
    `
  },
  {
    slug: 'python-for-data-science',
    category: 'python',
    title: 'Python for Data Science',
    date: 'December 28, 2025',
    excerpt: 'Exploring Python libraries and tools essential for data science and analysis.',
    content: `
      <h2>🚀 Introduction / Context</h2>
      <p>Python is the king of data science. 🟢 It has a massive library for every task, from cleaning messy data to training AI models.</p>

      <h2>❗ Problem or Motivation</h2>
      <p>Manually analyzing millions of data points in Excel is slow and prone to errors. 🟢 We need automation and mathematical power that scales with the data.</p>

      <h2>🧠 Core Concept / Idea</h2>
      <p><strong>The Ecosystem.</strong> 🟢 Python's strength isn't just the language, but the "Libraries"—pre-written code that handles the heavy lifting for you.</p>

      <h2>🔑 Key Points or Observations</h2>

      <h3>1. Pandas (The Master Table) 🟢</h3>
      <p>Pandas is like Excel on steroids. It can filter, clean, and merge millions of rows in a fraction of a second.</p>

      <h3>2. NumPy (The Engine) 🟢</h3>
      <p>NumPy handles the complex math and large arrays that make AI and data analysis possible at high speeds.</p>

      <h3>3. Scikit-Learn (The Toolkit) 🟢</h3>
      <p>This is where the actual "science" happens—building models that can predict trends or classify data automatically.</p>

      <h2>🛠 Practical Understanding / Intuition</h2>
      <p>Think of Python libraries like <strong>Power Tools</strong>. 🟢</p>
      <p>You can build a house with a hand saw (Excel), but if you have to build 100 houses, you want a circular saw and a nail gun (Python Libraries).</p>

      <h2>⚠️ Limitations or Challenges</h2>
      <p>The "Paradox of Choice". 🟢 There are so many libraries that it is easy to get overwhelmed. Focus on <strong>Pandas</strong> first; it is the most useful.</p>

      <h2>✍️ Personal Learning / Reflection</h2>
      <p>I spent too much time trying to learn the math behind the tools. 🟢 Learn the <strong>tools</strong> first. Use them to solve real problems, and the math will start making sense later.</p>

      <h2>🎯 Conclusion / Takeaway</h2>
      <p>Data science is about solving problems. 🟢 Start by importing a small CSV file of something you care about (like your spending) into a Pandas DataFrame.</p>
    `
  },
  {
    slug: 'understanding-neural-networks',
    category: 'python',
    title: 'Understanding Neural Networks',
    date: 'December 20, 2025',
    excerpt: 'A beginner-friendly introduction to neural networks and deep learning concepts.',
    content: `
      <h2>🚀 Introduction / Context</h2>
      <p>Neural networks are the "brain" of AI. 🟢 They are designed to mimic how human neurons fire to solve incredibly complex problems.</p>

      <h2>❗ Problem or Motivation</h2>
      <p>Simple code is great for math, but terrible for things like "understanding a face". 🟢 Faces have too many variations for a human to write rules for.</p>

      <h2>🧠 Core Concept / Idea</h2>
      <p><strong>Layers of Processing.</strong> 🟢 Information flows through layers of artificial neurons, with each layer finding more complex patterns than the last.</p>

      <h2>🔑 Key Points or Observations</h2>

      <h3>1. Input & Output 🟢</h3>
      <p>The network takes raw data (like pixels) at one end and produces a result (like "Cat") at the other.</p>

      <h3>2. Hidden Layers 🟢</h3>
      <p>This is the "Black Box". These middle layers find features like edges, then shapes, then objects, without being told what to look for.</p>

      <h3>3. Training (Weights) 🟢</h3>
      <p>Learning is just adjusting the "volume" (weights) of the connections between neurons until the correct answer comes out.</p>

      <h2>🛠 Practical Understanding / Intuition</h2>
      <p>Think of it as a <strong>Committee of Experts</strong>. 🟢</p>
      <p>The first committee looks for simple lines. The second committee combines those lines into shapes. The final expert looks at the shapes and decides if it's a cat.</p>

      <h2>⚠️ Limitations or Challenges</h2>
      <p>Neural networks are "Hungry". 🟢 They need massive amounts of data and huge computer power to learn effectively.</p>

      <h2>✍️ Personal Learning / Reflection</h2>
      <p>I used to think neural networks were "thinking". 🟢 They aren't. It's just massive amounts of very clever math. Realizing that made them much less intimidating.</p>

      <h2>🎯 Conclusion / Takeaway</h2>
      <p>Deep learning is powerful but specific. 🟢 Don't use a neural network if a simple <code>if/else</code> or a basic chart can solve the problem.</p>
    `
  },
  {
    slug: 'web-performance-optimization',
    category: 'react',
    title: 'Web Performance Optimization',
    date: 'December 15, 2025',
    excerpt: 'Techniques and strategies to make your web applications faster and more efficient.',
    content: `
      <h2>🚀 Introduction / Context</h2>
      <p>Performance is the most important "feature" of any website. 🔵 If your site is slow, users will leave before they even see your content.</p>

      <h2>❗ Problem or Motivation</h2>
      <p>Modern websites are heavy. 🔵 Large images and massive code files can make a site take 10 seconds to load on a mobile phone—that is too long.</p>

      <h2>🧠 Core Concept / Idea</h2>
      <p><strong>Perception vs Reality.</strong> 🔵 Making a site load faster is good, but making it <em>feel</em> fast (showing content early) is even more important.</p>

      <h2>🔑 Key Points or Observations</h2>

      <h3>1. Image Compression 🔵</h3>
      <p>Images are usually the biggest files. Modern formats like WebP can make them 80% smaller without losing quality.</p>

      <h3>2. Lazy Loading 🔵</h3>
      <p>Don't load what the user can't see. Only download images and code as the user scrolls down to them.</p>

      <h3>3. Minimize Code 🔵</h3>
      <p>Bundlers like Vite can automatically remove unused code and shrink your files so they fly over the internet.</p>

      <h2>🛠 Practical Understanding / Intuition</h2>
      <p>Think of your website as a <strong>Backpack</strong>. 🔵</p>
      <p>If you put everything you own in the backpack, you'll walk very slowly. Performance optimization is about only packing exactly what you need for today's trip.</p>

      <h2>⚠️ Limitations or Challenges</h2>
      <p>There is a balance. 🔵 Sometimes adding complex optimization tools can actually make your code harder for other developers to read and maintain.</p>

      <h2>✍️ Personal Learning / Reflection</h2>
      <p>I used to ignore performance until I tried to load my own site on a bad 3G connection. 🔵 It was a wake-up call. Always test on "slow" devices!</p>

      <h2>🎯 Conclusion / Takeaway</h2>
      <p>Start with the easy wins. 🔵 Compress your images today. It is the fastest way to make your site feel like a premium experience.</p>
    `
  }
];

// Helper function to get a single post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};
