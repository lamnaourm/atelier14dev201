import './App.css';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';
import Operations from './components/Operations';
import StatsTodo from './components/StatsTodo';

function App() {
  return (
    <div className="container">
      <div className='todo'>
        <AddTask />
        <ListTasks />
        <Operations />
        <StatsTodo />
      </div>
    </div>
  );
}

export default App;
