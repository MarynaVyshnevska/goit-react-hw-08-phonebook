import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TfiCut } from "react-icons/tfi";
import { deleteContactThunk, fetchContacts } from 'redux/contact/contact.thunk';
// import PropTypes from 'prop-types';
import { selectError,  selectIsLoading, selectFilteredContacts } from 'redux/contact/selectors';
import css from './ContactList.module.css';
import Spinner from 'components/Spinner/Spinner';
import Notiflix from 'notiflix';
import { Box } from '@mui/material';

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);
    // const filter = useSelector(selectFilter);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    

    if (error) {
        return Notiflix.Notify.failure(`Ooooops, I'm sorry but something went wrong`)
    }

    return (
        // <ul className={css.ContactList__list}>
        <Box
            sx={{
                m: '0 auto',
                width: '100%',
                height: 400,
                maxWidth: 360,
                bgcolor: 'background.paper'
            }}
        >
            {!error && !isLoading &&
            (filteredContacts.map(({ id, name, number }) => (
            
                <li key={id}
                    className={css.ContactList__item}>
                    <p className={css.ContactList__name}>{name.split(" ").map((word) => {
                        return word[0].toUpperCase() + word.substring(1);
                    }).join(" ")}
                    </p>
                    <p className={css.ContactList__phone}>{number}</p>
                    <button
                        type="button"
                        className={css.ContactList__button}
                        onClick={() => dispatch(deleteContactThunk(id))}
                    >
                        Delete <TfiCut size={10} />
                    </button>
                </li>)
            ))}
            {isLoading && <Spinner/>}
            {error && <p>Ooooops, I'm sorry but something went wrong</p>}
        </Box>// </ul>
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