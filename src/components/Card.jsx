import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteExpense} from '../redux/action'
import {updateExpense} from '../redux/action'


function Card({cost}) {


  const [showModal, setShowModal] = useState(false);
  const [title ,setTitle] = useState(cost.title);
  const [amount ,setAmount] = useState(cost.amount);
  const [select ,setSelect] = useState(cost.type);


const dispatch = useDispatch()
  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(deleteExpense(cost.id))
  }

  const editExpense = (e) => {
    e.preventDefault();
    const edit = { id: cost.id, title, amount, date:Date.now(), type:select };

    dispatch(updateExpense(edit));
    setShowModal(false);
    


    
  }

  
  return (

    <div>


<div className=" flex mx-auto w-full items-center justify-center">
 
   <ul className="flex flex-col w-full items-center justify center p-4">
        <li className="border-gray-600 flex flex-row mb-2">
          <div className="select-none cursor-pointer text-black bg-white border-r-8 border-rose-500  rounded-md flex flex-1 w-8/12 items-center px-3 py-2  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col text-black w-16 h-10 border-r border-black justify-center items-center mr-2  text-xs font-bold"> {cost.type} </div>
            <div className="flex-1 pl-1 mr-16">
              <div className="font-medium text-sm  w-12">{cost.title}</div>
              <div className=" text-sm  w-12  rounded p-1 font-bold ">{cost.amount}</div>
            </div>
            <div className="flex-1 pl-1 mr-8">
              
              <div className=" text-xs  w-fit text-start ">{new Date(cost.date).toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}</div>
            </div>
            <div className=" text-xl">
            <div className="text-sm" onClick={() => setShowModal(true)}><i className='bx bx-edit'></i></div>
            <div className="text-rose-600 text-sm mt-1" onClick={deleteItem}><i className='bx bxs-trash-alt'></i></div>
            </div>
            
          </div>
        </li>
       
         
    </ul>
    
  </div>
   
  {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Edit Expense</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() =>setShowModal(false)}
                    
                  >
                     <i className="bx bxs-x-circle text-2xl text- bx-tada-hover"></i>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                <input
                      type="text"
                      id="simple-email"
                      className=" flex-1 appearance-none wrap border-b border-sky-900  focus:outline-none focus:ring-0   py-2 px-4  text-sky-900  bg-transparent lg:w-full w-full h-fit mb-4"
                      placeholder="title here ..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />

                <input
                      type="text"
                      id="simple-email"
                      className=" flex-1 appearance-none wrap border-b border-sky-900  focus:outline-none focus:ring-0   py-2 px-4  text-sky-900  bg-transparent lg:w-full w-full h-fit mb-4"
                      placeholder="title here ..."
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />

                <select id="countries" className=" border-b border- text-gray-900 text-sm focus:outline-none focus:ring-none focus:border-none  w-3/4 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-transparent dark:focus:border-transparent"  value={select} onChange={(e) => setSelect(e.target.value)}   >
                    <option >Choose a country</option>
                    <option >Food</option>
                    <option >Shoe</option>
                    <option >Clothing</option>
                    <option >Fuel</option>
                    <option >Bills</option>
                </select>
                 


                
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

                  
                 
                  <button
                    className="text-white dark:bg-gray-700 dark:border-gray-600 active:bg-yellow-700 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"

                    onClick={editExpense}
                    
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

    </div>
   


    
  )
}

export default Card