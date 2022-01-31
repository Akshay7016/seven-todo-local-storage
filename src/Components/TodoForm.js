import React, {useState} from "react";

import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button
} from "reactstrap"

import { v4 } from "uuid";

// Methods can also be passed into the props
const TodoForm = ({addTodos}) => {
    const [todoString, setTodoString] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        if(todoString === ""){
            return alert("Please enter a valid todo")
        }

        // const todo = {
        //     title : todoString,
        //     id : v4()
        // }

        const todo = {
            todoString,
            id: v4()
        }

        addTodos(todo);

        setTodoString("")
    }
 return(
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <InputGroup>
                <Input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Enter a Todo"
                    value={todoString}
                    onChange={event => setTodoString(event.target.value)}
                />

                <InputGroupAddon addonType="prepend">
                    <Button color="success">
                        Add Todo
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </FormGroup>
    </Form>
 );   
}

export default TodoForm;