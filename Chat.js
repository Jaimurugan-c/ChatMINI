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
    "bye": "Goodbye! Have a nice day!",
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
