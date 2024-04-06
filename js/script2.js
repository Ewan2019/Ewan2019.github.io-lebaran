window.addEventListener('DOMContentLoaded', function() {
    var datetimeElement = document.getElementById('datetime');

    function updateDateTime() {
        var currentDateTime = new Date();
        var day = currentDateTime.toLocaleDateString('en-US', { weekday: 'long' });
        var date = currentDateTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        var time = currentDateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });

        datetimeElement.innerHTML = 'Hari/tanggal: ' + day  + '/' + date + '<br>Jam: ' + time + ' ' + 'WIB';
    }

    setInterval(updateDateTime, 1000);
});