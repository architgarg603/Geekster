let addBtn = document.querySelector('.addTodo');
let delBtn = document.querySelector('.removeTodo')
let addTodoPopup = document.querySelector('.addTodoPopup');
let viewTodo = document.querySelector('.viewTodoWrapper');
let cancelAddTodo = document.querySelector('.closeBtn');
let submitAddTodo = document.querySelector('.submitBtn')
let TodoList = document.querySelector('.body')
let addTodoColors = document.querySelectorAll('.color');
let crossBtn = document.querySelector(".viewTodoCross")

let redColor = document.querySelector('.colors .red');
let blueColor = document.querySelector('.colors .blue');
let orangeColor = document.querySelector('.colors .orange');
let pinkColor = document.querySelector('.colors .pink');

addBtn.addEventListener('click', () => {
    addTodoPopup.style.display = 'flex';
})

cancelAddTodo.addEventListener('click', () => {
    addTodoPopup.style.display = 'none'
})

// remove selected class from each color
// add selected class on clicked color

redColor.addEventListener('click', ()=>{

    redColor.classList.remove('selected');
    blueColor.classList.remove('selected')
    pinkColor.classList.remove('selected')
    orangeColor.classList.remove('selected')
    
    redColor.classList.add('selected');

})
orangeColor.addEventListener('click', ()=>{

    redColor.classList.remove('selected');
    blueColor.classList.remove('selected')
    pinkColor.classList.remove('selected')
    orangeColor.classList.remove('selected')
    
    orangeColor.classList.add('selected');

})
pinkColor.addEventListener('click', ()=>{

    redColor.classList.remove('selected');
    blueColor.classList.remove('selected')
    pinkColor.classList.remove('selected')
    orangeColor.classList.remove('selected')
    
    pinkColor.classList.add('selected');

})
blueColor.addEventListener('click', ()=>{

    redColor.classList.remove('selected');
    blueColor.classList.remove('selected')
    pinkColor.classList.remove('selected')
    orangeColor.classList.remove('selected')
    
    blueColor.classList.add('selected');

})



submitAddTodo.addEventListener('click', () => {
    let heading = document.querySelector('.todoHead');
    let body = document.querySelector('.todoBody');
    let headingVal = heading.value
    let bodyVal = body.value
    if (heading.value == '' || body.value == '') {
        alert('All Feilds are Required');
        return
    }


    let color = 'red';

    if(redColor.classList.contains('selected')){
        color = 'red';
    }else if(blueColor.classList.contains('selected')){
        color = 'blue'
    }else if(pinkColor.classList.contains('selected')){
        color = 'pink';
    }else{
        color = 'orange'
    }


    let todo = document.createElement('div');
    todo.classList.add('todo');
    todo.classList.add(color);

    todo.addEventListener('click',()=>{
        viewTodo.style.display = 'flex';
        let viewHead = document.querySelector('.viewTodoHeader');
        let viewBody = document.querySelector('.vewTodoBody');
        viewHead.innerText = headingVal;
        viewBody.innerText = bodyVal;


    })


    todo.innerText = heading.value;
    TodoList.appendChild(todo);
    addTodoPopup.style.display = 'none';

    heading.value = ''
    body.value = ''
   
    


})

crossBtn.addEventListener('click', ()=>{
    viewTodo.style.display = 'none'
})