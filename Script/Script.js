

function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function showTab2(tabId2) {
    document.querySelectorAll('.tab2').forEach(tab2 => tab2.classList.remove('active2'));
    document.querySelectorAll('.tab-content2').forEach(content2 => content2.classList.remove('active2'));

    document.querySelector(`[onclick="showTab2('${tabId2}')"]`).classList.add('active2');
    document.getElementById(tabId2).classList.add('active2');
}


let stream;

        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('cuadro').addEventListener('click', function() {
                // Verifica que el navegador soporta la API de MediaDevices
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    // Solicita acceso a la cámara web
                    navigator.mediaDevices.getUserMedia({ video: true })
                        .then(function(mediaStream) {
                            stream = mediaStream;
                            // Obtiene el elemento de video
                            var video = document.getElementById('video');
                            // Enlaza la transmisión de video al elemento de video
                            video.srcObject = stream;
                            video.play();
                        })
                        .catch(function(error) {
                            console.log("Error al acceder a la cámara web: ", error);
                        });
                } else {
                    console.log("La API de MediaDevices no es soportada por este navegador.");
                }
            });

            document.getElementById('stopButton').addEventListener('click', function() {
                if (stream) {
                    // Detiene cada track de la transmisión
                    stream.getTracks().forEach(track => track.stop());
                    // Detiene la reproducción del video
                    var video = document.getElementById('video');
                    video.srcObject = null;
                }
            });
        });


let stream2;
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cuadro-audio').addEventListener('click', function() {
        // Verifica que el navegador soporta la API de MediaDevices
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Solicita acceso al micrófono
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(function(mediaStream2) {
                    stream2 = mediaStream2;
                    // Obtiene el elemento de audio
                    var audio = document.getElementById('audio');
                    // Enlaza la transmisión de audio al elemento de audio
                    audio.srcObject = stream2;
                    audio.play();
                })
                .catch(function(error) {
                    console.log("Error al acceder al micrófono: ", error);
                });
        } else {
            console.log("La API de MediaDevices no es soportada por este navegador.");
        }
    });
    document.getElementById('micStopButton').addEventListener('click', function() {
        if (stream2) {
            // Detiene cada track de la transmisión
            stream2.getTracks().forEach(track => track.stop());
            // Detiene la reproducción del audio
            var audio = document.getElementById('audio');
            audio.srcObject = null;
        }
    });
});
