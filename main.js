window.addEventListener('load',() =>{
    const form = document.querySelector('#to-do-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const task = input.value;
        if (!task){
            alert("please Fill out task")
        }

        const task_el =document.createElement("div");
        task_el.classList.add("task");
        
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content")
        task_content_el.innerText= task;
        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el);

    })
})
