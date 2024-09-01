window.addEventListener('load', () => {
    const audio = document.getElementById('welcome-sound');
    audio.play().catch(error => {
      console.log('Error al reproducir el sonido:', error);
    });
  });