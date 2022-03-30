import { useState, useEffect} from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    
  return (
    <div>
        <List/>
        <Form contacts={contacts} addContacts={setContacts}/>
    </div>
  )
}

export default Contacts