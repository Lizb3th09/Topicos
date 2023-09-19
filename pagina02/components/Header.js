export default function Header({ title }) {       // exportamos la funcion header dentro colocamos el  elemento  title
    const header = document.createElement('header'); // declaramos  header donde crearemos a header ,que sera nuestra clase lista
    header.classList = 'header';  // 
    header.innerHTML = ` 
          <h1 class='header-title'>${title}</h1> 
          
      `;
    return header;
  }