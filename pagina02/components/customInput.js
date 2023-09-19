export default function customInput({ titleLable, placeholderLabel }) {
 
    const div = document.createElement('div');
    //const button=document.createElement('button');
    div.classList = 'grupo';
    div.innerHTML = `
          <label>${titleLable}</label>
          <input placeholder='${placeholderLabel}' /> 
          `;
    return div ;
  }