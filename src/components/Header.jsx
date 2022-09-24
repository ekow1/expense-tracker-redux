import React, {useState}from 'react'
import Form from './Form';
import SearchBar from './SearchBar'

function Header() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };


  return (
    <div className=' grid xl:grid-cols-1 sm:grid-cols-1 w-full  place-items-center  mb-10 gap-5 px-5'>
       
        <SearchBar handleModal ={handleModal}/>
        <h1 className='b text-black w-auto  text-center xl:col-span-2 text-2xl font-bold '> EXPENSE LIST</h1>

        {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition duration-500 ease-in-out ">
            <div className="relative xl:w-1/3 my-6 mx-auto md:w-96 w-80 px-5 transition duration-500 ease-in-out">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-1/2">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">INCOME & EXPENSE</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                     <i className="bx bxs-x-circle text-2xl text- bx-tada-hover"></i>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <Form  closeModal = {setShowModal}/>


                
                </div>
                <div className="flex items-center justify-end p-6  border-solid border-blueGray-200 rounded-b">
                 
                 
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

export default Header