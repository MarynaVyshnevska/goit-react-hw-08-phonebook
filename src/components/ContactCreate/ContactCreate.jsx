import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { addContactThunk } from 'redux/contact/contact.thunk';
import { Container, styled, TextField, Typography } from '@mui/material';
import { STATUS } from 'constans/status.constans';
import Spinner from 'components/Spinner/Spinner';
import { selectContacts, selectIsLoading } from 'redux/contact/selectors';
import { HeaderButton } from 'components/Layout/Navigation/Navigation.styled';
import { AddReactionRounded } from '@mui/icons-material';
import Notiflix from 'notiflix';

const initialValues ={
    name: '',
    number: '',
}

const schemaContact = yup.object().shape({
    name: yup.string().max(50).required(),
    number: yup.string().min(3).max(15).required(),
})


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#6f172b',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#b73c58',
    },
    '&:hover fieldset': {
      borderColor: '#bdbdbd',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#b73c58',
    },
  },
});

const ContactCreate = () => {
    const status = useSelector(selectIsLoading);
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues,
        validationSchema: schemaContact,
        onSubmit: (values, { resetForm }) => {
            addNewContact(values);
            resetForm();

        }
    })

    const addNewContact = (newContact) => {
        console.log(newContact);
        if (contacts.some(({ name }) =>
            name.toLowerCase() === newContact.name.toLowerCase())) {
            
            return Notiflix.Notify.warning(`Contact with name "${newContact.name}" is already in your phonebook `)
        } if (contacts.some(({ number }) =>
            number === newContact.number)) {
            return Notiflix.Notify.warning(`Contact with phonenumber "${newContact.number}" is already in your phonebook `)
        } else {
            dispatch(addContactThunk({...newContact}));
            return Notiflix.Notify.success(`Your new contact was created`)
        }  
    }
    return (
        <Container
            sx={{
                width: '80%',
                maxWidth: '500px',
                alignItems: 'center',
                m: '0 auto',
                border: 'thick double #b73c58',
        }}>
            {status === STATUS.loading && <Spinner />}
            
            <form onSubmit={formik.handleSubmit} >
                <Typography variant='h5' align='center' sx={{color: '#b73c58', mt: '16px'}}>
                    Add new contact
                </Typography>
                
                <CssTextField
                    id="custom-css-outlined-input"
                    label="Contact Name"
                    multiline
                    fullWidth
                    name="name"
                    required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.text && Boolean(formik.errors.text)}
                    helperText={formik.touched.text && formik.errors.text}
                    sx={{m: '16px auto' }}
                />
                <CssTextField
                    id="custom-css-outlined-input"
                    label="Contact Number"
                    multiline
                    fullWidth
                    name="number"
                    required
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    error={formik.touched.text && Boolean(formik.errors.text)}
                    helperText={formik.touched.text && formik.errors.text}
                    sx={{m: '16px auto' }}
                />
                <HeaderButton
                    type='submit'
                    sx={{color: '#fbe5eb', m: '8px auto'}}
                >
                    Add contacts <AddReactionRounded sx={{ml: '8px'}} />
                </HeaderButton>
            </form>
            
        </Container>
        )
    };

export default ContactCreate;
ContactCreate.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
}