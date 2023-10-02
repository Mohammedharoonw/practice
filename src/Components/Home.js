import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
const [user , setUser] =useState([]);

  useEffect(function getData(){
        axios.get('http://localhost:9090/users')
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err));
        
  },[])
  

  const handleDelete=(id)=>{
    const confirm =window.confirm("would you want delete?");
    if(confirm){
      axios.delete('http://localhost:9090/users/'+id)
      .then(res=>{
        window.location.reload();
      })
      .catch(err=>console.log(err));
    }
  }
  return (
    <>
    <Link to={'/create'}>Add +</Link>
     <table>
      <thead>
     <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>EMAIL</th>
    <th>PHONE</th>
    <th>ACTION</th>
    
  </tr>
  </thead>
   
      {
        user.map((data , i)=>{
          return(
            <tbody key={i}>
            <tr> 
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>
                <Link to={`/read/${data.id}`}>Read</Link>
                <Link to={`/update/${data.id}`}>Edit</Link>
                <button onClick={e=>{handleDelete(data.id)}}>Delete</button>
                </td>
            </tr>
            </tbody>
            
          )
        })
      }
      </table>
      </>
  )
}

export default Home
