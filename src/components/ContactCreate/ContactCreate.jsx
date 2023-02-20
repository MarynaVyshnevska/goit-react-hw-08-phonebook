import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { TfiCommentsSmiley } from "react-icons/tfi";

// import { addContactAction } from 'redux/contact/contact.slice';
import { FormPhone, InputPhone } from './ContactCreate.styled';
import { addContactThunk } from 'redux/contact/contact.thunk';

const initialValues ={
    name: '',
    phone: '',
}

const schemaContact = yup.object().shape({
    name: yup.string().max(50).required(),
    phone: yup.string().min(3).max(15).required(),
})


const ContactCreate = () => {

    const dispatch = useDispatch();
        
    const handleSubmit = (values, {resetForm}) => {
        // console.log(values);
        const formContactData = values;
        dispatch(addContactThunk({
            id: nanoid(),
            ...formContactData
        }));
        
        resetForm();
    }

    return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schemaContact}
            >
            <FormPhone  >
                <div>
                    <label>
                        <p>Name</p>
                        <InputPhone
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                        <ErrorMessage name="name" component="div"/>    
                    </label>
                    <label>
                        <p >Phone</p>
                        <InputPhone
                            type="tel"
                            name="phone"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <ErrorMessage name="phone" component="div"/>      
                    </label>
                </div>
                
                <button type="submit">
                    Add contacts <TfiCommentsSmiley size={14} />
                </button>
            </FormPhone>
            </Formik>
        )
    };

export default ContactCreate;
ContactCreate.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
}