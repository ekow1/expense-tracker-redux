import "boxicons/css/boxicons.min.css";
import './App.css';
import SideBar from './components/SideBar';
import Transaction from './components/Transaction';
import Header from './components/Header'
import {useSelector} from 'react-redux'
import Empty from "./components/Empty";


function App() {

  const { expense ,query} = useSelector((state) => {
    return state;
  });

  const filterExpense = expense.filter((note) =>
  note.title.toLowerCase().includes(query.toLowerCase()) 
);

  return (
    <div className=" container w-11/12 mx-auto h-full px-6 py-4 mt-5   grid grid-cols-1 place-items-center gap-10 px-5">
      <div className=''>

      <SideBar />

      

      </div>
      <div className=''>

      <Header />
      

      </div>
      <div className='w-fit '>
       {filterExpense.length ?  <Transaction filter={filterExpense} /> : <Empty />}
     

      </div>
  
     
    </div>
  );
}

export default App;
