(1)
Thinking Through a Unit Test

READ: https://medium.com/@suvodeep4119/javascript-tdd-using-jest-9b535c6be7be

test-driven development with Jest. After you are done, write a unit test in pseudocode that would test the functionality of a calculator program described below: 

The calculator program should add, subtract, multiply, and divide numbers.
Be sure to write a test for each piece of functionality: adding, subtracting, multiplying, and dividing. For example,  a unit test that evaluates two numbers addition would resemble the following:

![image](https://user-images.githubusercontent.com/105542222/213885952-9bdf31f7-f23f-4e59-bbb4-605ea2366eed.png)

For an extra challenge, write the same unit tests in Jests, not in pseudocode. Remember, there is no calculator program to test; you may simply write the unit tests as if there were one. 

Submission Instructions:

Word count: 150-300
Did you learn anything new from one of your peer’s posts? Did you take a similar approach? Reply to their post and continue the conversation.

(2)
Unit Testing Activity

Learning Outcomes Addressed
 1. Construct tests that validate the functionality of your code

 5. Write unit tests

Testing your application is a crucially important task. It ensures that the code you are writing is secure and performs as expected. There are multiple levels to testing an application, with some real-world examples:

Unit Testing: happens at the application code level; or, said another way, in the code used to write a standalone program or application. If you were developing a pen in the factory, this would be like testing that the cap, ballpoint, plastic case, and inkwell all work on their own.
Integration Testing: conducted to evaluate the compliance or interactions of a system or component with specified functional requirements. To use the pen example, this would be testing that the cap fits on the plastic container, the ballpoint integrates with the inkwell, and so on.
System Testing: validates the complete and fully integrated software product, checking to see if the software works the say it is supposed to. With the pen, we’d test that the pen meets the functional requirements of being able to be held for long periods of time without discomfort, consistently has a good inkflow, and is able to write on several different types of paper.
Acceptance Testing: evaluate the system's compliance with the business requirements and assess whether it is acceptable for delivery. For a pen, this would be pass/fail on if the pen’s functionality meets the specific needs it was created to fill. So, does it write, does it look a certain way, does it have a certain ink color, is it a certain weight, does it have the logo placed correctly, and so forth. 
Unit testing is the first level of application testing. As a developer, your focus should be on providing good unit testing to prevent any issues down the road. The more you progress in testing levels, the more expensive it becomes to solve application issues. Unit testing is the first line of defense to ensure an application is doing what it was designed to do. 

In this activity, we will walk you through a list of requirements for a function. Your task is to provide a list of possible Unit Tests that will cover these requirements. For each step in the listed requirements, create the unit tests that you believe will capture the specific requirement. 

You need to write the unit tests, and implement the function Greet() described below, then upload a screenshot of your work.  

Here are the requirements: 

First, Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. For example, if the name is “Elizabeth” the function should return “Hello, Elizabeth”.
Next, handle null values by introducing a default. For example, when the name parameter is null, then the method should return the string “Hello there!”.
Next, add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".
Next, Handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], the method should return the string: “Hello, Jose, Pep”. 
Finally, Handle an arbitrary number of names as input. If the name parameter is an array of multiple names, all names must be greeted. For example, if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’], the method should return the string: “Hello, Alex, Arsene, Jose, Zidane”
Here’s an example of a unit test that checks if a function exists: 

![image](https://user-images.githubusercontent.com/105542222/213885987-4ae37b3e-793c-47a5-bfb4-2dc4ebfc54b4.png)


(3)
When Should You Use Fetch

Learning Outcomes Addressed
 7. Explain how HTML pages interpret JavaScript code

 8. Explain how the browser interprets HTML and JavaScript code

Using The Fetch Command To Retrieve Data
When you want to get data from a remote server to use in your programs, instead of referencing the data from a file directly within the program, you can use the fetch command to retrieve it from an external source. 

Using the fetch command retrieves the data from a remote server and returns it in the JSON format. After that, it's up to you to convert the JSON data into a JavaScript object that you can work with. 

It's important to understand why and when you would use this piece of functionality. 

Why Use Fetch?
Fetch is useful when accessing and utilizing external data. This is desirable because keeping your program light and pulling in data only as needed allows your program to run efficiently. This becomes very useful when you are working with large amounts of data.  

For example, If you’re a Twitter user, you may have noticed that when you go to someone’s profile the program sometimes needs to buffer to display tweets. This occurs when the Twitter program is fetching that data. If all of the tweets in the ecosystem were immediately available to every user, the system would not be able to run. So, instead of storing all the tweets, the data is fetched from an outside web server where it is stored.

Instructions:

Reflect on programs that you regularly use and respond to the following questions:

Describe a program where it would be better to fetch outside data instead of relying on local data storage.
Can you think of a program where fetching external data is not desirable?
Submission Instructions:

Word count: 150-300
Review your peers’ posts. Do you see some creative examples? Reply to them to continue the conversation.


(4)
Explaining the DOM

Learning Outcomes Addressed
 7.Explain how HTML pages interpret JavaScript code

 8.Explain how the browser interprets HTML and JavaScript code

Working With The DOM
At this point in the course, you’ve gained experience working with HTML, CSS, and JavaScript through the DOM. You’ve:

Dynamically injected posts directly into HTML elements
Hooked HTML elements via their IDs and changed their internal contents
Fetched and rendered JSON data onto a web page
Instructions:

Answer the questions below: 

Using a real work example, describe the relationship between the DOM, JavaScript, HTML, and CSS. Describe it the best you can using only your own words without jargon.
What is the advantage of using the DOM to interface with HTML, CSS, and JavaScript? What functionality becomes available? 
If you have questions about the DOM, please post them on the Q&A discussion board so the Learning Facilitators can help clarify them for you.

Submission Instructions:

Word count: 150-300
Did one of your peers share a creative explanation of the DOM? Reply to their post to continue the conversation.

(5)

Q & A Discussion With Learning Facilitators

Do you have specific questions about a coding assignment? Did you encounter a bug that you are struggling to troubleshoot? This forum is the space to ask questions related to this module’s assignments and video content. It will be moderated by your Learning Facilitator.

Learning how to accurately describe problems that you encounter is a crucial skill for any software developer. If you can provide accurate information about the issue you’re facing, you will be more likely to receive meaningful answers to your questions.

Submission Instructions:

Follow these best practices when posting about a challenge to this discussion forum: 

Describe what you expect to happen.
Describe what is happening instead.
Provide detailed steps on how to reproduce what you have already done. 
Attach screenshots or code snippets of all relevant files.
As an example:

I am trying to display a picture of myself for my GitHub portfolio website. My picture should appear below my name when I open the website. 
Instead of seeing my picture, I see a broken image. 
To reproduce my work, I created an index.html with an <h1> tag containing my name and an <img> tag with my photo’s file name. I uploaded these files to GitHub.

 ![image](https://user-images.githubusercontent.com/105542222/213886372-78a952b6-b0fe-4543-9f3b-a610a01314f1.png)

 Notice that the participant included the entire folder contents in the screenshot in this example. This will help Learning Facilitators or other participants diagnose the error.

You are encouraged to reply to your fellow learners to continue the conversation.



