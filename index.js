console.log('Hello');

const listField = document.querySelector('#listField');
const submitBtn = document.querySelector('#submitBtn');
const toDosContainer = document.getElementById('toDosContainer');



submitBtn.addEventListener('click', function (){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-style')
    toDosContainer.appendChild(paragraph)
    paragraph.innerText = listField.value;
    listField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function (){
        toDosContainer.removeChild(paragraph);
    })

})
