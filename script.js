// Mendapatkan referensi elemen HTML
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseMessage = document.getElementById('responseMessage');

// Kumpulan respons untuk tombol "Ya"
const responses = [
    "Yeayy! Aku seneng banget 😍",
    "Kamu membuatku bahagia! 💖",
    "Terima kasih sudah mau jadi pacarku 🥰"
];

// Kumpulan respons untuk tombol "Tidak"
const noResponses = [
    "Ayolah, kita cocok banget 🥺",
    "Pikir-pikir lagi ya 😢",
    "Kamu nanti nyesel lho 😅"
];

// Event listener untuk tombol "Ya"
yesBtn.addEventListener('click', () => {
    // Pilih respons acak
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    responseMessage.textContent = randomResponse;
    
    // Kirim pesan WhatsApp
    const phoneNumber = '6283834773337';
    const message = `Hai sayang, ${randomResponse}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

// Event listener untuk tombol "Tidak"
noBtn.addEventListener('click', () => {
    // Pilih respons menggoda acak
    const randomNoResponse = noResponses[Math.floor(Math.random() * noResponses.length)];
    responseMessage.textContent = randomNoResponse;
    
    // Gerakkan tombol "Tidak" secara acak di layar
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
    noBtn.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
});