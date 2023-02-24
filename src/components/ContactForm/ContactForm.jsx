import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export function ContactForm(onSubmit) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);

        break;
      default:
        alert('No values');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const sendContact = { name, number };
    const repeatName = contacts.find(item => {
      return item.name === name;
    });
    if (repeatName) {
      alert(`${name} is already in your contacts!`);
      return;
    } else {
      dispatch(addContact(sendContact));
    }

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactform}>
      <label className={css.formlabel}>
        Name :
        <input
          className={css.forminput}
          onChange={handleChange}
          type="text"
          name="name"
          value={name || ''}
          required
        />
      </label>
      <label className={css.formlabel}>
        Number :
        <input
          className={css.forminput}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number || ''}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addbtn}>
        Add contact
      </button>
    </form>
  );
}
