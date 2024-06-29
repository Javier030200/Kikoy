let audio;
let heart = document.getElementById('heart');
let animationInterval;

function startRelaxation(type) {
    if (audio) {
        audio.pause();
        clearInterval(animationInterval); // Detener la animación actual si existe
        heart.style.transform = 'scale(1)'; // Reiniciar el tamaño del corazón
    }

    let body = document.body;

    // Verificar si se está cambiando a una nueva imagen de fondo
    if (type !== 'stop') {
        switch(type) {
            case 'ocean':
                body.style.backgroundImage = "url('ocean.jpg')";
                audio = new Audio('ocean.mp3');
                break;
            case 'rain':
                body.style.backgroundImage = "url('rain.jpg')";
                audio = new Audio('rain.mp3');
                break;
            case 'forest':
                body.style.backgroundImage = "url('forest.jpg')";
                audio = new Audio('forest.mp3');
                break;
        }
        audio.play();
        breathe();
    } else {
        // Detener la música pero mantener la imagen de fondo actual
        if (audio) {
            audio.pause();
        }
        body.style.backgroundImage = currentBackground ? `url('${currentBackground}.jpg')` : '';
    }
}

function breathe() {
    heart.style.transform = 'scale(1.2)';
    animationInterval = setInterval(() => {
        heart.style.transform = 'scale(1)';
        setTimeout(() => {
            heart.style.transform = 'scale(1.2)';
        }, 4000); // Tiempo de exhalar
    }, 8000); // Intervalo de respiración (inhalar + exhalar)
}

function stopRelaxation() {
    clearInterval(animationInterval); // Detener la animación
    heart.style.transform = 'scale(1)'; // Reiniciar tamaño del corazón
    if (audio) {
        audio.pause(); // Detener la música
    }
}
