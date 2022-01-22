import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './common-style.scss';
import './App.scss';
import { useEffect } from 'react';
import operations from './redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContacts = () => dispatch(operations.fetchContacts());
    fetchContacts();
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList filteredContacts />
    </>
  );
}

export default App;
