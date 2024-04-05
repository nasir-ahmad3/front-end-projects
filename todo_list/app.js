
let todoList = [
    {title: 'hello world!1', id:1},
    {title: 'hello world!2', id:2},
    {title: 'hello world!3', id:3},
    {title: 'hello world!4', id:4},
    {title: 'hello world!5', id:5},
    {title: 'hello world!6', id:6},
]
const deleteIcon = '<span id="deletebtns"><svg fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Uploaded to svgrepo.com"  viewBox="0 0 32 32" xml:space="preserve"><g><g><path class="open_een" d="M11.5,27c-0.276,0-0.5-0.224-0.5-0.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15    C12,26.776,11.776,27,11.5,27z"/><path class="open_een" d="M14.5,27c-0.276,0-0.5-0.224-0.5-0.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15    C15,26.776,14.776,27,14.5,27z"/><path class="open_een" d="M17.5,27c-0.276,0-0.5-0.224-0.5-0.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15    C18,26.776,17.776,27,17.5,27z"/><path class="open_een" d="M20.5,27c-0.276,0-0.5-0.224-0.5-0.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15    C21,26.776,20.776,27,20.5,27z"/><path class="open_een" d="M22.5,30h-13C8.673,30,8,29.327,8,28.5v-17C8,11.224,8.224,11,8.5,11S9,11.224,9,11.5v17    C9,28.775,9.225,29,9.5,29h13c0.275,0,0.5-0.225,0.5-0.5v-19C23,9.225,22.775,9,22.5,9H7C5.897,9,5,8.103,5,7s0.897-2,2-2h6.5    C13.775,5,14,4.775,14,4.5V4c0-1.103,0.897-2,2-2s2,0.897,2,2v0.5C18,4.775,18.225,5,18.5,5H25c1.103,0,2,0.897,2,2    c0,0.276-0.224,0.5-0.5,0.5S26,7.276,26,7c0-0.552-0.448-1-1-1h-6.5C17.673,6,17,5.327,17,4.5V4c0-0.552-0.448-1-1-1s-1,0.448-1,1    v0.5C15,5.327,14.327,6,13.5,6H7C6.448,6,6,6.448,6,7s0.448,1,1,1h15.5C23.327,8,24,8.673,24,9.5v19C24,29.327,23.327,30,22.5,30z    "/></g><g><path class="open_een" d="M11.5,27c-0.276,0-0.5-0.224-0.5-0.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15    C12,26.776,11.776,27,11.5,27z"/><path class="open_een" d="M14.5,27c-0.276,0-0.5-0.224-0.5-0.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15    C15,26.776,14.776,27,14.5,27z"/><path class="open_een" d="M17.5,27c-0.276,0-0.5-0.224-0.5-0.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15    C18,26.776,17.776,27,17.5,27z"/><path class="open_een" d="M20.5,27c-0.276,0-0.5-0.224-0.5-0.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15    C21,26.776,20.776,27,20.5,27z"/><path class="open_een" d="M22.5,30h-13C8.673,30,8,29.327,8,28.5v-17C8,11.224,8.224,11,8.5,11S9,11.224,9,11.5v17    C9,28.775,9.225,29,9.5,29h13c0.275,0,0.5-0.225,0.5-0.5v-19C23,9.225,22.775,9,22.5,9H7C5.897,9,5,8.103,5,7s0.897-2,2-2h6.5    C13.775,5,14,4.775,14,4.5V4c0-1.103,0.897-2,2-2s2,0.897,2,2v0.5C18,4.775,18.225,5,18.5,5H25c1.103,0,2,0.897,2,2    c0,0.276-0.224,0.5-0.5,0.5S26,7.276,26,7c0-0.552-0.448-1-1-1h-6.5C17.673,6,17,5.327,17,4.5V4c0-0.552-0.448-1-1-1s-1,0.448-1,1    v0.5C15,5.327,14.327,6,13.5,6H7C6.448,6,6,6.448,6,7s0.448,1,1,1h15.5C23.327,8,24,8.673,24,9.5v19C24,29.327,23.327,30,22.5,30z    "/></g></g></svg></span>'
const wrapper = document.querySelector('.todo-list')
const addBtn = document.querySelector('body > div > form > button')
const value = document.querySelector('body > div > form > input[type=text]')

if (localStorage.getItem('todolist')){
    mylist = JSON.parse(localStorage.getItem('todolist'))
}else{
    localStorage.setItem('todolist', JSON.stringify(todoList))
    mylist = JSON.parse(localStorage.getItem('todolist'))
}


function showTodo(){
    wrapper.textContent = ''
    if (mylist.length > 0){
        mylist.forEach(todo => {
            let div = document.createElement('div')
            div.setAttribute('id', todo.id)
            div.classList.add('todo')
            
            let text = document.createElement('div')
            text.classList.add('text')
            text.textContent = todo.title
            text.classList.add('deletebtns')
            
            let deleteBtn = document.createElement('span')
            deleteBtn.innerHTML = deleteIcon
            
            div.appendChild(text)
            div.appendChild(deleteBtn)
            wrapper.appendChild(div)
        })
    }else{
        let error = document.createElement('div')
        error.classList.add('error')
        error.textContent = 'noting to do !'
        
        wrapper.appendChild(error)
    }
}

function addTodo(){
    if (value.value){
        let uniqueNumber = Math.floor(Date.now() + Math.random())
        mylist.push({title: value.value, id: uniqueNumber})
        localStorage.setItem('todolist', JSON.stringify(mylist))
        showTodo()
        deleteTodo()
        value.value = ''
    }
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    addTodo()
})
showTodo()

function deleteTodo(){
    let deleteBtns = document.querySelectorAll('#deletebtns')
    Array.from(deleteBtns).forEach(btn => {
        btn.addEventListener('click', e => {
            mylist = mylist.filter(todo => todo.id !== parseInt(btn.parentElement.parentElement.id))
            localStorage.setItem('todolist', JSON.stringify(mylist))
            showTodo()
            deleteTodo()
        })
    })
}
deleteTodo()