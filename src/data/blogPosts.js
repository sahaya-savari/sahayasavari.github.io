// Blog posts data - HTML content is sanitized before rendering
export const blogPosts = [
  {
    slug: 'python-foundations-part-1',
    title: 'Python Programming — Part 1: Foundations for Absolute Beginners',
    date: 'February 10, 2026',
    excerpt: 'A complete practical guide to the basics of Python, from installation to conditional statements, designed for absolute beginners.',
    content: `
      <h2>Introduction / Context</h2>
      <p>Python has become the world's most popular programming language because it is incredibly beginner-friendly. Its syntax is clean, logical, and reads almost like English. However, for an absolute beginner, the initial setup and "computer science" jargon can be intimidating. This guide is designed to take you from a curious observer to someone who can write and understand fundamental Python code.</p>

      <h2>Problem or Motivation</h2>
      <p>Programming can feel like learning a magic language where one wrong comma breaks everything. Beginners often face:
        <ul>
          <li><strong>Syntax Anxiety:</strong> "Why did my code stop working because of one space?"</li>
          <li><strong>Conceptual Confusion:</strong> "What is a variable vs a string?"</li>
          <li><strong>Overwhelming Choice:</strong> Hundreds of tools, but no clear starting point.</li>
        </ul>
        Python is the "Goldilocks" language—it handles the heavy lifting of computer memory for you, letting you focus on the logic.
      </p>

      <h2>Core Concept / Idea</h2>
      <p>Programming is simply giving a very literal, very fast instruction manual to a computer. Python is an <strong>interpreted language</strong>, meaning a program called an "interpreter" reads your code line-by-line and executes it. 
      <br><br>
      The process looks like this:
      <pre>
[ Your Code ] ---> [ Python Interpreter ] ---> [ Computer Action ]
(English-like)      (The Translator)            (Execution)
      </pre>
      </p>

      <h2>Key Points or Observations</h2>
      
      <h3>Installing Python (Windows)</h3>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Go to <a href="https://python.org" target="_blank">python.org</a> and click "Downloads".</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Run the installer. **CRITICAL:** Check the box "Add Python to PATH".</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Follow the setup and click "Disable path length limit" at the end.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Verify: Open Command Prompt and type: <code>python --version</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Tools: IDLE vs VS Code</h3>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Pro</th>
            <th>Con</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IDLE</td>
            <td>Comes with Python, very simple.</td>
            <td>Basic, no professional features.</td>
          </tr>
          <tr>
            <td>VS Code</td>
            <td>Industry standard, extension support.</td>
            <td>Small learning curve for setup.</td>
          </tr>
        </tbody>
      </table>

      <h3>Python Syntax Basics</h3>
      <p>Python relies on <strong>indentation</strong> (empty spaces) to group code. This is why Python code looks so clean.</p>
      <pre>
SYNTAX STRUCTURE:
Python File
|-- # Comments (Explanations)
|-- Variables (Data Storage)
|-- Functions (Logic Blocks)
|-- Main Code (Execution)
      </pre>

      <h3>Comments in Python</h3>
      <pre><code># This is a single-line comment. Python ignores it.</code></pre>
      <p><strong>Why:</strong> Use <code>#</code> to write notes to yourself or others. It explains the "WHY" behind your logic.</p>

      <h3>Variables: The Storage Boxes</h3>
      <pre><code>name = "Alice"  # Store text in 'name'
age = 25        # Store number in 'age'</code></pre>
      <p><strong>Breakdown:</strong>
        <ul>
          <li><code>name</code>: The Variable Name (the label).</li>
          <li><code>=</code>: Assignment Operator (putting data in the box).</li>
          <li><code>"Alice"</code>: The Value (the actual data).</li>
        </ul>
      </p>

      <h3>Core Data Types</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Example</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Integer</td>
            <td>int</td>
            <td><code>10, -5</code></td>
            <td>Counting items.</td>
          </tr>
          <tr>
            <td>Float</td>
            <td>float</td>
            <td><code>3.14, -0.5</code></td>
            <td>Prices, measurements.</td>
          </tr>
          <tr>
            <td>String</td>
            <td>str</td>
            <td><code>"Hello"</code></td>
            <td>Names, messages, text.</td>
          </tr>
          <tr>
            <td>Boolean</td>
            <td>bool</td>
            <td><code>True/False</code></td>
            <td>Logic, on/off switches.</td>
          </tr>
        </tbody>
      </table>

      <h3>Type Conversion</h3>
      <pre><code>age_text = "25"
age_num = int(age_text) # Converts "25" (text) to 25 (number)</code></pre>
      <p><strong>Why:</strong> Python needs to know if "5" is a piece of text or a math number before it can add it to something else.</p>

      <h3>Input and Output</h3>
      <pre><code>user_name = input("Enter name: ")
print("Hello, " + user_name)</code></pre>
      <p><strong>Logic:</strong> <code>input()</code> pauses the program to wait for you. <code>print()</code> shows the result on the screen.</p>

      <h3>Operators Table</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Symbol</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Arithmetic</td>
            <td><code>+, -, *, /</code></td>
            <td>Add, Subtract, Multiply, Divide.</td>
          </tr>
          <tr>
            <td>Comparison</td>
            <td><code>==, !=, >, <</code></td>
            <td>Check if equal, not equal, etc.</td>
          </tr>
          <tr>
            <td>Logical</td>
            <td><code>and, or, not</code></td>
            <td>Combining multiple conditions.</td>
          </tr>
        </tbody>
      </table>

      <h3>Conditional Statements (Decisions)</h3>
      <pre>
DECISION FLOWCHART:
[ Start ]
    |
[ Is condition True? ] -- Yes --> ( Run 'if' code block )
    |                             |
    No                            |
    |                             |
[ Is 'elif' True? ] ---- Yes --> ( Run 'elif' code block )
    |                             |
    No                            |
    |                             |
( Run 'else' code block ) <-------[ End ]
      </pre>

      <pre><code>score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C")</code></pre>
      <p><strong>Explanation:</strong>
        <ul>
          <li><code>if</code>: The primary check.</li>
          <li><code>elif</code>: Another check if the first one failed.</li>
          <li><code>else</code>: The "fallback" if everything else failed.</li>
        </ul>
      </p>

      <h3>Common Beginner Errors</h3>
      <table>
        <thead>
          <tr>
            <th>Error Name</th>
            <th>Cause</th>
            <th>The Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SyntaxError</td>
            <td>Missing colon <code>:</code> or quote.</td>
            <td>Check your punctuation.</td>
          </tr>
          <tr>
            <td>IndentationError</td>
            <td>Incorrect spaces at start of line.</td>
            <td>Use 4 spaces for every sub-block.</td>
          </tr>
          <tr>
            <td>NameError</td>
            <td>Using a variable that wasn't created.</td>
            <td>Check your variable spelling.</td>
          </tr>
        </tbody>
      </table>

      <h2>Practical Understanding / Intuition</h2>
      <p>Think of Python as a very literal <strong>Personal Assistant</strong>.
        <ul>
          <li><strong>Variables</strong> are memories labeled in the assistant's brain.</li>
          <li><strong>Indentation</strong> is the paragraph structure—it tells the assistant which tasks belong to which instruction.</li>
          <li><strong>If/Else</strong> is the decision-making protocol you gave them: "If it rains, bring an umbrella. Else, wear sunglasses."</li>
        </ul>
      </p>

      <h2>Limitations or Challenges</h2>
      <p>Python's biggest "limitation" is speed compared to languages like C++, but for 99% of applications, it is perfect. The main beginner challenge is <strong>visualizing logic</strong>. It's easy to write code, but hard to "see" why it didn't execute the way you expected. Debugging is a skill you build over time.</p>

      <h2>Personal Learning / Reflection</h2>
      <p>When I started, I thought forgetting a colon meant I was bad at coding. It's not. <strong>Professionals get errors every single day.</strong> Programming is about the ability to solve those errors, not the ability to never make them. Don't be afraid of the red text!</p>

      <h2>Conclusion / Takeaway</h2>
      <p>You have now learned the basics of Python syntax, data types, and decision-making! This foundation is essential for everything from Web Development to AI. Practice writing small <code>if/else</code> statements today to solidify your knowledge. In Part 2, we will tackle Loops and functions.</p>
    `
  },
  {
    slug: 'python-core-concepts-part-2',
    title: 'Python Programming — Part 2: Core Programming Concepts',
    date: 'February 10, 2026',
    excerpt: 'Take your Python skills further by learning about loops, lists, functions, and error handling.',
    content: `
      <h2>Introduction / Context</h2>
      <p>Once you understand variables and basic decisions, the next step is to make your code more efficient. In the real world, you don't want to write the same line 100 times; you want your program to handle repetitive tasks and organize large amounts of information automatically. This transition is what separates someone who writes simple scripts from a professional programmer.</p>

      <h2>Problem or Motivation</h2>
      <p>Beginners often hit a wall when their code becomes repetitive. Common struggles include:
        <ul>
          <li><strong>Code Redundancy:</strong> Copy-pasting the same logic 10 times is hard to maintain.</li>
          <li><strong>Data Chaos:</strong> Trying to manage 50 user names with 50 separate variables is impossible.</li>
          <li><strong>Crashing Apps:</strong> Programs that "break" and close immediately when a user makes a typo.</li>
        </ul>
        Core concepts like Loops, Functions, and Error Handling transform your code from a fragile list of steps into a robust, reusable system.
      </p>

      <h2>Core Concept / Idea</h2>
      <p>Modern programs are built on three technical pillars:
        <ul>
          <li><strong>Repetition (Loops):</strong> Automating repetitive tasks.</li>
          <li><strong>Organization (Data Structures):</strong> Efficiently storing collections of data.</li>
          <li><strong>Reusability (Functions):</strong> Packaging logic so it can be used again without rewrites.</li>
        </ul>
      </p>

      <h2>Key Points or Observations</h2>
      
      <h3>Loops: Repeating Tasks</h3>
      <p><strong>For Loops:</strong> Best when you know exactly how many times you need to repeat something.</p>
      <pre><code>for i in range(5):
    print("Iteration:", i)</code></pre>

      <p><strong>While Loops:</strong> Best when you want to repeat something *until* a specific condition changes.</p>
      <pre>
WHILE LOOP FLOWCHART:
[ Start ]
    |
[ Is Condition True? ] -- No --> [ End ]
    |
   Yes
    |
( Run Loop Body )
    |
[ Back to Start ]
      </pre>

      <pre><code>count = 0
while count < 5:
    print("Counting:", count)
    count += 1</code></pre>

      <h3>Loop Controls</h3>
      <table>
        <thead>
          <tr>
            <th>Control</th>
            <th>Action</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>break</code></td>
            <td>Stops the loop immediately.</td>
            <td>Emergency exit from a loop.</td>
          </tr>
          <tr>
            <td><code>continue</code></td>
            <td>Skips current turn, starts next.</td>
            <td>Skip specific items in a list.</td>
          </tr>
          <tr>
            <td><code>pass</code></td>
            <td>Does absolutely nothing.</td>
            <td>Placeholder for future code.</td>
          </tr>
        </tbody>
      </table>

      <h3>Data Structures Comparison</h3>
      <table>
        <thead>
          <tr>
            <th>Structure</th>
            <th>Symbol</th>
            <th>Ordered?</th>
            <th>Changeable?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>List</td>
            <td><code>[]</code></td>
            <td>Yes</td>
            <td>Yes (Mutable)</td>
          </tr>
          <tr>
            <td>Tuple</td>
            <td><code>()</code></td>
            <td>Yes</td>
            <td>No (Fixed)</td>
          </tr>
          <tr>
            <td>Set</td>
            <td><code>{}</code></td>
            <td>No</td>
            <td>Yes (Unique items only)</td>
          </tr>
          <tr>
            <td>Dictionary</td>
            <td><code>{"k": "v"}</code></td>
            <td>Yes*</td>
            <td>Yes (Key:Value pairs)</td>
          </tr>
        </tbody>
      </table>

      <h3>Accessing and Modifying Data</h3>
      <pre><code># Lists
fruits = ["apple", "banana"]
fruits.append("orange") # Adds item
print(fruits[0])        # Accesses "apple"

# Dictionaries
user = {"name": "Alice", "id": 1}
user["id"] = 2          # Modify value</code></pre>

      <h3>Functions: Reusable Logic</h3>
      <pre>
FUNCTION STRUCTURE TREE:
def [function_name]([parameters]):
    |-- [ Logic / Calculation ]
    |-- [ return ] (Sends result back)
      </pre>

      <pre><code>def calculate_tax(price, rate=0.1):
    tax = price * rate
    return tax

total_tax = calculate_tax(100) # Returns 10.0</code></pre>
      <p><strong>Breakdown:</strong>
        <ul>
          <li><code>def</code>: Tells Python you are defining a function.</li>
          <li><code>price, rate</code>: Inputs the function needs to work.</li>
          <li><code>return</code>: The output or "answer" the function gives back.</li>
        </ul>
      </p>

      <h3>Scope: Local vs Global</h3>
      <table>
        <thead>
          <tr>
            <th>Scope</th>
            <th>Accessibility</th>
            <th>Lifetime</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Global</td>
            <td>Anywhere in the file.</td>
            <td>Until program ends.</td>
          </tr>
          <tr>
            <td>Local</td>
            <td>Only inside the function.</td>
            <td>Until function finishes.</td>
          </tr>
        </tbody>
      </table>

      <h3>Error Handling: Try / Except</h3>
      <pre>
ERROR HANDLING FLOWCHART:
[ Try some risky code ]
          |
    ( Did it Crash? )
    /           \
 [ Yes ]       [ No ]
   |             |
[ Run 'except' ] [ Continue normally ]
   |             |
[ End of block ] <---
      </pre>

      <pre><code>try:
    num = int(input("Number: "))
    print(10 / num)
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Please enter a valid number.")</code></pre>
      <p><strong>Why:</strong> This prevents your program from crashing and allows you to give helpful messages to the user.</p>

      <h3>Importing Modules</h3>
      <pre><code>import math
print(math.sqrt(16)) # Returns 4.0</code></pre>
      <p><strong>Logic:</strong> Modules are pre-written code files. Using <code>import</code> means you don't have to reinvent the wheel for complex math or web connections.</p>

      <h3>Beginner Best Practices</h3>
      <ul>
        <li><strong>Clear Names:</strong> <code>user_age</code> is better than <code>x</code>.</li>
        <li><strong>Small Functions:</strong> One function should do ONE job.</li>
        <li><strong>DRY (Don't Repeat Yourself):</strong> If you write the same code twice, put it in a function.</li>
        <li><strong>Comment Wisely:</strong> Explain the <em>intent</em>, not the obvious code.</li>
      </ul>

      <h2>Practical Understanding / Intuition</h2>
      <p>Imagine you are a head chef managing a large kitchen:
        <ul>
          <li><strong>Loops</strong> are the machines that chop 100 carrots automatically so you don't have to do it by hand.</li>
          <li><strong>Data Structures</strong> are the organized pantry shelves where you know exactly where the 'salt' (key) is.</li>
          <li><strong>Functions</strong> are your recipes; you don't teach the staff how to bake a cake every morning, you just hand them the "Bake Cake" recipe.</li>
        </ul>
      </p>

      <h2>Limitations or Challenges</h2>
      <p>The biggest hurdle here is <strong>Logical Errors</strong> (Bugs). Your code might run without any "red text" (no syntax errors), but it might produce the wrong result because your loop logic or math was slightly off. Learning to <strong>Debug</strong>—stepping through your code line by line—is the most valuable skill at this stage.</p>

      <h2>Personal Learning / Reflection</h2>
      <p>I used to be afraid of functions because I didn't understand how "return" values worked. I thought the variable inside the function was the same as the one outside. Realizing that functions have their own "private world" (Local Scope) was a major 'Aha!' moment that made my code much cleaner.</p>

      <h2>Conclusion / Takeaway</h2>
      <p>Congratulations! You now have the core tools to build real, functional programs. You can store data, repeat tasks, and organize your logic like a pro. Your next goal should be to build a small project—like a To-Do list, a Simple Quiz, or a unit converter. The best way to learn is to build!</p>
    `
  },
  {
    slug: 'github-guide-for-beginners',
    title: 'GitHub Guide for Beginners',
    date: 'February 9, 2026',
    excerpt: 'GitHub is one of the most important tools for developers today. Learn how to store code, track changes, and collaborate.',
    content: `
      <h2>Introduction / Context</h2>
      <p>In the modern world of software development, Git and GitHub are no longer optional—they are as essential as the code you write. However, for absolute beginners, this topic is often the most confusing. New learners frequently mistake the "Git" software for the "GitHub" website or feel overwhelmed by the "scary black screen" of the terminal. This guide is built to remove the jargon and replace it with clear, practical steps and visual analogies.</p>

      <h2>Problem or Motivation</h2>
      <p>Before version control existed, developers faced these common nightmares:
        <ul>
          <li><strong>Losing Code:</strong> Accidentally deleting a file or having a computer crash meant the work was gone forever.</li>
          <li><strong>Messy Backups:</strong> Creating folders like <em>"final_project_v1"</em>, <em>"final_project_v2_REALLY_FINAL"</em> becomes impossible to manage.</li>
          <li><strong>Collaboration Chaos:</strong> If two people edited the same file simultaneously, one person's work would always be overwritten.</li>
          <li><strong>Fear of Breaking Things:</strong> Beginners often avoid experimenting because they don't know how to "go back in time" if something breaks.</li>
        </ul>
        <strong>Version Control</strong> (Git) solves all of these by acting as a professional-grade time machine for your project.
      </p>

      <h2>Core Concept / Idea</h2>
      <p>Think of <strong>Git</strong> as the camera that takes "snapshots" of your project at specific points in time. <strong>GitHub</strong> is like the photo album (or Instagram) where you store and share those snapshots online. 
      <br><br>
      The relationship can be visualized as:
      <pre>
[ Your Computer ]  --- PUSH --->  [ GitHub Server ]
(Local Control)                   (Online Storage)
      </pre>
      </p>

      <h2>Key Points or Observations</h2>
      
      <h3>What is Git?</h3>
      <p>Git is high-performance software that runs on your local computer to track every character you change in your files.</p>

      <h3>What is GitHub?</h3>
      <p>GitHub is a web-based service that hosts Git repositories. It adds collaboration features like pull requests, issue tracking, and a social network for developers.</p>

      <h3>Comparison: Git vs GitHub</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Git</th>
            <th>GitHub</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Type</td>
            <td>Local Software (System)</td>
            <td>Cloud Platform (Website)</td>
          </tr>
          <tr>
            <td>Requirement</td>
            <td>Installed on your PC</td>
            <td>Requires internet and account</td>
          </tr>
          <tr>
            <td>Main Job</td>
            <td>Tracking changes in files</td>
            <td>Hosting and sharing code</td>
          </tr>
          <tr>
            <td>UI Type</td>
            <td>Command Line / Terminal</td>
            <td>Web Graphical Interface</td>
          </tr>
        </tbody>
      </table>

      <h3>Core Terminology</h3>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Plain English Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Repository (Repo)</td>
            <td>Your project's folder + its entire history.</td>
          </tr>
          <tr>
            <td>Commit</td>
            <td>A "Snapshot" or a "Permanent Save Point."</td>
          </tr>
          <tr>
            <td>Stage (Index)</td>
            <td>The "Loading Dock" for files waiting to be committed.</td>
          </tr>
          <tr>
            <td>Branch</td>
            <td>A parallel version of your project for safely trying new ideas.</td>
          </tr>
          <tr>
            <td>Merge</td>
            <td>Combining two parallel versions into one.</td>
          </tr>
        </tbody>
      </table>

      <h3>Installing Git on Windows</h3>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Download the installer from <a href="https://git-scm.com/" target="_blank">git-scm.com</a>.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Run the .exe and click "Next" (Keep default settings).</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Check: "Enable Git Bash" when prompted for components.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Verify: Open Git Bash and type: <code>git --version</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Initial Git Configuration</h3>
      <p>You must identify yourself so your "snapshots" carry your name.</p>
      
      <pre><code>git config --global user.name "Your Name"</code></pre>
      <p><strong>Breakdown:</strong>
        <ul>
          <li><code>git</code>: Invokes the software.</li>
          <li><code>config</code>: Changes settings.</li>
          <li><code>--global</code>: Applies this to EVERY project on your computer.</li>
          <li><code>user.name</code>: The specific setting you are changing.</li>
        </ul>
      </p>

      <pre><code>git config --global user.email "your@email.com"</code></pre>
      <p><strong>Why:</strong> Use the same email registered on your GitHub account to link your local work to your online profile.</p>

      <h3>Creating a Repository</h3>
      <pre><code>git init</code></pre>
      <p><strong>Why:</strong> Turns a normal folder into a Git Repository. It creates a hidden <code>.git</code> folder to start recording history.</p>

      <h3>Git File Lifecycle</h3>
      <pre>
( Working Dir ) ---> [ git add ] ---> ( Staging Area ) ---> [ git commit ] ---> ( History )
      |                                       |                                    |
  "New/Modified"                         "Picked to Save"                       "Saved!"
      </pre>

      <h3>Staging and Committing</h3>
      <p>Think of <strong>Staging</strong> as picking the items you want to put in a box, and <strong>Committing</strong> as sealing the box and writing a label on it.</p>
      
      <pre><code>git add .</code></pre>
      <p><strong>Flag:</strong> The <code>.</code> (dot) means "add everything in this folder."</p>

      <pre><code>git commit -m "Finish home page layout"</code></pre>
      <p><strong>Flag:</strong> <code>-m</code> stands for "message." Your message should describe WHAT you changed.</p>

      <h3>Connecting Local to GitHub</h3>
      <pre>
[ Local Repo ] <===( Link )===> [ GitHub URL ]
      |                             |
 "origin" ---------------------> "https://..."
      </pre>
      <pre><code>git remote add origin https://github.com/user/project.git</code></pre>
      <p><strong>Why:</strong> This command names the online server "origin" so you don't have to type the full URL every time.</p>

      <h3>Pushing Code</h3>
      <pre><code>git push -u origin main</code></pre>
      <p><strong>Flags:</strong> <code>-u</code> (upstream) links the local "main" branch to the one on "origin". Next time, you can just type <code>git push</code>.</p>

      <h3>Cloning Repositories</h3>
      <pre><code>git clone https://github.com/user/cool-project.git</code></pre>
      <p><strong>Why:</strong> Downloads a full copy of an existing project and its history from GitHub to your computer.</p>

      <h3>Pulling Updates</h3>
      <pre><code>git pull origin main</code></pre>
      <p><strong>Why:</strong> Downloads the latest changes made by others and automatically merges them into your local code.</p>

      <h3>Branching</h3>
      <pre>
           /--- feature-A (Safe experimental branch)
main branch ---
           \--- feature-B
      </pre>
      <pre><code>git checkout -b new-feature</code></pre>
      <p><strong>Flags:</strong> <code>-b</code> creates a new branch. <code>checkout</code> switches your active "universe" to that branch.</p>

      <h3>Merging</h3>
      <p>When Feature-A is finished, you pull those changes back into the "main" branch.</p>
      <pre>
( main ) <--- [ merge ] --- ( feature-A )
      </pre>
      <pre><code>git merge new-feature</code></pre>

      <h3>Forking and Workflow</h3>
      <pre>
[ Original Account ] --- ( Fork ) ---> [ Your Account ]
       |                                   |
[ Upstream ] <--- ( Pull Request ) --- [ Origin ]
      </pre>

      <h3>Undoing Mistakes</h3>
      <table>
        <thead>
          <tr>
            <th>Target</th>
            <th>Command</th>
            <th>Plain English Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Discard File Changes</td>
            <td><code>git checkout -- file.txt</code></td>
            <td>Reset file to last save point.</td>
          </tr>
          <tr>
            <td>Unstage a file</td>
            <td><code>git reset HEAD file.txt</code></td>
            <td>Take file off the "Loading Dock."</td>
          </tr>
          <tr>
            <td>Edit last commit msg</td>
            <td><code>git commit --amend</code></td>
            <td>Re-open the last box to fix the label.</td>
          </tr>
        </tbody>
      </table>

      <h3>Viewing History</h3>
      <pre><code>git log --oneline</code></pre>
      <p><strong>Why:</strong> Shows a clean, single-line list of all your previous save points in chronological order.</p>

      <h3>.gitignore Rules</h3>
      <table>
        <thead>
          <tr>
            <th>Entry</th>
            <th>What Git Ignores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>*.log</code></td>
            <td>Every file ending in .log</td>
          </tr>
          <tr>
            <td><code>node_modules/</code></td>
            <td>The entire folder named node_modules</td>
          </tr>
          <tr>
            <td><code>.env</code></td>
            <td>Private password/key files</td>
          </tr>
        </tbody>
      </table>

      <h3>Authentication (HTTPS vs SSH)</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>HTTPS</th>
            <th>SSH</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ease of Use</td>
            <td>Easy (Uses browser login)</td>
            <td>Setup required (Key generation)</td>
          </tr>
          <tr>
            <td>Maintenance</td>
            <td>Asks for Token sometimes</td>
            <td>Set once, forget forever</td>
          </tr>
          <tr>
            <td>Security</td>
            <td>Standard</td>
            <td>High (Key-pair encryption)</td>
          </tr>
        </tbody>
      </table>

      <h3>Common Beginner Errors</h3>
      <table>
        <thead>
          <tr>
            <th>Error Message</th>
            <th>Cause</th>
            <th>The Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"Merge Conflict"</td>
            <td>Two people changed the same line.</td>
            <td>Manually pick the best version and commit.</td>
          </tr>
          <tr>
            <td>"Everything up-to-date"</td>
            <td>You forgot to <code>add</code> or <code>commit</code> first.</td>
            <td>Run <code>git add .</code> and <code>git commit</code>.</td>
          </tr>
          <tr>
            <td>"Permission denied"</td>
            <td>Auth/Token issue or wrong URL.</td>
            <td>Update your credentials or repository URL.</td>
          </tr>
        </tbody>
      </table>

      <h3>Best Practices</h3>
      <ul>
        <li><strong>Commit Tiny:</strong> Save often. It's easier to undo small steps than giant leaps.</li>
        <li><strong>Never Push Secrets:</strong> Always use <code>.gitignore</code> for private API keys.</li>
        <li><strong>Pull Before Push:</strong> Always check for updates from others before sending your own.</li>
        <li><strong>Branch for Everything:</strong> Keep your "main" branch clean and production-ready.</li>
      </ul>

      <h3>Daily Git Workflow</h3>
      <pre>
1. git pull (Get latest)
      |
2. *Edit your code*
      |
3. git add . (Pick changes)
      |
4. git commit -m "Msg" (Confirm save)
      |
5. git push (Upload to cloud)
      </pre>

      <h2>Practical Understanding / Intuition</h2>
      <p>Imagine you are building a LEGO castle:
        <ul>
          <li><strong>Git Init:</strong> You clear a dedicated table just for this castle.</li>
          <li><strong>Git Add:</strong> You pick a specific tower you just finished and put it on a tray.</li>
          <li><strong>Git Commit:</strong> You take a Polaroid photo of that tower on the tray and put the photo in a physical photo album. Even if the castle falls, you can rebuild exactly from that photo.</li>
          <li><strong>Git Push:</strong> You mail a copy of your photo album to a friend (GitHub) so they have a backup and can see your progress.</li>
        </ul>
      </p>

      <h2>Limitations or Challenges</h2>
      <p>The biggest hurdle is "Terminal Fear." Seeing a black box and typing commands feels "old-fashioned" and risky. However, in Git, 99.9% of mistakes can be undone if you stay calm. The second major challenge is <strong>Merge Conflicts</strong>. They aren't "errors"—they are Git's way of asking you for help when it doesn't want to make an executive decision about which code is better.</p>

      <h2>Personal Learning / Reflection</h2>
      <p>When I first started, I thought I had to memorize every complex command. I didn't. Most developers only use about 8 commands daily. What eventually "clicked" for me was treating Git as a file-management system with memory. Don't rush into advanced topics like "Rebasing" or "Stashing" until you are 100% comfortable with the Daily Workflow.</p>

      <h2>Conclusion / Takeaway</h2>
      <p>Git is your professional brain, and GitHub is your professional face (portfolio). If you practice the <strong>Add -> Commit -> Push</strong> workflow every single day for one week, it will become second nature. Start slow, don't fear the terminal, and keep building. You've got this!</p>
    `
  },
  {
    slug: 'how-to-learn-programming',
    title: 'How to Learn Programming as a Beginner',
    date: 'February 9, 2026',
    excerpt: 'A universal roadmap for beginners to stay focused, consistent, and avoid burnout while learning to code.',
    content: `
      <h2>Introduction</h2>
      <p>Learning programming can feel overwhelming because there are many languages, tools, and opinions. Beginners often don't know where to start or what to learn first.</p>

      <h3>The Problem</h3>
      <p>Many beginners jump between tutorials without a clear path. This leads to confusion, burnout, and slow progress. A simple roadmap helps beginners stay focused and consistent.</p>

      <h3>Core Idea</h3>
      <p>Programming is not about memorizing syntax. It is about problem-solving, logic, and practice. Languages are just tools to express solutions.</p>

      <h3>The Roadmap</h3>
      <ul>
        <li><strong>Start with one language:</strong> Python is a great choice for beginners.</li>
        <li><strong>Learn the basics:</strong> Focus on variables, loops, conditions, and functions.</li>
        <li><strong>Practice daily:</strong> Even 20–30 minutes a day makes a huge difference.</li>
        <li><strong>Build projects:</strong> Move away from tutorials and start building small apps.</li>
        <li><strong>Stay calm:</strong> Learn to read error messages as helpful clues, not failures.</li>
      </ul>

      <h3>Practical Intuition</h3>
      <p>Programming is like learning a new language. At first, everything feels confusing. Over time, patterns repeat, and concepts become familiar. Consistency matters more than speed.</p>

      <h3>Personal Reflection</h3>
      <p>What helped me most was building small projects and accepting mistakes as part of learning. Every error taught me something new and improved my confidence.</p>

      <h3>Conclusion</h3>
      <p>Anyone can learn programming with the right mindset and consistency. Focus on fundamentals, practice regularly, and enjoy the learning process instead of rushing results.</p>
    `
  },
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
