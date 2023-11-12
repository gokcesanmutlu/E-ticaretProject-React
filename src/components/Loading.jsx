import React from 'react'

const Loading = () => {
  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
      <button class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 inline-flex items-center" type="button" disabled="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 101" class="inline w-4 h-4 mr-3 text-white animate-bounce" role="status" aria-hidden="true">
          <circle fill="#34D399" r="45" cy="50" cx="50"></circle>
        </svg>
        Loading...
      </button>
    </div>
  )
}

export default Loading