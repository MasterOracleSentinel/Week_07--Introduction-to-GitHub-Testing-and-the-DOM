Working With The DOM In JavaScript

DOM Manipulation
When creating web pages, you'll often find yourself needing to change the structure of the page in some way. This is usually done using the Document Object Model (DOM).

The DOM is the data representation of elements, structure, and content of a web page. It allows languages like JavaScript to change the structure of the page, style and content.

The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, and their elements.

One of the popular DOM methods is getElementById(id). This method returns the element whose id property matches the specified id parameter. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

For example, consider the following HTML code:

<html>
<head>
  <title>DOM - getElementById</title>
</head>
<body>
  <p id="title">JavaScript rocks!</p>
</body>
</html>
The following JavaScript code identifies and returns the value of the element "title":

var titleContent = document.getElementById("title").innerHTML;
 
console.log(titleContent);
// result: "JavaScript rocks!"
Using DOM to calculate the width of a page element:

Your task in this activity is to write a JavaScript function called getWidth(id) that returns the width of the element specified with the parameter id. The result should be in pixels (for example, the function could return: "50 px").

Hint: You can checkout the following documentation learn more about the different document methods available for use.

