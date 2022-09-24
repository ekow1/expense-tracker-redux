import { type } from '@testing-library/user-event/dist/type';
import React ,{ useState} from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid";
 import { addExpense } from '../redux/action';
import {addIncome} from '../redux/action'
import {decreaseIncome} from '../redux/action'

function Form({closeModal}) {
    const [openTab, setOpenTab] = useState(1);
    const [title  , setTitle] = useState('');
    const [amount  , setAmount] = useState('');
    const [select  , setSelect] = useState('');
    const [income  , setIncome] = useState(0);

    const dispatch = useDispatch()

     const newIncome= (e) => {
        e.preventDefault();
        dispatch(addIncome(income))
        closeModal(false)
     }

     const updateIncome= (e) => {
        e.preventDefault();
        dispatch(decreaseIncome(income))
        closeModal(false)
     }
    
    const newExpense = (e) => {
        e.preventDefault();

        let expenditure = { id:uuid() , title: title, amount: parseFloat(amount) , date : Date.now() ,type:select}
        console.log(expenditure)
       
       
        if (title.length !== 0 && amount.length !== 0 && type.length !== 0) {
            dispatch(addExpense(expenditure))
        }

        closeModal(false)
        
    }
    
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + "black" 
                      : "text-" +  "-black")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  add expense
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ?"text-white bg-" + "black" 
                      : "text-" +  "-black")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                   update income
                </a>
              </li>
             
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-44 mb-6  rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="relative z-0 mb-4">
                      <input type="text" id="default_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={title} onChange={(e) => setTitle(e.target.value)}/>
                      <label htmlFor="default_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">expense name here...</label>
                  </div>
                  <div className="relative z-0 mb-4">
                      <input type="number" id="default_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={amount} onChange={(e) => setAmount(e.target.value)} />
                      <label htmlFor="default_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">expense amount here ...</label>
                  </div>
                  <select id="countries" className=" border-b border- text-gray-900 text-sm focus:outline-none focus:ring-none focus:border-none  w-3/4 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-transparent dark:focus:border-transparent"  value={select} onChange={(e) => setSelect(e.target.value)}   >
                    <option >Select Category</option>
                    <option >Food</option>
                    <option >Shoe</option>
                    <option >Clothing</option>
                    <option >Fuel</option>
                    <option >Bills</option>
                </select>
                <button
                    className="text-white dark:bg-gray-700 dark:border-gray-600 active:bg-yellow-700 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-4"
                    type="button"
                    onClick={newExpense}
                  >
                    Submit
                  </button>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 
                  <div className="relative z-0 mb-4">
                      <input type="number"   value={income} onChange={e => setIncome(e.target.value)}  id="default_standard" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                      <label htmlFor="default_standard" className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">income amount here ...</label>

                      <div className='container mt-8 flex wrap gap-10 justify-center items-center'>

                      <button
                    className="text-white dark:bg-gray-700 dark:border-gray-600 active:bg-yellow-700 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"

                    onClick={newIncome}
                  
                    
                  >
                    Increase
                  </button>
                      <button
                    className="text-white dark:bg-gray-700 dark:border-gray-600 active:bg-yellow-700 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"

                    onClick={updateIncome}
                  
                    
                  >
                    DECREASE
                  </button>


                      </div>
                     
                  </div>
                   
                
                

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Form