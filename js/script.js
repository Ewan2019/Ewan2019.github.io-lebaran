window.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        var currentDate = new Date();
        var targetDate = new Date('2024-04-10'); // Tanggal Hari Raya Lebaran (YYYY-MM-DD)
        var timeDiff = targetDate.getTime() - currentDate.getTime();

        if (timeDiff > 0) {
            var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            countdownElement.innerHTML = 'hitung mundur menuju Hari Raya Lebaran: ' + days + ' hari, ' + hours + ' jam, ' + minutes + ' menit, ' + seconds + ' detik';
        } else {
            timeDiff = currentDate.getTime() - targetDate.getTime();

            var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            countdownElement.innerHTML = 'Selamat Hari Raya Lebaran!' + '<br>Waktu sejak Hari Raya Lebaran: ' + days + ' hari, ' + hours + ' jam, ' + minutes + ' menit, ' + seconds + ' detik';
        }
    }

    setInterval(updateCountdown, 1000);
});