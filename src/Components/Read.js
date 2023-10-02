import axios from 'axios';
import React  from 'react'
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Read = () => {
const {id}=useParams()
  const [user , setUser] =useState([]);

  useEffect(function getData(){
        axios.get('http://localhost:9090/users/' + id)
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err));
        
  },[])
  return (
    <>
    
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
  
            <tbody >
            <tr> 
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/update/${user.id}`}>Edit</Link>
                <Link to={`/`}>Back</Link>
                
                </td>
            </tr>
            </tbody>
            
         
      </table>
      </>
  )
}

export default Read
