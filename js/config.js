// Configuration file for Agora SDK
// Replace this with your actual Agora App ID
const AGORA_CONFIG = {
    APP_ID: "4663315885c644c7b3c7b73be37df831", // Replace with your Agora App ID
    // You can add more configuration options here
    // CERTIFICATE: "your-certificate-here", // For token authentication
    // CHANNEL_TYPE: "live", // or "rtc"
    // CODEC: "vp8" // or "h264"
};

// Function to get configuration
function getAgoraConfig() {
    return AGORA_CONFIG;
}

// Function to set APP_ID (useful for environment variables)
function setAgoraAppId(appId) {
    AGORA_CONFIG.APP_ID = appId;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AGORA_CONFIG, getAgoraConfig, setAgoraAppId };
}
