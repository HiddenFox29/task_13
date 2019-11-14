document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').onclick = function () {
        let inpValue = document.getElementById('inp').value;
        let date = new Date(inpValue);
        let dateDay = date.getDay();
        switch (dateDay) {
            case 0:
                alert('Воскресение')
                break;
            case 1:
                alert('Понедельник')
                break;
            case 2:
                alert('Вторник')
                break;
            case 3:
                alert('Среда')
                break;
            case 4:
                alert('Четверг')
                break;
            case 5:
                alert('Пятница')
                break;
            case 6:
                alert('Суббота')
                break;

            default:
                alert('Упс...')
                break;
        };
    };

    function displayWatch() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
        // setInterval(displayWatch(), 1000);
    };
    setInterval(displayWatch, 1000); // Важно!!! функция указывается без скобок
    // displayWatch();
});