const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "bard",
  version: "1",
  hasPermssion: 0,
  credits: "Grey, Daniel",
  description: "Ask",
  usePrefix: true,
  commandCategory: "ai",
  usages: "bard <ask>",
  cooldowns: 5, 
};

module.exports.run = async function({ api, event }) {
  let { threadID, messageID } = event;
  const cookies = "ZAiGO_E7O6KTANyC5ZXTCqsIGujsrXUF7tlB35-IpbVFoU0hd67lw2Dlq0rum3a1ZsOn8A."; // place your cookie here
  const response = event.body.slice(5).trim();

  if (!response) {
    api.sendMessage("Please provide a question or query", threadID, messageID);
    return;
  }

  api.sendMessage("Searching for an answer, please wait...", threadID, messageID);

  try {
  