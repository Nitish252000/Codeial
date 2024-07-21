# Codeial - Social Media Web Application

Codeial is a dynamic social media platform designed to connect users through a variety of interactive features. It is built using modern web technologies such as EJS, Node.js, and MongoDB, along with a suite of Node.js packages like Nodemailer and Noty to enhance functionality.

## Features
* User Registration and Login: Users can sign up and log in securely using Passport.js, with JWT tokens ensuring safe and persistent sessions.
* Profile Management: Users can customize their profiles by updating their details, such as profile pictures, names, and bios.
* Friend Requests: The app allows users to manage their social connections by sending, receiving, accepting, or declining friend requests.
* Posts and Comments: Users can create posts, view content from friends, and engage by commenting on posts.
* Likes: Users can express appreciation by liking or unliking posts and comments.
* Real-time Chat: The platform supports real-time messaging, enabling users to chat with their friends instantly.

## Technologies Used
* EJS (Embedded JavaScript): Utilized for rendering dynamic web pages on the server side.
* Node.js: Serves as the backend runtime environment to handle HTTP requests and server logic.
* MongoDB: A NoSQL database for storing user data, posts, comments, and other relevant information.
* Passport.js: Provides secure user authentication, allowing users to log in with confidence.
* JWT Tokens: Employed for maintaining secure authentication and managing user sessions.
* Nodemailer: Facilitates email functionalities for account verification and password recovery.
* Noty: Delivers user-friendly notifications to enhance user experience.
* Flash-connect: Displays flash messages to communicate user interactions and system responses.
* Multer: Handles file uploads, enabling users to upload profile and post images.
* Google OAuth: Allows users to register and log in using their Google accounts for added convenience.


## Getting Started
To run Codeial locally, follow these steps:
1. Clone the repository: git clone https://github.com/Nitish252000/NODEWS.git
2. cd Codeial
3. Install dependencies: npm install
4. Set up MongoDB: Make sure you have MongoDB installed and running.
5. Configure Environment Variables: Set up environment variables for MongoDB connection, JWT secret, and other configurations.
6. Start the server: npm start
7. Open your web browser and visit: https://localhost:8000 to access the Codeial application
