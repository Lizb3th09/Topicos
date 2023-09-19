import customInput from "./customInput";
export default function Formulario() {
  const form = document.createElement('form');
  form.classList = 'formulario';

  const inputs = [
    {
      titleLable: 'Nombre ',
      placeholderLabel: ' Nombre ',
    },
    {
      titleLable: 'Teléfono ',
      placeholderLabel: 'Teléfono',
    },
    {
      titleLable: 'Correo ',
      placeholderLabel: 'Correo ',
    },
    
  ];
 
 


  inputs.forEach((input) => {
    form.appendChild(customInput(input));
  });

  // creamos boton
  
  const button = document.createElement('button')
  button.classList = 'send-button'
  button.textContent = 'Enviar'
  form.appendChild(button);

  button.addEventListener('click',()=>{
    console.log('hizo click');
  });


  
  return form ;
}


