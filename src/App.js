import React, {useState, useEffect} from "react";
import { Container } from "reactstrap";
import './App.css'

import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";


const App = () => {
    const [todos, setTodos] = useState([])

    // useEffect() is used to render some data beforre any other component gets loaded
    useEffect(() => {
        const localTodos = localStorage.getItem("todos");
        console.log({localTodos})

        if(localTodos){
            setTodos(JSON.parse(localTodos))
        }
    } , [])

    const addTodos = async todo => {
        setTodos([...todos, todo])
    }

    // If there is some minor change in "todos" then do all the stuff did in callback
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])

    // Here change in "todos" so above useEffect() will called
    const markComplete = (id) => {
        setTodos(todos.filter((todo) => (todo.id !== id)))
    }


    return(
        <Container fluid>
            <h1>Todo with local Storage</h1>
            <Todos todos={todos} markComplete={markComplete}/>
            <TodoForm addTodos={addTodos}/>
        </Container>
    )
}

export default App;
