import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export function Filter({ onChange }) {
  const value = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.item);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <label className={css.filterlabel}>
      FIND CONTACTS BY NAME
      <input
        className={css.filterinput}
        type="text"
        name="filter"
        value={value}
        onChange={handleFilter}
      />
    </label>
  );
}
