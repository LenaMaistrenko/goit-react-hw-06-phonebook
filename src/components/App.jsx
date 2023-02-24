// import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import css from './App.module.css';

export function App() {
  return (
    <div>
      <h1 className={css.apptitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.apptitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
