// Ini File Javascript

// untuk menghitung BMI
function hitungBMI() {
    var inputBeratBadan = document.getElementById('berat-badan-input').value;
    var inputUsia = document.getElementById('usia-input').value;
    var inputTinggiBadan = document.getElementById('tinggi-badan-input').value;

    // untuk menunjukkan bahwa input berhasil masuk ke dalam console
    console.log('Berat Badan:' + inputBeratBadan);
    console.log('Usia:' + inputUsia);
    console.log('Tinggi Badan:' + inputTinggiBadan);

    // jika input kosong
    if (inputBeratBadan == '' || inputUsia == '' || inputTinggiBadan == '') {
        alert('Semua kolom wajib diisi.')
    // jika input tidak valid
    } else if (inputBeratBadan<=0 || inputUsia <=0 || inputTinggiBadan <=0) {
        alert('Harap masukkan data yang valid.');
    // jika semua input valid
    } else
        // rumus hitung BMI
        inputTinggiBadan = inputTinggiBadan / 100
        updateResult(((inputBeratBadan)/(inputTinggiBadan * inputTinggiBadan)).toFixed(1));
}

// update semua hasil kalkulasi BMI dan teks deskripsi dibawahnya
function updateResult(bmi) {
    document.getElementById('result-calculation').innerHTML = bmi;
    updateInfo(bmi);
    updateDesc(bmi);
    updateAddDesc(bmi);
}

// ambil value dari hasil kalkulasi BMI untuk ubah info di bawahnya
function updateInfo(bmi) {
    const info = document.querySelector('#info-result');
    if (bmi<18.5) {
        info.textContent = "Anda Kekurangan Berat Badan";
    } else if (18.5<=bmi && bmi<=24.9) {
        info.textContent = "Anda Normal (Ideal)";
    } else if (24.9<=bmi && bmi<=29.9) {
        info.textContent = "Anda Kelebihan Berat Badan";
    } else if (bmi>=30.0) {
        info.textContent = "Anda Kegemukan (Obesitas)";
    }
}

// ubah teks deskripsi di bawahnya
function updateDesc(bmi) {
    const desc = document.querySelector('#result-desc');
    if (bmi<18.5) {
        desc.textContent = "Hasil BMI kurang dari 18.5";
    } else if (18.5<=bmi && bmi<=24.9) {
        desc.textContent = "Hasil BMI di antara 18.5 dan 24.9";
    } else if (24.9<=bmi && bmi<=29.9) {
        desc.textContent = "Hasil BMI di antara 24.9 dan 29.9";
    } else if (bmi>=30.0) {
        desc.textContent = "Hasil BMI lebih dari 30.0";
    }
}

// ubah teks deskripsi tambahan di bawahnya
function updateAddDesc(bmi) {
    const addDesc = document.querySelector('#add-desc')
    if (bmi<18.5) {
        addDesc.textContent = "Anda berada dalam kategori underweight atau berat badan kurang.";
    } else if (18.5<=bmi && bmi<=24.9) {
        addDesc.textContent = "Anda berada dalam kategori normal atau berat badan ideal.";
    } else if (24.9<=bmi && bmi<=29.9) {
        addDesc.textContent = "Anda berada dalam kategori overweight atau berat badan berlebih.";
    } else if (bmi>=30.0) {
        addDesc.textContent = "Anda berada dalam kategori obesitas atau sangat kelebihan berat badan.";
    }
}

// konfirmasi klik button lain-lainnya
function clickConfirm() {
    console.log('Sudah diklik.');
    alert('Anda akan segera diarahkan ke halaman lain.');
}