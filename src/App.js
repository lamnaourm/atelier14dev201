import './App.css';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';

function App() {
  return (
    <div className="container">
      <div className='todo'>
        <AddTask />
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
