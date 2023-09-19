import './style.css';  // importamos los estilos de css a la main
import Header from './components/Header';   // importamos la clase header 
import Formulario from './components/formulario'; // importamos  la clase formulario

document.body.appendChild(Header({ title: 'Consultorio' }));  // inyectamos al cuerpo de nuestra pagina la clase header un titulo  'llamado consulltorio' y destructuring, para mostrar el elemento titulo

document.body.appendChild(Formulario());   //inyectamos  al cuerpo de la pagina  el formulario donde estara la informacion