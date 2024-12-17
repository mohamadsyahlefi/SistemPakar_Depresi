// Mengambil data dari localStorage
const results = JSON.parse(localStorage.getItem('kuisionerResults')) || {};

// Menghitung total nilai
let totalScore = 0;

if (results.answers) {
    results.answers.forEach((answer) => {
        totalScore += answer.value; // Menghitung total nilai
    });
}

// Menampilkan total nilai
const totalDiv = document.getElementById('total-score');
totalDiv.innerText = `Total Nilai: ${totalScore}`;

// Menentukan kondisi akhir
let finalCondition;
if (totalScore < 10) {
    finalCondition = "Tidak Depresi";
} else if (totalScore < 20) {
    finalCondition = "Depresi Ringan";
} else if (totalScore < 30) {
    finalCondition = "Depresi Sedang";
} else {
    finalCondition = "Depresi Berat";
}

// Menampilkan kondisi akhir
const conditionDiv = document.getElementById('final-condition');
conditionDiv.innerText = `Kondisi Depresi Anda: ${finalCondition}`;

// Menangani tombol kembali
document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'questionnaire.html'; // Kembali ke halaman kuisioner
}); 