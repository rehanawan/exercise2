export const getTodos = (dateF) => {
    return fetch('http://localhost:8686/' + dateF)
        .then(resp => {
            if (!resp.ok) {
                return []
            }
            //console.log(resp);
            return resp.json()
        })
};

export const createTodo = (newTodo) => {
    return fetch(`http://localhost:8686/${newTodo.date}/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
        .then(resp => resp.json())
};


export const updateTodo = (todo) => {
    return fetch(`http://localhost:8686/${todo.date}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(resp => resp.json())
};

export const deleteTodo = (todo) => {
    console.log("hey im here ");
    return fetch(`http://localhost:8686/${todo.date}/${todo.id}`, {
        method: 'DELETE',

    })
        .then(resp => resp.json())
};