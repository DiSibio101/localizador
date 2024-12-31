function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('datetime').innerText = now.toLocaleString('es-ES', options);
}

function fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById('location').innerText = `Ubicación: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
        }, () => {
            document.getElementById('location').innerText = 'No se pudo obtener la ubicación.';
        });
    } else {
        document.getElementById('location').innerText = 'Geolocalización no es soportada por este navegador.';
    }
}

setInterval(updateDateTime, 1000);
fetchLocation();
