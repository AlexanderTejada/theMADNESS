// Función para crear una cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log(`Cookie creada: ${name}=${value}; ${expires}`);
  }
  
  // Función para leer una cookie
  function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        console.log(`Cookie encontrada: ${c}`);
        return c.substring(nameEQ.length, c.length);
      }
    }
    console.log(`Cookie ${name} no encontrada`);
    return null;
  }
  