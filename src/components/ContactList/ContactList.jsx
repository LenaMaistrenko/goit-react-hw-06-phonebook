import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from '../ContactList/ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';
export function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onBtnDelete = e => {
    dispatch(deleteContact(e.target.id));
  };
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );
  // const onBtnDelete = e => {
  // setContacts(prevState => {
  //   return prevState.filter(contact => contact.id !== e.target.id);
  // });
  // };
  return (
    <ul className={css.contactList}>
      {filterContact.map(item => (
        <li className={css.contactItem} key={item.id}>
          {item.name}
          <span>{item.number}</span>
          <button id={item.id} onClick={onBtnDelete} className={css.btndelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
