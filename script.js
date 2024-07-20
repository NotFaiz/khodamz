function checkKhodam() {
    const name = document.getElementById('nameInput').value;
    const resultDiv = document.getElementById('result');
    
    const khodamList = [
        "Harimau",
        "Naga",
        "Elang",
        "Mobil Ferrari",
        "Pesawat Jet",
        "Bunga Mawar",
        "Pedang Samurai",
        "Komputer Super",
        "Kucing Persia",
        "Ikan Hiu",
        "Gunung Berapi",
        "Sungai Amazon",
        "Badai Topan",
        "Bintang Jatuh",
        "Robot AI"
    ];

    if (name) {
        const randomKhodam = khodamList[Math.floor(Math.random() * khodamList.length)];
        resultDiv.innerHTML = `Selamat ${name}, Khodam Anda adalah ${randomKhodam}!`;
    } else {
        resultDiv.innerHTML = 'Silakan masukkan nama Anda!';
    }
}
