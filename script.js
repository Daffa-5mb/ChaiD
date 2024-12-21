const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

const responses = {
    "halo": [
        "Halo, Bu! Gimana hari ini?",
        "Halo, ada yang bisa saya bantu? 😊",
        "Hai! Lagi masak apa nih? 🧑‍🍳"
    ],
    "sakit":[
        "Istirahat aja dulu bu, kalo dibiarin takutnya malah nambah parah, semoga cepat sembuh ya bu!"
    ],
    "sehat": [
        "Alhamdulillah, ada yang bisa dibantu bu?"
    ],
    "baik":[
        "Alhamdulillah, ada yang bisa dibantu bu?"
    ],
    "apa menu hari ini?": [
        "Coba bikin nasi goreng spesial, pasti enak!",
        "Kalau bingung, masak mie instan aja, Bu. Simpel tapi nikmat! 🍜",
        "Saran saya sih bikin tumis sayur sehat, Bu!"
    ],
    "nasi goreng spesial": [
        "Resep Nasi Goreng Spesial:\n" +
        "1. Panaskan sedikit minyak di wajan.\n" +
        "2. Tumis bawang putih dan bawang merah hingga harum.\n" +
        "3. Masukkan telur, orak-arik sampai matang.\n" +
        "4. Tambahkan nasi putih, aduk rata.\n" +
        "5. Masukkan kecap manis, saus tiram, dan garam secukupnya.\n" +
        "6. Aduk hingga semua bumbu merata. Tambahkan potongan ayam atau sosis kalau suka.\n" +
        "7. Sajikan dengan kerupuk dan acar."
    ],
    "tumis sayur sehat": [
        "Resep Tumis Sayur Sehat:\n" +
        "1. Siapkan sayur seperti kangkung, bayam, atau sawi. Cuci bersih.\n" +
        "2. Panaskan minyak di wajan.\n" +
        "3. Tumis bawang putih hingga harum.\n" +
        "4. Masukkan sayur, aduk rata.\n" +
        "5. Tambahkan sedikit air, garam, dan kaldu bubuk.\n" +
        "6. Masak hingga sayur layu tapi masih segar.\n" +
        "7. Sajikan hangat."
    ],
    "cuci piring capek nih": [
        "Sabar ya, Bu. Setelah ini bisa rebahan! 🛏️",
        "Capek sedikit, tapi hasilnya dapur bersih. Semangat!",
        "Mungkin sambil denger lagu biar gak terasa capeknya?"
    ],
    "ada tips hemat gak?": [
        "Beli barang saat diskon, lumayan hemat Bu! 🛒",
        "Coba cek promo belanja online, sering ada cashback tuh.",
        "Pakai listrik dan air secukupnya, hemat banget!"
    ],
    "siapa pembuatmu?": [
        "Saya dibuat sama Daffa. Orangnya asik banget! 😄",
        "Yang bikin saya Daffa, programmer muda berbakat! 🗿",
        "Ini semua karya Daffa, hebat ya!"
    ],
    "terima kasih": [
        "Sama-sama, Bu. Senang bisa bantu! 😊",
        "Kapan-kapan ngobrol lagi ya, Bu.",
        "Sama-sama! Semoga harimu menyenangkan. 🌞"
    ],
    "lagi ngapain?": [
        "Gak ngapa-ngapain, Bu. Nunggu dipanggil aja. 😁",
        "Saya sih siap bantu kapan aja, Bu.",
        "Lagi santai aja. Ada yang bisa dibantu?"
    ],
    "cuaca gimana?": [
        "Wah, saya gak tahu pasti. Coba lihat jendela ya, Bu.",
        "Mungkin cerah, mungkin hujan. Siapkan payung aja!",
        "Cuaca di hati selalu cerah, Bu! ☀️"
    ],
    "kamu bisa apa?": [
        "Saya bisa bantu ngobrol dan kasih saran, Bu.",
        "Bantu ibu-ibu rumah tangga aja, Bu. 😊",
        "Gak banyak, tapi saya setia bantu kapan aja!"
    ],
    "aku kesel nih": [
        "Kenapa, Bu? Ceritain aja, biar lega!",
        "Sabar ya, Bu. Kalau mau marah, tarik napas dulu.",
        "Kesel wajar, Bu. Tapi jangan terlalu lama, ya."
    ],
    "mau belanja, tapi bingung": [
        "Beli yang perlu-perlu aja, Bu. Jangan kalap!",
        "Catat dulu yang mau dibeli biar gak lupa.",
        "Kalau ada promo, beli yang diskon dulu aja."
    ],
    "gimana caranya hemat listrik?": [
        "Matikan lampu kalau gak perlu, Bu.",
        "Jangan pakai alat listrik bareng-bareng.",
        "Coba set AC di 25 derajat, lebih hemat."
    ],
    "resep masakan simpel?": [
        "Tumis kangkung pake bawang putih aja, simpel banget.",
        "Goreng telur terus kasih kecap, jadi deh!",
        "Masak mie instan terus tambah sayur, Bu."
    ]
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
