import './App.css';
import DashBoardTable from './components/dashboard';
import data from './data/mockData.json'

function DashBoard() {

  return (
    <div className="app-container">
        <h1>Dashboard</h1>
        <DashBoardTable data={data}/>
    </div>
  );
}

export default DashBoard;
