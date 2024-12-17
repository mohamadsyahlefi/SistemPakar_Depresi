// Mengimpor gejala dan cf_user dari analisa.js
import { gejala, cf_user } from './analisa.js';

// Fungsi untuk memuat pertanyaan dari analisa.js
function loadQuestions() {
    const questionsContainer = document.getElementById('questions');

    // Pastikan gejala tidak kosong
    if (gejala.length === 0) {
        console.error("Data gejala tidak ditemukan.");
        return;
    }

    gejala.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionLabel = document.createElement('label');
        questionLabel.innerText = `${index + 1}. ${item.gejala}`;
        questionDiv.appendChild(questionLabel);

        const select = document.createElement('select');
        select.setAttribute('data-kode', item.kode_gejala);
        cf_user.forEach(cf => {
            const option = document.createElement('option');
            option.value = cf.nilai;
            option.innerText = cf.kondisi;
            select.appendChild(option);
        });
        questionDiv.appendChild(select);
        questionsContainer.appendChild(questionDiv);
    });
}

// Menangani pengiriman formulir
document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let totalScore = 0;
    const answers = [];

    // Mengumpulkan nilai dari setiap pertanyaan
    const questionElements = document.querySelectorAll('.question select');
    questionElements.forEach((select, index) => {
        const value = parseFloat(select.value);
        totalScore += value;
        answers.push({
            question: gejala[index].gejala,
            value: value
        });
    });

    // Menyimpan hasil ke localStorage
    localStorage.setItem('kuisionerResults', JSON.stringify({ answers: answers }));

    // Arahkan ke halaman hasil
    window.location.href = 'hasil.html';
});

// Memanggil fungsi untuk memuat pertanyaan saat halaman dimuat
loadQuestions();