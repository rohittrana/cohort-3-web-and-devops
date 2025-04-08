import './App.css'
import Todos from './Components/Todos'

function App() {
  const todoItem = {
    title: "Learn React",
    description: "Understand components and props",
    done: false
  };

  return (
    <>
      <Todos todo={todoItem} />
    </>
  );
}

export default App;
