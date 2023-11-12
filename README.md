# HackUNT2023
## The story behind Time U™
![Overstimulation Illustration](https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2023/05/10_Takeaways_Social_Blog-1024x536.webp)
We live in an era of overstimulation and constant bustle. At times, it's hard to make proper use of the limited time we have in a day. Often we find ourselves thinking we wasted the day, could've done more, and sulk about not meeting that mental _to-do_ list. This is even moresoe in the lives of college students. Between classes, jobs/job hunting, and overall introspection it can get tough to stay focused on other matters. With that, we bring forth **Time U™**. Our friendly user interface and interactive layout aim to help **YOU** seize your day, today.

## What does it do?
Time U™ serves as a task manager by splitting events into two categories: "to-do" and "done". Simple. Once the user has accomplished a task, they drag it over to the "done" section. Time U™ also offers the option to clear this section as well as a handy summary of the day's events below a calendar. And if the user struggles with reaching their "flow state", we've included a Pomodoro timer to assist!

## How did we build it?
![React Logo](https://mochikit.com/wp-content/uploads/2019/01/React_logo-300x169.png)
<br>The tech stack included _React_: JavaScript, TypeScript, CSS, and HTML. Version control was accomplished through GitHub/Git. Adjustments were made by unit testing source code.

## Challenges we ran into
We struggled to implement the drag-and-drop feature within the main calendar. At first, we began making it from scratch. After that proved to be a bit unfeasible, we tried to source a template online. Although we found one, it was difficult to integrate it with our pre-written react files. 

## Some accomplishments that we're proud of
Our proximity to the mock sample was pretty high. The sample was Canvas's calendar. We're also proud of learning and improving our web developer skills and learning a new language!

## What did we learn?
Almost without realizing it, we employed a new language: _TypeScript_. We used it to create the drag-drop and remove features for the widgets. 

## What's next for Time U™?
Due to React's vast libraries, we hope to incorporate a voice-to-text element that picks up on the user's command for a summary of daily tasks. e.g.
<br>
**User**: "Hey Time U, What's my day looking like?
<br>
**Time U**: "Hello master. Today you have [INSERT TASK] at [INSERT TIME]. Is there anything else?"
<br>
**User**: "Nope! Thanks Time U!"

We'll be using the ```react-speech-recognition``` library.
