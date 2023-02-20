import React from "react";
// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { filteredContacts } from "redux/contact/filter.slice";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    
    const handleFilter = evt => {
        dispatch(filteredContacts(evt.currentTarget.value))
    }

    
    return (
        <label>
            <p className={css.Filter__filter}>
                Find contacts by name 
            </p>
            <input
                type="text"
                className={css.Filter__input}
                value={filter}
                onChange={handleFilter}
            />
        </label> 

    );
}

export default Filter;

// Filter.propTypes = {
//     value: PropTypes.string,
// }