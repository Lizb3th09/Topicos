const api = [
    {
        image: {

           uri: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2002&q=80'
        
        },
        title: 'Aplicaciones Moviles',
        description:'El mundo actual gira en torno a las aplicaciones móviles. '
    },
    {
        image: {
            uri: 'https://media.istockphoto.com/id/1500889703/es/foto/inteligencia-artificial-tecnolog%C3%ADa-robot-futurista-ciencia-de-datos-an%C3%A1lisis-de-datos-chatgpt.jpg?s=1024x1024&w=is&k=20&c=s6N9bS76duw1tiybrNO8CJgrLMAYzf37yoll-UmMzgo='
           
        },
        title: 'Inteligencia Artificial',
        description:'La inteligencia artificial es una revolución tecnológica que está transformando el mundo.   '
    },
    {
        image: {
            uri: 'https://media.istockphoto.com/id/1452233668/es/foto/concepto-de-centro-de-big-data-base-de-datos-en-la-nube-central-el%C3%A9ctrica-del-servidor-del.webp?s=2048x2048&w=is&k=20&c=nJQQzFNzySKpKmKwcQM1pIU-7Zq-0KPU3hnWlGcjgfQ='
            
        },
        title: 'Base de datos',
        description:'Las bases de datos son el corazón de la gestión de información en el mundo digital actual.  '
    },
    {
        image: {
            uri: 'https://media.istockphoto.com/id/1173803553/es/foto/desarrollador-de-software-freelancer-que-trabaja-con-c%C3%B3digo-de-programa.webp?s=2048x2048&w=is&k=20&c=QN-BPHs894Y9bAKCBUIZ0bom0JIhh0mlJncC4w61XiU='
           
        },
        title: 'Curso html',
        description:'Entra en el emocionante mundo del diseño web y la creación digital con nuestro curso '
    },
    {
        image: {
            uri: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
            
        },
        title: 'Diseño',
        description:'Desatar tu creatividad y construir sitios web impactantes   '
    }
  
]

const tablaInfo = document.getElementById('tablaInfo');

api.forEach(item => {
    const listaItem = document.createElement('div');
    listaItem.classList.add('item-container');
    listaItem.innerHTML = `
        <img src="${item.image.uri}" alt="${item.image.description}">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
    `;
    tablaInfo.appendChild(listaItem);
});
export { tablaInfo };

