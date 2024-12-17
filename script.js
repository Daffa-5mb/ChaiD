const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

const responses = {
    "halo": "Si manusia ngapain jir 😹",
    "lah, ai gw kenapa jir 😹": "Nguwawor cik 😹",
    "bre gw ada tugas nih": "Apa tuh wak? 🗿",
    "tolong cariin pacar yang cocok sama gw 🗿": "404 😹",
    "woilah 🗿": "Yaudah mau gimana lagi 😁",
    "lu aja mau gak?": "Najis 🤮",
    "gw shutdown lu anj 🗿🫵": "Iyadeh jangan ya sayang 😭",
    "huek 🤮": "gblk 🗿",
    "hehe 😁": "gak jelas lu sumpah 🗿"
};

function findBestMatch(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    for (const key in responses) {
        if (lowerCaseMessage.includes(key)) {
            return responses[key];
        }
    }
    return "Ketik yang bener, gak ngerti gw 🗿.";
}

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
        chatbox.innerHTML += `<div class="user-message"><strong>Lu:</strong> <span class="message">${userMessage}</span></div>`;
        userInput.value = '';
        
        // Menentukan respons AI berdasarkan input pengguna
        const aiResponse = findBestMatch(userMessage);

        setTimeout(() => {
            chatbox.innerHTML += `<div class="ai-message"><strong>AI:</strong> <span class="message">${aiResponse}</span></div>`;
            chatbox.scrollTop = chatbox.scrollHeight; // Scroll ke bawah
        }, 1000);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
