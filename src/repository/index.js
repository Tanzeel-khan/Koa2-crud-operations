let data = [
    {"id":1,"name":'John'},
    {"id":2,"name":'Tanzeel'},
    {"id":3,"name":'Haroon'}
]
export const readData = () =>{

    return data;

}

export const addTodo = (todoData) =>{

    data.push(todoData);

}

export const updatetodos = (updateData) =>{
    const index = data.findIndex((e) => e.id === updateData.id);
    let message ;
    if(index === -1){
        data.push(updateData);
        message = 'data added'
    }
    else{
        data[index] = updateData;
        message = 'data updated'
    }
    return message;
}

export const deleteTodos = (deleteData) =>{
    const index = data.findIndex((e) => e.id === deleteData.id);
    let message ;
    if(index === -1){
        message = 'data not found'
    }
    else{
        // delete data[index] 
        data.splice(index,deleteData.id)
        message = 'data deleted'
    }
    return message;
}