import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

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
    <div>
      <List contacts={contacts} />
      <Form contacts={contacts} addContacts={setContacts} />
    </div>
  );
}

export default Contacts;
