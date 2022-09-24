import React , { useState} from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { updateIncome } from '../redux/action';


function SideBar() {

  
const dispatch = useDispatch()
  const { income , expense} = useSelector((state) => {
    return state;
  });
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(income);

    const editIncome = (e) => {
      e.preventDefault();

      if(amount !== ''){
        dispatch(updateIncome(amount));
      

      }
      setShowModal(false)
      
      setAmount(amount)
      
      


    }
     
    
      const totalExpense = expense.reduce((total , expense) =>{
        return (total += expense.amount)
      }, 0)
   
      const balance = income - totalExpense;
    
   
  return (
   <>
   
<div className="flex flex-col">
  <h2 className="mb-4 text-2xl font-bold text-center">EXPENSE TRACKER</h2>

  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
  

    <div className="flex items-start rounded-xl bg-emerald-600 text-white p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full text-emerald-600 text-2xl border border-orange-100 bg-orange-50">
      <i className='bx bx-money'></i>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Total Income</h2>

        <div className='flex gap-8 cursor-pointer'> 
          
         <p className="mt-2 text-md text-white font-bold">{income}</p>
        <span className='text-md font-bold' >  edit <i className='bx bxs-plus-circle text-xs mt-3'onClick={() => setShowModal(true)} ></i></span>
        
         </div>
       
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-rose-500 text-white p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center text-rose-600 text-2xl  rounded-full border border-orange-100 bg-orange-50">
      <i className='bx bxs-credit-card-alt'></i>
      
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Total Expenditure</h2>
        <p className="mt-2 text-sm text-md font-bold">{totalExpense} </p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-sky-900 text-white p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center text-sky-900 text-2xl rounded-full border border-orange-100 bg-orange-50">
      <i className='bx bxs-wallet'></i>

      
        
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Balance</h2>
        <p className="mt-2 text-sm text-md font-bold">{balance}</p>
      </div>
    </div>
    
    
    
  </div>
</div>

{showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Reset Income</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() =>setShowModal(false)}
                    
                  >
                     <i className="bx bxs-x-circle text-2xl text- bx-tada-hover"></i>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
               

                <input
                      type="number"
                      id="simple-email"
                      className=" flex-1 appearance-none wrap border-b border-sky-900  focus:outline-none focus:ring-0   py-2 px-4  text-sky-900  bg-transparent lg:w-full w-full h-fit mb-4"
                      placeholder="amount here ..."
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />

               

                
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

                  
                 
                  <button
                    className="text-white dark:bg-gray-700 dark:border-gray-600 active:bg-yellow-700 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"

                    onClick={editIncome}
                    
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}




   </>
  )
}

export default SideBar