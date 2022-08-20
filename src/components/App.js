import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App(){
    const contacts = [
        {
            "id": '1',
            name: 'Jack Jones',
            email: 'jack@jones.com'
        },
        {
            "id": '2',
            name: 'Dave Smith',
            email: 'dave@smith.com'
        },
        {
            "id": '3',
            name: 'Tom Tarpey',
            email: 'tom@tarpey.com'
        }
    ];
    return (
        <div className='ui container'>
            <Header />
            <AddContact />
            <ContactList contacts={ contacts }/>
        </div>

    )
}

export default App;