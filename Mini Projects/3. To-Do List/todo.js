let todolist = [
    {
        item: 'buymilk',
        dueDate: '4/10/2023'
    },
    {
        item: 'Brady choco',
        dueDate: '4/10/2023'
    }
];

displayItems();


function addTodo() {
    let inputElement = document.querySelector('.todo-input');
    let dateElement = document.querySelector('.todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    // console.log(todoItem);
    todolist.push(
        {
            item: todoItem,
            dueDate: todoDate
        }
    );
    inputElement.value = ''
    dateElement.value = ''
    displayItems();
}

function displayItems() {
    let containerElements = document.querySelector('.todo-container');

    let newHtml = ''


    for (let i = 0; i < todolist.length; i++) {

        let item = todolist[i].item;
        let dueDate = todolist[i].dueDate;
        newHtml += `
        
            <span>${item}</span>
            <span>${dueDate}</span>
            <button onclick="todolist.splice(${i}, 1); 
            displayItems();" class="btn-delete">Delete</button>
         
        `;

    }
    containerElements.innerHTML = newHtml;
}