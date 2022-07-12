const addContent = document.querySelector('.add');
const list = document.querySelector('.todo_s');
const search = document.querySelector('.search input');
const li = document.querySelector('li');

const generateTemplate = task => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="far fa-trash-alt delete"></i>
        
      </li>`;
    list.innerHTML += html;
}
addContent.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = addContent.add.value.trim();
    if (task.length) {
        generateTemplate(task);
        addContent.reset();
    }
});

li.addEventListener('click', e => {
   
})
// list.addEventListener('click' e => {
//     if (e.target.classList.contains('delete')) {
//         !e.target.parentElement.remove();
//     }
// })
