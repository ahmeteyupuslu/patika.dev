import React, { useState } from 'react'
import { useEffect } from 'react'
import List from './List'
import Form from './Form'
import './styles.css'


function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet Seven",
      phone_number: "555475865",
    },
    {
      fullname: "Ahmet Uslu",
      phone_number:"5647568954"
    },
    {
      fullname: "Cingöz Recai",
      phone_number:"5847659875"
    }
  ]);

  useEffect(()=>{
    console.log(contacts);
  },[contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;