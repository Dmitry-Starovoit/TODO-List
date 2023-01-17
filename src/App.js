import logo from './assets/logo.png';
import './App.css';
import List from './Components/List/List';

function App() {

  let task1 = [
    {id:1, name: "HTML", isDone: true},
    {id:2, name: "CSS", isDone: true},
    {id:3, name: "JavaScript", isDone: false}
  ]

  let task2 = [
    {id:1, name: "Великий Гетсбі", isDone: true},
    {id:2, name: "Соловей", isDone: false},
    {id:3, name: "Думай та багатій", isDone: false}
  ]

  let task3 = [
    {id:1, name: "Венсдей", isDone: true},
    {id:2, name: "Король Талси", isDone: false},
    {id:3, name: "Кістки", isDone: true}
  ]

  return (
    <div className="App">
      <div style={{backgroundImage: `url("./assets/bg.png")`}}></div>
        <div className="content">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="lists">
            <List title="Мови програмування" task={task1} />
            <List title="Список книг" task={task2} />
            <List title="Список серіалів" task={task3} />
            
          </div>
        </div>
    </div>
  );
}

export default App;
