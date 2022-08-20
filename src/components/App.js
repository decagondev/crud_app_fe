import React, { useState, useEffect }from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App(){
    const [contacts, setContacts] = useState([]);

    const LOCAL_STORAGE_KEY = 'contacts';
    // const contacts = [
    //     {
    //         "id": '1',
    //         name: 'Jack Jones',
    //         email: 'jack@jones.com'
    //     },
    //     {
    //         "id": '2',
    //         name: 'Dave Smith',
    //         email: 'dave@smith.com'
    //     },
    //     {
    //         "id": '3',
    //         name: 'Tom Tarpey',
    //         email: 'tom@tarpey.com'
    //     }
    // ];

    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // }, [contacts]);

    const addContactHandler = (contact) => {
        console.log(contact);
        contact.id = contacts.length;
        setContacts([...contacts, contact]);
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });

        setContacts(newContactList);
    };

    return (
        <div className='ui container'>
            <Header />
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={ contacts } getContactId={ removeContactHandler } />
        </div>

    )
}

export default App;