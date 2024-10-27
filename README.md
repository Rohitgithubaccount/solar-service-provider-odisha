# __Project Name: Solar Service Provider, Odisha__

## Description:   __For Site Maintenance Engineer__
This project is a static website that incorporates several interactive elements to enhance user experience. These elements include a project sections carousel, a count-up animation for displaying achievements, a sidebar menu that can be toggled via a hamburger icon, and a preloader that appears while the page is loading. Despite being static, the website relies on JavaScript to provide dynamic behavior without server-side logic or database interaction. All components are designed to ensure smooth transitions and a responsive layout, making the site both visually appealing and easy to navigate.

## Table of Contents:
    - Features
    - Installation
    - Usage
        - Carousel Functionality
        - Count-Up Animation
        - Sidebar Toggle
        - Preloader
        - Contact Form Functionality
        - Formspree Dashboard Overview

    - Technologies Used: HTML5, CSS3, JS 

## Features
    - A dynamic carousel that cycles through items every 3 seconds.
    - A count-up animation that activates when the achievements section is visible.
    - A sidebar that toggles on and off when clicking the hamburger menu.
    - Smooth scrolling to specific sections when clicking sidebar links.
    - A preloader that disappears after 5 seconds or when all page resources have loaded.

## How to View the Project:
    - Download the project files to your local machine.
    - Navigate to the folder where the files are located.
    - Open the index.html file in your browser to view the project.

No installation or external dependencies are required as this is a purely static website.

## Usage

### Carousel Functionality
The carousel is designed to switch between items every 3 seconds. Each item is assigned either an active, left, or right class, depending on its position in the sequence.

#### To Adjust:
- You can change the interval by modifying the setInterval function inside script.js:
```javascript
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}, 3000); // Change 3000 to your desired interval time

### Count-Up Animation
The count-up animation is triggered when the #achievements section enters the viewport, using the IntersectionObserver API.

#### To Adjust:
- The targets and duration for the animation can be modified in the countUp function inside script.js:
    countUp("count1", 500, 2000); // Target: 500, Duration: 2000ms
    countUp("count2", 98, 2000);  // Target: 98%, Duration: 2000ms
    countUp("count3", 50, 2000);  // Target: 50, Duration: 2000ms

### Sidebar Toggle
The sidebar toggles open and closed when the hamburger icon is clicked. Sidebar links provide smooth scrolling to different sections of the page.

#### To Adjust:
- Sidebar link behavior is handled with scrollIntoView, ensuring smooth scrolling when navigating the page.

### Preloader
A preloader is displayed when the page loads and is automatically removed after 5 seconds, or when the page has finished loading. 

#### To Adjust:
- The duration of the preloader can be adjusted by changing the timeout value in script.js:
    setTimeout(function () {
        var preloader = document.querySelector(".preloader");
        preloader.parentNode.removeChild(preloader);
        document.body.classList.add("loaded");
    }, 5000); // Adjust the timeout here

### Contact Form Functionality
- The JavaScript code snippet you provided adds functionality to a contact form on your website, implementing several key actions, including a preloader display, form submission prevention, and conditional animation. Here's a breakdown of its purpose and how it works:

# Loader Display on Form Submission
    When the user submits the form (#contactForm), the preloader (#loader-wrapper) becomes visible by changing its display property to 'flex', providing immediate feedback that the form is being processed.
    Prevent Form Submission: The event.preventDefault() function prevents the form from submitting immediately, allowing time to display the loader and perform additional logic.
    Delayed Form Submission: After a delay of 1000 milliseconds (1 second), the form is submitted using this.submit() and then reset using this.reset(), clearing the form fields.
# Animation Trigger on Window Load
    The window's load event listener checks if the screen width is 1024px or larger (typically for desktop screens). If so, the #section-wrapper gets the class 'animated' added, triggering any CSS animations linked to that class (e.g., fade-ins, sliding effects).
    This ensures the animations occur only on larger screens, enhancing the desktop user experience without affecting smaller devices like phones.
# Page Reload for Formspree
    The code checks if the user is redirected from the domain formspree.io (commonly used for handling form submissions). If the URL includes this domain, the page reloads, possibly to reset the form or refresh the page state after form submission.

# Formspree Dashboard Overview

    The Formspree dashboard offers a comprehensive interface for managing and analyzing form submissions. Here are some key features you can take advantage of:

## Form Data Management
    You can handle all your form submissions efficiently through the dashboard. It provides an organized view of all incoming data, making it easy to access and manage submissions.

## Analytics and Insights
    The dashboard allows you to view detailed analytics, including monthly submission trends. You can track increases or dips in submissions, giving you valuable insights into user engagement over time.

## Geographical Tracking
    One of the standout features is the ability to see the geographical locations from which your form submissions originate. This can help you understand your audience better and tailor your content or services accordingly.

## Custom Notifications
    You can set up custom email notifications for new submissions, ensuring you never miss an important message.

For more information and to explore these features in detail, you can visit the [Formspree website](https://formspree.io/) or refer to their [documentation](https://formspree.io/docs).

## Technologies Used
    - HTML5: Markup language used to structure the content.
    - CSS3: Stylesheet language used for designing and layout.
    - JavaScript (ES6+): Used for adding interactivity and dynamic behavior.
    - IntersectionObserver API: To track visibility of the achievements section and trigger animations.
    - Material-UI (optional): For any Material Design-based icons or components.

## Notes for Maintenance:
    - Ensure that the JavaScript is working properly for the dynamic elements (carousel, count-up animation, sidebar toggle, and preloader).
    - Check the CSS for any responsive design issues, particularly in the sidebar and carousel sections.
    - Any updates should focus on refining the UI/UX without altering the static nature of the site.

## License
This project is not licensed under any specific terms. Please contact the owner for usage inquiries.
=============================================================================================================







                                            ## Developer Details
=============================================================================================================
## Developer Information
    Name:      Rohit Sharma  
    Location:  Cuttack, Odisha, India  
    Email:     [sharmarohit24580@gmail.com](mailto:sharmarohit24580@gmail.com)  
    Phone:     +91-637 164 1090  
    LinkedIn:  [https://linkedin.com/in/rohit-sharma24580] 
    Website:   [https://portfolio-rohit-99.netlify.app/]

### About Me
I am a web developer with a passion for creating user-friendly and engaging websites. With a several years of experience and focus on interactive elements and responsive design, I strive to deliver high-quality projects that meet clients' needs and enhance user experiences.

### Skills
    - HTML5, CSS3, JavaScript (ES6+)
    - Responsive Web Design
    - Frontend Development
    - UI/UX Design
    - JavaScript Libraries and Frameworks (React, etc.)

### Contact Terms
Feel free to reach out for:
    - Collaboration opportunities
    - Project inquiries
    - Feedback or questions regarding my work
    - Networking and professional connections

                                        I look forward to connecting with you!
=============================================================================================================
