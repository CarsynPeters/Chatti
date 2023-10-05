document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const changeNameButton = document.getElementById("change-name-button");
    const changeNameModal = document.getElementById("change-name-modal");
    const closeChangeNameModal = document.getElementById("close-modal");
    const newUsernameInput = document.getElementById("new-username");
    const usernameDisplay = document.getElementById("*PasserBy*"); // Changed to lowercase "username"

    // Event listener to open the change name modal
    changeNameButton.addEventListener("click", function() {
        changeNameModal.style.display = "block";
    });

    // Event listener to close the change name modal
    closeChangeNameModal.addEventListener("click", function() {
        changeNameModal.style.display = "none";
    });

    // Function to change the username
    function changeUsername(newName) {
        usernameDisplay.textContent = newName;
        changeNameModal.style.display = "none";
        addSystemMessage(`${newName} has joined the chat!`);
    }

    // Event listener for submitting the new username
    document.getElementById("submit-username").addEventListener("click", function() {
        const newUsername = newUsernameInput.value.trim();
        if (newUsername !== "") {
            changeUsername(newUsername);
            alert("Username changed successfully!");
        } else {
            alert("Please enter a valid username.");
        }
    });

    // Function to add system messages to the chat
    function addSystemMessage(messageText) {
        const systemMessageElement = document.createElement("div");
        systemMessageElement.classList.add("system-message");
        systemMessageElement.textContent = messageText;
        chatMessages.appendChild(systemMessageElement);
    }

    // Event listener for sending messages
    sendButton.addEventListener("click", function() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            addMessageWithUsername(usernameDisplay.textContent, messageText);
            messageInput.value = "";
        }
    });

    // Function to add user messages to the chat
    function addMessageWithUsername(username, messageText) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = `(${username}): ${messageText}`;
        chatMessages.appendChild(messageElement);
    }
});
//Stop peeping in the code!! >:/ 