import Constants from "Constants"

export {
    AddToDoAction,
    EditToDoAction
}


function AddToDoAction(todo) {
    return dispatch => {
        let TODO_STORAGE = localStorage.getItem("TODO_STORAGE") === null ?
            [] : JSON.parse(localStorage.getItem("TODO_STORAGE"));

        TODO_STORAGE.push(todo);
        localStorage.setItem("TODO_STORAGE", JSON.stringify(TODO_STORAGE));

        dispatch({
            type: Constants.ADD_TODO,
            payload: todo,
        })
    }
}


function EditToDoAction(todos) {
    localStorage.setItem("TODO_STORAGE", JSON.stringify(todos));

    return dispatch => {

        dispatch({
            type: Constants.EDIT_TODO,
            payload: todos,
        })
    }
}