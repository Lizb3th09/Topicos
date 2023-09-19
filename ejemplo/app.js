
// Seleccionar el botón dentro de un elemento con clase 'button'
const button = document.querySelector('.button button');

// Definir la función de manejo de evento
function handleEvent(e) {
  e.preventDefault(); // Prevenir el comportamiento predeterminado del evento 

  // Obtener el valor ingresado en los campos de nombre y contraseña
  const userName = document.getElementById('name').value;
  const userPass = document.getElementById('pass').value;

  // Seleccionar todos los elementos <p> (párrafos) existentes
  const existingMessages = document.querySelectorAll('p');

  // Remover todos los mensajes existentes
  existingMessages.forEach(message => {
    message.remove();
  });

  // Verificar y mostrar el mensaje apropiado según los valores ingresados
  if (userName === '' || userPass === '') {
    const p1 = document.createElement('p'); // Crear un nuevo elemento <p>
    p1.innerHTML = 'Por favor, completa ambos campos.'; // Establecer el contenido del elemento
    document.body.appendChild(p1); // Agregar el elemento al cuerpo del documento HTML

  } else if (userPass.length < 6) {
    const p1 = document.createElement('p');
    p1.innerHTML = 'La contraseña debe tener al menos 6 caracteres.';
    document.body.appendChild(p1);

  } else {
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.innerHTML = `Nombre de usuario: ${userName}`;
    p2.innerHTML = `Contraseña de usuario: ${userPass}`;
    document.body.appendChild(p1);
    document.body.appendChild(p2);
  }
}

// Agregar el oyente de evento al botón, que ejecutará la función handleEvent cuando se haga clic en el botón
button.addEventListener('click', handleEvent, false);
