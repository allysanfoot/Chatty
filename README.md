# Chatty

Chatty is a modern web-based real-time chat application built with React, Firebase, and a clean, responsive user interface. It allows users to register, log in, and engage in seamless conversations with others.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Real-Time Messaging**: Instant message delivery and receipt via Firebase Firestore.
- **Search Functionality**: Quickly find users to chat with.
- **Profile Management**: Add a profile picture for personalization.
- **Attachments**: Send images and files during chats.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Technologies Used
- **Frontend**: React, SCSS
- **Backend**: Firebase (Authentication, Firestore)
- **State Management**: React Context API
- **Testing**: Jest

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- A Firebase project set up with Firestore and Authentication enabled.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Chatty.git
   cd Chatty

2. Install dependencies:
   ```bash
   npm install 
3. Set up Firebase
- Replace the contents of ```src/firebase.js``` with your Firebase configuration details.
4. Start the development server:
  ```bash
  npm start
5. Open your browser and navigate to:
  ```
  http://localhost:3000

### Usage
1. Register a new user or log in with an existing account
2. Start or join a conversation using the search bar
3. Send messages, images, or files
4. Personalize your profile with an avatar

### Project Structure
```
Chatty/
├── public/                 # Static files
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/         # Reusable components
│   │   ├── ChatInput.jsx
│   │   ├── ChatPanel.jsx
│   │   ├── Convos.jsx
│   │   ├── Message.jsx
│   │   ├── Messages.jsx
│   │   ├── Navigation.jsx
│   │   ├── Search.jsx
│   │   └── Sidebar.jsx
│   ├── context/            # React Context for state management
│   │   ├── AuthenticationContext.js
│   │   └── ChatContext.js
│   ├── img/                # Image assets
│   │   ├── add-image.png
│   │   ├── add-profile.png
│   │   ├── add-user.png
│   │   ├── attach-file.png
│   │   ├── crescent.jpg
│   │   ├── settings.png
│   │   ├── video-call.png
│   │   └── wisp.png
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point
│   ├── firebase.js         # Firebase configuration
│   ├── App.css             # Global styles
│   ├── index.scss          # SCSS styles
│   ├── reportWebVitals.js  # Performance monitoring
│   └── setupTests.js       # Jest setup file
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Lock file for npm dependencies
└── README.md               # Project documentation
```
### Screenshots
- [Login Page Screnshot](https://imgur.com/naZbcNR)
- [Registration Page Screenshot](https://imgur.com/T4IUNc3)
- [Chat Window Screenshot](https://imgur.com/JzGySkG)

### Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes and push them.
4. Submit a pull request.
   
### License
This project is licensed under the MIT License. See the LICENSE file for details.
