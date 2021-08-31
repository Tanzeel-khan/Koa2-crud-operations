import * as repo from "../repository/index.js";
export const getTodos = async () =>{
    return repo.readData();
}
export const addTodos = async (data) =>{
    return repo.addTodo(data);
}

export const updatetodo = async (data) =>{
    return repo.updatetodos(data);
}

export const deleteTodo = async (data) =>{
    return repo.deleteTodos(data);
}
