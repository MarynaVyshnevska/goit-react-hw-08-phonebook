import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContacts } from 'redux/contact/contact.thunk';
import { selectError,  selectIsLoading, selectFilteredContacts } from 'redux/contact/selectors';
import css from './ContactList.module.css';
import Spinner from 'components/Spinner/Spinner';
import Notiflix from 'notiflix';
import { Box, Button } from '@mui/material';
import { DeleteRounded } from '@mui/icons-material';


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
                    <Button
                        type="button"
                        size="small"
                        onClick={() => dispatch(deleteContactThunk(id))}
                        sx={{
                            color: '#b73c58', 
                            height: '30px',
                            '&:hover': { background: '#b73c58', color: '#fbe5eb' },
                            '&:focus': {background: '#b73c58', color: '#fbe5eb'}
                        }}
                    >
                        Delete <DeleteRounded sx={{ml: '8px'}} />
                    </Button>
                </li>)
            ))}
            {isLoading && <Spinner/>}
            {error && <p>Ooooops, I'm sorry but something went wrong</p>}
        </Box>// </ul>
    )
}

export default ContactList;
