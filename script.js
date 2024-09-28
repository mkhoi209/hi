document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    addFriend(username);
});

function addFriend(username) {
    const friendsList = document.getElementById('friendsList');
    const friendItem = document.createElement('div');
    friendItem.textContent = username;
    friendsList.appendChild(friendItem);
    document.getElementById('username').value = '';
}

document.getElementById('sendMessage').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageItem = document.createElement('div');
        messageItem.textContent = message;
        chatMessages.appendChild(messageItem);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Tự động cuộn xuống dưới
    }
});
