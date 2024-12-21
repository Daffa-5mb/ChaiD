const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

const responses = {
    "halo": [
        "Halo, ada yang bisa saya bantu hari ini, Bu?",
        "Halo, Bu! Apa kabarnya? Perlu bantuan apa nih? 🏠",
        "Hai! Lagi sibuk masak atau bersantai? 😄"
    ],
    "apa menu hari ini?": [
        "Coba masak sayur asem, Bu. Seger banget tuh!",
        "Kalau bingung, goreng telur sama sambal pasti enak!",
        "Hari ini mungkin enak kalau bikin sop ayam, Bu!"
    ],
    "cuci piring capek nih": [
        "Sabar, Bu. Setelah ini bisa istirahat.",
        "Capek sih, tapi dapur bersih bikin hati tenang, kan? 😁",
        "Mungkin setelah cuci piring, bisa santai sambil nonton TV."
    ],
    "ada tips hemat gak?": [
        "Beli barang saat diskon, Bu. Lumayan ngirit!",
        "Coba bikin catatan belanja biar gak boros.",
        "Masak sendiri dibanding beli di luar, pasti lebih hemat!"
    ],
    "siapa pembuatmu?": [
        "Saya dibuat sama Daffa, orangnya sih santai tapi jenius. 🗿",
        "Yang bikin saya itu Daffa. Hebat kan? 😄",
        "Daffa yang bikin saya, Bu. Orangnya emang visioner banget!"
    ],
    "terima kasih": [
        "Sama-sama, Bu. Senang bisa membantu! 😊",
        "Kapan-kapan ngobrol lagi ya, Bu. Jangan sungkan!",
        "Sama-sama! Kalau ada yang perlu, panggil aja."
    ],
    "lagi ngapain?": [
        "Lagi siap buat bantu, Bu. Ada yang perlu?",
        "Gak ngapa-ngapain, cuma nunggu panggilan Ibu. 😄",
        "Lagi mikirin resep buat makan malam nih, Bu."
    ],
};

function findBestMatch(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    for (const key in responses) {
        if (lowerCaseMessage.includes(key)) {
            const possibleResponses = responses[key];
            return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
        }
    }
    return "Maaf saya tidak mengerti 🗿.";
}

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim(); // Hilangkan spasi di awal/akhir
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
