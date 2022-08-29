
import React, { useState } from 'react';
import './App.css';
import JsonData from './MOCK_DATA.json'
import ReactPaginate  from 'react-paginate';
function App() {
const [users, setUsers] =useState(JsonData.slice(0,50))
const [pageNumber ,setPageNumber]=useState(0)
const usersPerpage=10
const pagesVisited=pageNumber*usersPerpage
const displayUsers=users.slice(pagesVisited ,pagesVisited+usersPerpage).map((user=>{
  return (
    <div className='bg-gray-100 w-[500px] rounded-lg mx-auto my-10 border border-gray-300 p-5 shadow-lg'>
      <h3 className="text-xl font-semibold">{user.first_name}</h3>
      <h3>{user.last_name}</h3>
      <h3>{user.email}</h3>
    </div>
  )
}))
const pageCount=Math.ceil(users.length/usersPerpage)
const  changePage=({selected})=>{
    setPageNumber(selected)
}
  return (
    <div className="App">
      {displayUsers}

      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      activeClassName={"paginationActive"}
      disabledClassName={"paginationDiabled"}
      />
    </div>
  );
}

export default App;
