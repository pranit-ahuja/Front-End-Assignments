import React, {useState} from 'react'
import Contacts from './contacts';

const Inputone = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[contact, setContact] = useState([]);

    const handleClick=(event)=>{
    event.preventDefault();
    setContact([...contact, {name:name, email:email}])
    setName("");
    setEmail("");
    }
    const handleNameChange = (event) =>{
        setName(event.target.value);
    }
    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    const handleDelete = (emailId)=>{
        const newContact = contact.filter(item=>item.email!==emailId);
        setContact(newContact);
    }
    const handleEdit = (emailId)=>{
        const newContact = [...contact];
        const index = newContact.findIndex(el=>el.email===emailId);
        newContact[index] = {name: name, email:email};
        setContact(newContact);
        setName("");
        setEmail("");
    }

  return (
    <>
    <div class="input-group mb-3">
    <form>
        <input type="text" placeholder="Enter name" onChange={handleNameChange} value={name} />
        <input type="text" placeholder="Email" onChange={handleEmailChange} value={email}/>
        
        <button onClick={handleClick}>Click</button>
    </form>
    </div>
    <Contacts contact={contact} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default Inputone