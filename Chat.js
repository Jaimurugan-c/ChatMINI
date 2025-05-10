// Select elements
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Function to add a message
function addMessage(content, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = content;
  chatBody.appendChild(messageDiv);

  // Auto-scroll to the bottom
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to mimic bot response
function botResponse(userMessage) {
  const responses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great! What about you?",
    "2+2": "4",
    "bye": "Goodbye! Have a nice day!",
    "what is your name": "I'm ChatGPT Mini, your friendly assistant!",
    "what can you do": "I can answer questions, do simple math, and have a chat with you!",
    "who created you": "I was created by a developer using AI technology.",
    "what is the capital of france": "The capital of France is Paris.",
    "tell me a joke": "Why don’t scientists trust atoms? Because they make up everything!",
    "thank you": "You're welcome!",
    "good morning": "Good morning! Hope you have a great day!",
    "good night": "Good night! Sleep well!",
    "what time is it": "I'm not sure of the current time, but you can check your device clock.",
    "how old are you": "I was created recently, so I’m pretty new!"
  };

  const reply =
    responses[userMessage.toLowerCase()] ||
    "Sorry, I didn't understand that. Can you rephrase?";
  addMessage(reply, "bot");
}

// Event listener for the send button
sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, "user");
    userInput.value = "";
    setTimeout(() => botResponse(userMessage), 500);
  }
});

// Allow pressing Enter to send the message
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendBtn.click();
  }
});
