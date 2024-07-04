Mumble2

http://127.0.0.1:5502/lobby.html

![image](https://github.com/SameerNazir0624/Mumble2-/assets/102856382/4e3af75f-b3ae-4354-a907-d0f47b6fbffd)

![image](https://github.com/SameerNazir0624/Mumble2-/assets/102856382/5c352857-d9d3-44a0-97ca-5a70538bb4bc)


Overview

Mumble is a web application that allows users to create and join rooms for real-time video and audio communication. The application features a lobby for creating or joining rooms and a dedicated room interface for participating in streams and chatting.

Technologies Used
HTML: Markup language for creating the web pages.
CSS: Styling language for designing the appearance of the web pages.
TailwindCSS: Utility-first CSS framework.
JavaScript: Programming language for adding interactivity to the web pages.
Next.js: React framework for building the front end.
Agora SDK: Real-time communication (RTC) and real-time messaging (RTM) functionalities.
PostCSS: Tool for transforming CSS with JavaScript plugins.
Sanity: Content management system (CMS) for handling backend content.
Features
Lobby Page: Allows users to enter their name and the room name to create or join a room.
Room Page: Interface for video and audio communication, chat functionality, and participant list.
Getting Started
Follow these steps to set up and run the project on your local machine.

Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
npm (Node package manager)
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/mumble.git
Navigate to the project directory:

sh
Copy code
cd mumble
Install dependencies:

sh
Copy code
npm install
Running the Project
Start the development server:

sh
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.

Directory Structure
lua
Copy code
Mumble/
├── .vscode/
├── images/
├── js/
│   ├── AgoraRTC_N-4.21.0.js
│   ├── agora-rtm-sdk-1.5.1.js
│   ├── lobby.js
│   ├── room.js
│   ├── room_rtc.js
│   └── room_rtm.js
├── styles/
│   ├── main.css
│   ├── lobby.css
│   └── room.css
├── lobby.html
├── room.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── README.md
Configuration
You may need to configure some environment variables in a .env file at the root of your project:


makefile
Copy code
NEXT_PUBLIC_AGORA_APP_ID=your-agora-app-id
NEXT_PUBLIC_AGORA_APP_CERTIFICATE=your-agora-app-certificate
SANITY_PROJECT_ID=your-sanity-project-id
SANITY_DATASET=your-sanity-dataset
Replace the placeholder values with your actual Agora and Sanity project details.

License
This project is licensed under the MIT License.

Replace yourusername with your actual GitHub username in the cloning step if you're hosting the project on GitHub. Additionally, fill in the environment variable values with your actual Agora and Sanity details.
