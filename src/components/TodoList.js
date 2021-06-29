import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);


  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
     const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

// გეგმის ჩაწერის შემთხვევაშუ მაუსის მიტანისას შეგვუიძლია გავთიშოთ ჩვენი შესრულებული გეგმა

    const completeTodo = id => {
     let updatedTodos = todos.map(todo => {
       if (todo.id === id) {
         todo.isComplete = !todo.isComplete;
       }
       return todo;
     });
    setTodos(updatedTodos);
   };

// გვიბრუნებს HTMLფაილს 

  return (
    <>
      <h1>დაწერე შენი გეგმები</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
         completeTodo={completeTodo}
      
      />
    </>
  );
}

export default TodoList;