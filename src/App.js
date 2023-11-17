import './App.css';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';
import Operations from './components/Operations';

function App() {
  return (
    <div className="container">
      <div className='todo'>
        <AddTask />
        <ListTasks />
        <Operations />
      </div>
    </div>
  );
}

export default App;
