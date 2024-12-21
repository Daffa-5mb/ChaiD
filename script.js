const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

const responses = {
    "halo": [
        "Halo, Bu! Gimana hari ini?",
        "Halo, ada yang bisa saya bantu? 😊",
        "Hai! Lagi masak apa nih? 🧑‍🍳"
    ],
    "saya sakit":[
        "Istirahat aja dulu bu, kalo dibiarin takutnya malah nambah parah, semoga cepat sembuh ya bu!"
    ],
    "saya sehat": [
        "Alhamdulillah, ada yang bisa dibantu bu?"
    ],
    "saya baik":[
        "Alhamdulillah, ada yang bisa dibantu bu?"
    ],
    "apa menu hari ini?": [
        "Coba bikin nasi goreng spesial, pasti enak!",
        "Kalau bingung, masak mie instan aja, Bu. Simpel tapi nikmat! 🍜",
        "Saran saya sih bikin tumis sayur sehat, Bu!"
    ],
    "nasi goreng spesial": [
        "Resep Nasi Goreng Spesial:\n" +
        "Bahan-bahan:\n" +
        "1 buah paha ayam atas bawah rebus, suwir ayamnya\n" +
        "2 buah telur, kocok lepas\n" +
        "150 g udang tanpa kulit\n" +
        "5 buah bakso sapi, potong-potong\n" +
        "5 buah bakso ikan, potong-potong\n" +
        "500 g nasi putih\n" +
        "2 sdm kecap manis\n" +
        "1 sdt garam\n" +
        "1/2 sdt gula pasir\n" +
        "1 buah daun bawang, iris tipis\n" +
        "1/2 sdm bawang goreng untuk taburan\n" +
        "3 sdm minyak goreng untuk menumis\n" +
        "Bumbu Tumbuk Kasar:\n" +
        "1 sdt terasi, bakar\n" +
        "3 buah cabai merah besar\n" +
        "3 buah cabai merah keriting\n" +
        "2 siung bawang putih\n" +
        "Bahan Pelegkap:\n" +
        "3 buah telur ceplook\n" +
        "Cara memasak:\n" +
        "1. Panaskan minyak. Tumis bumbu tumbuk kasar sampai harum. Sisihkan di pinggir wajan. Masukkan telur. Aduk sampai berbutir.\n" +
        "2. Tambahkan ayam, udang, bakso. Aduk rata. Tambahkan nasi putih. Aduk- aduk. Masukkan KECAP MANIS BANGO, garam, dan gula pasir. Aduk sampai matang.\n" +
        "3. Masukkan daun bawang. Aduk rata. Sajikan bersama telur ceplok dan taburan bawang merah goreng.\n" +
        "Selamat menikmati 😋"
    ],
    "tumis sayur sehat": [
        "Resep Tumis Sayur Sehat:\n" +
        "Bahan-bahan:\n" +
        "3 lonjor kacang panjang, potong².\n" +
        "1 bh wortel, iris.\n" +
        "8 lbr sawi hijau, potong².\n" +
        "4 ekor cumi, potong².\n" +
        "Secukupnya garam.\n" +
        "Secukupnya kaldu jamur.\n" +
        "1 sdm tepung maizena + 2 sdm air.\n" +
        "3 sdm minyak goreng.\n" +
        "Bumbu halus:\n" +
        "2 siung bawang putih ukuran besar.\n" +
        "1/4 sdt merica bubuk.\n" +
        "Cara membuat:\n" +
        "1. Siapkan bahan sayuran. Cuci bersih cumi.\n" +
        "2. Panaskan minyak, tumis bumbu halus hg wangi. Masukan cumi, aduk². Masukan wortel dan kacang panjang, masak hingga separo matang.\n" +
        "3. Masukan sawi, beri garam dan kaldu jamur, aduk² hg tercampur rata dan sayuran matang. Angkat, sajikan.\n" +
        "Selamat menikmati 😉"
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
        "Saya dibuat sama Daffa. Orangnya asik banget... yah, kadang 🗿",
        "Yang bikin saya Daffa, bergadang mulu cuma buat bikin saya 🗿",
        "Ini semua karya Daffa"
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
        "Bantu jawab pertanyaan aja, Bu. 😊",
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

function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim(); // Hilangkan spasi di awal/akhir
    if (userMessage) {
        chatbox.innerHTML += `<div class="user-message"><strong>Anda:</strong> <span class="message">${sanitizeHTML(userMessage)}</span></div>`;
        userInput.value = '';
        
        // Menentukan respons AI berdasarkan input pengguna
        const aiResponse = findBestMatch(userMessage);

        setTimeout(() => {
            chatbox.innerHTML += `<div class="ai-message"><strong>AI:</strong> <span class="message">${sanitizeHTML(aiResponse)}</span></div>`;
            chatbox.scrollTop = chatbox.scrollHeight; // Scroll ke bawah
        }, 1000);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
