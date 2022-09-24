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
          
        <div className='flex gap-3'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V66.7C101.2 81.9 32 160.9 32 256s69.2 174.1 160 189.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V445.3c30.9-5.2 59.2-17.7 83.2-35.8c14.1-10.6 17-30.7 6.4-44.8s-30.7-17-44.8-6.4c-13.2 9.9-28.3 17.3-44.8 21.6V132c16.4 4.2 31.6 11.6 44.8 21.6c14.1 10.6 34.2 7.8 44.8-6.4s7.8-34.2-6.4-44.8c-24-18-52.4-30.6-83.2-35.8V32zM192 132V380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124z"/></svg>
        <p className="mt-2 text-sm text-md font-bold ">
        
        {income}
          </p></div>
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
        <div className='flex gap-3 text-whte' > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V66.7C101.2 81.9 32 160.9 32 256s69.2 174.1 160 189.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V445.3c30.9-5.2 59.2-17.7 83.2-35.8c14.1-10.6 17-30.7 6.4-44.8s-30.7-17-44.8-6.4c-13.2 9.9-28.3 17.3-44.8 21.6V132c16.4 4.2 31.6 11.6 44.8 21.6c14.1 10.6 34.2 7.8 44.8-6.4s7.8-34.2-6.4-44.8c-24-18-52.4-30.6-83.2-35.8V32zM192 132V380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124z"/></svg>
        <p className="mt-2 text-sm text-md font-bold ">
        
        {totalExpense}
          </p></div>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-sky-900 text-white p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center text-sky-900 text-2xl rounded-full border border-orange-100 bg-orange-50">
      <i className='bx bxs-wallet'></i>

      
        
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Balance</h2>

        <div className='flex gap-3'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V66.7C101.2 81.9 32 160.9 32 256s69.2 174.1 160 189.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V445.3c30.9-5.2 59.2-17.7 83.2-35.8c14.1-10.6 17-30.7 6.4-44.8s-30.7-17-44.8-6.4c-13.2 9.9-28.3 17.3-44.8 21.6V132c16.4 4.2 31.6 11.6 44.8 21.6c14.1 10.6 34.2 7.8 44.8-6.4s7.8-34.2-6.4-44.8c-24-18-52.4-30.6-83.2-35.8V32zM192 132V380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124z"/></svg>
        <p className="mt-2 text-sm text-md font-bold ">
        
        {balance}
          </p></div>
       
      </div>
    </div>
    
    
    
  </div>
</div>

{showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-1/3 my-6 mx-auto max-w-3xl w-fit">
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