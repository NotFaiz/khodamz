function checkKhodam() {
    const name = document.getElementById('nameInput').value;
    const resultDiv = document.getElementById('result');
    const khodams = [
        'Jet Tempur F-22 Raptor',
        'Ferrari SF-23',
        'Red Bull RB19',
        'AlphaTauri AT04',
        'Unicorn Terbang',
        'Space Shuttle Atlantis',
        'Thunderbolt 3000',
        'Robot Hamster Raksasa',
        'Mesin Loncat Kuantum',
        'SpaceX Starship',
        'Jet Tak Terlihat',
        'Aston Martin DBX',
        'Penguin Skydiving',
        'Pesawat Pizza Keju',
        'Roket Jetpack',
        'Mobil Sonic The Hedgehog',
        'Transformer Bumblebee',
        'Drone Balap Cyclone',
        'Titanic II',
        'Rover Mars Explorer',
        'Motor Ninja',
        'Pedang Pemotong Laser',
        'Hoverboard X500',
        'Mesin Waktu',
        'Hovercraft Naga',
        'X-Wing Starfighter',
        'Karpet Terbang Ajaib',
        'Kapal Luar Angkasa Intergalaksi',
        'Harimau Bionik',
        'Rollercoaster Kosmik',
        'Skateboard Berdaya Jet',
        'Kapal Selam Balap',
        'Mobil Terbang Listrik',
        'Drone Helikopter',
        'Juara Gulat Lengan Robotik',
        'Motor Cyberpunk',
        'Perangkat Teleportasi',
        'Kapal Angkasa Piramida Kuno',
        'Kereta AI-Powered',
        'Mobil Holografik',
        'Rover Bulan',
        'Sepeda Luar Angkasa Galaksi'
    ];

    if (name) {
        const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
        resultDiv.innerHTML = `Selamat ${name}, Khodam Anda adalah ${randomKhodam}!`;
    } else {
        resultDiv.innerHTML = 'Silakan masukkan nama Anda!';
    }
}
