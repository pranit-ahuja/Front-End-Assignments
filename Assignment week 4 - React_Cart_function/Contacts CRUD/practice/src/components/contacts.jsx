import React from 'react'

const Contacts = (props) => {
    return(
        <>
    {props.contact.map(item=>{ return (
        <>
        <ul class="list-group">
        <li>Name: {item.name}  <br/> 
        Email: {item.email}  
        <button onClick={()=>props.handleDelete(item.email)}>DELETE</button>
        <button onClick={()=>props.handleEdit(item.email)}>EDIT</button>
        
        </li>
        </ul>
        </>
    )})}
    </>
    )
 
}

export default Contacts