import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TfiCut } from "react-icons/tfi";
import { deleteContactThunk, fetchContacts } from 'redux/contact/contact.thunk';
// import PropTypes from 'prop-types';
import { selectError,  selectIsLoading, selectFilteredContacts } from 'redux/contact/selectors';
import css from './ContactList.module.css';
import Spinner from 'components/Spinner/Spinner';
import Notiflix from 'notiflix';

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);
    // const filter = useSelector(selectFilter);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    // const filteredContacts = (filter === '')
    //     ? contacts
    //     : contacts.filter(contact => {
    //         return contact.name.toLowerCase().includes(filter.toLowerCase())
    //     });

    if (error) {
        return Notiflix.Notify.failure(`Ooooops, I'm sorry but something went wrong`)
    }

    // console.log(filteredContacts);
    return (
        <ul className={css.ContactList__list}>
            {!error && !isLoading &&
            (filteredContacts.map(({ contactId, name, phone }) => (
            
                <li key={contactId}
                    className={css.ContactList__item}>
                    <p className={css.ContactList__name}>{name.split(" ").map((word) => {
                        return word[0].toUpperCase() + word.substring(1);
                    }).join(" ")}
                    </p>
                    <p className={css.ContactList__phone}>{phone}</p>
                    <button
                        type="button"
                        className={css.ContactList__button}
                        onClick={() => dispatch(deleteContactThunk(contactId))}
                    >
                        Delete <TfiCut size={10} />
                    </button>
                </li>)
            ))}
            {isLoading && <Spinner/>}
            {error && <p>Ooooops, I'm sorry but something went wrong</p>}
        </ul>
    )
}

export default ContactList;

// ContactList.propTypes = {
//     filteredContacts: PropTypes.arrayOf(PropTypes.exact({
//       contactId: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//     })),
// }