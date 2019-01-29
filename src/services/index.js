export const getTodos = () => {
    return fetch('http://localhost:8686/todos')
        .then(resp => resp.json())
}

export const createTodo = (newTodo) => {
    return fetch('http://localhost:8686/todos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
    .then(resp => resp.json())
}

export const updateTodo = (todo) => {
    return fetch(`http://localhost:8686/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(resp => resp.json())
}