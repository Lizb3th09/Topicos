export default function Header(obj){
    const { title: titulo, subtitle: subtitulo } = obj;
    const header = document.createElement('header');
    header.classList = 'header';
    header.innerHTML = `
        <h1 class='header-title'>${titulo}</h1>
        <h3 class='header-subtitle'>${subtitulo}</h3>
    `;
    return header;
}