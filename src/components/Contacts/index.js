import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import './style.css'

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: " Mehmet", phoneNumber: "123123" },
    { fullname: " Ali", phoneNumber: "456456" },
    { fullname: " Fatma", phoneNumber: "789789" },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="contacts-app" >
      <div target="_blank" className="app-title">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} addContacts={setContacts} />
    </div>
    </div>
    
  );
}

export default Contacts;
