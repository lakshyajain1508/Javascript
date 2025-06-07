## What is JavaScript?
JavaScript is a programming language used to make websites interactive. It runs in browsers (e.g., Chrome) and can also work outside browsers with Node.js. This tutorial focuses on writing and running a simple program that outputs "Hello, World!".

## Prerequisites
- A computer with a web browser (e.g., Google Chrome).
- A text editor (Notepad is fine, but Visual Studio Code is recommended—free at [code.visualstudio.com](https://code.visualstudio.com/)).
- Optional: Node.js (we’ll guide you through installation for Method 2).
- No coding experience needed.

## Running "Hello, World!" in a Web Browser
This method uses a browser to run JavaScript, displaying the output in the browser’s console.

### Step 1: Create a New File
1. Open your text editor (e.g., Notepad or VS Code).
2. Create a new file and name it `index.html`. Save it in a folder, like `C:\Users\YourName\Documents\JS_Tutorial`.

### Step 2: Write the HTML and JavaScript Code
1. Copy and paste the following code into `index.html`:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>My First JavaScript Program</title>
   </head>
   <body>
       <h1>Hello, World! Program</h1>
       <script>
           console.log("Hello, World!");
       </script>
   </body>
   </html>
   ```
2. Save the file (`Ctrl+S` or `File > Save`).

**What’s happening here?**
- `<!DOCTYPE html>`: Declares the file as HTML.
- `<script>`: Contains JavaScript code.
- `console.log("Hello, World!");`: Prints "Hello, World!" to the browser’s console.

### Step 3: Open the File in a Browser
1. Navigate to your folder (e.g., `C:\Users\YourName\Documents\JS_Tutorial`).
2. Double-click `index.html` to open it in your default browser, or drag the file into an open browser window (e.g., Chrome).
3. The browser will display a page with the heading "Hello, World! Program".

### Step 4: View the Output in the Console
1. Open the browser’s Developer Tools:
   - On Chrome: Right-click the page, select **Inspect**, or press `Ctrl+Shift+I` (Windows) or `Cmd+Option+I` (Mac).
   - Go to the **Console** tab.
2. You should see "Hello, World!" in the console.
3. If you don’t see it, check for typos in the code or ensure the file was saved.

### Step 5 (Optional): Display Output on the Web Page
1. To show "Hello, World!" directly on the page, modify the `<script>` section in `index.html`:
   ```html
   <script>
       document.write("Hello, World!");
   </script>
   ```
2. Save the file and refresh the browser (`F5` or `Ctrl+R`).
3. The text "Hello, World!" will appear on the web page below the heading.
