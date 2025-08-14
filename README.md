# Mumble - Real-time Video Chat Application

[![Deploy to GitHub Pages](https://github.com/Ahmadraza301/Mumble2-/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ahmadraza301/Mumble2-/actions/workflows/deploy.yml)

**Live Demo**: [https://ahmadraza301.github.io/Mumble2-/](https://ahmadraza301.github.io/Mumble2-/)

A modern, real-time video chat application built with vanilla JavaScript and Agora SDK for seamless video and audio communication.

![image](https://github.com/Ahmadraza301/Mumble2-/assets/102856382/4e3af75f-b3ae-4354-a907-d0f47b6fbffd)

![image](https://github.com/Ahmadraza301/Mumble2-/assets/102856382/5c352857-d9d3-44a0-97ca-5a70538bb4bc)


Overview

Mumble is a web application that allows users to create and join rooms for real-time video and audio communication. The application features a lobby for creating or joining rooms and a dedicated room interface for participating in streams and chatting.

## 🚀 Technologies Used

- **HTML5**: Semantic markup for web pages
- **CSS3**: Modern styling with custom design system
- **JavaScript (ES6+)**: Vanilla JS for interactivity and real-time features
- **Agora SDK**: Real-time communication (RTC) and messaging (RTM)
- **WebRTC**: Browser-based real-time communication
- **GitHub Pages**: Static site hosting and deployment
## ✨ Features

- **🎥 Real-time Video/Audio**: High-quality video and audio communication
- **💬 Live Chat**: Real-time messaging with participants
- **👥 Participant Management**: See who's in the room and manage participants
- **🖥️ Screen Sharing**: Share your screen with other participants
- **🎤 Audio Controls**: Mute/unmute microphone
- **📹 Video Controls**: Turn camera on/off
- **🔗 Room Sharing**: Easy room creation and joining with room codes
- **📱 Responsive Design**: Works on desktop and mobile devices
- **⚡ Low Latency**: Optimized for real-time communication
## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node package manager)
- **Modern Browser** (Chrome, Firefox, Safari, Edge)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ahmadraza301/Mumble2-.git
   cd Mumble2-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Production Deployment

The application is automatically deployed to GitHub Pages when you push to the main branch.

**Live URL**: https://ahmadraza301.github.io/Mumble2-/

## 📁 Project Structure

```
Mumble2-/
├── 📁 .github/
│   └── 📁 workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── 📁 images/                  # Static images and assets
├── 📁 js/                      # JavaScript files
│   ├── config.js              # Agora configuration
│   ├── lobby.js               # Lobby page logic
│   ├── room.js                # Room UI interactions
│   ├── room_rtc.js            # Agora RTC implementation
│   ├── room_rtm.js            # Agora RTM messaging
│   ├── AgoraRTC_N-4.21.0.js   # Agora RTC SDK
│   └── agora-rtm-sdk-1.5.1.js # Agora RTM SDK
├── 📁 styles/                  # CSS stylesheets
│   ├── main.css               # Global styles
│   ├── lobby.css              # Lobby page styles
│   └── room.css               # Room page styles
├── lobby.html                 # Lobby page
├── room.html                  # Room page
├── package.json               # Project dependencies
├── .gitignore                 # Git ignore rules
└── README.md                  # Project documentation
```
## ⚙️ Configuration

### Agora SDK Setup

1. **Get Agora App ID**
   - Sign up at [Agora Console](https://console.agora.io/)
   - Create a new project
   - Copy your App ID

2. **Update Configuration**
   - Open `js/config.js`
   - Replace the `APP_ID` with your actual Agora App ID:
   ```javascript
   const AGORA_CONFIG = {
       APP_ID: "your-actual-agora-app-id-here"
   };
   ```

### Environment Variables (Optional)

For production deployments, you can set environment variables:

```bash
AGORA_APP_ID=your-agora-app-id
```

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run dev` - Start development server
- `npm run build` - Build for production (no build process needed)
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Agora.io](https://agora.io/) for providing the real-time communication SDK
- [GitHub Pages](https://pages.github.com/) for hosting
- All contributors and users of this project
