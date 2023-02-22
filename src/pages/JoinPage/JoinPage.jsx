import { useState } from "react";
// import { Formik, ErrorMessage, Form, Field } from 'formik'; 
import Spinner from "components/Spinner/Spinner";
import * as yup from 'yup';
import { Link } from "react-router-dom";


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { styled } from '@mui/material/styles';
import axios from "axios";
import Notiflix from "notiflix";

const inittialValues = {
    email: '',
    name: '',
    password: '',
};

const schemaUser = yup.object().shape({
    name: yup.string().min(2, 'Your name is too short')
        .max(50, 'Your name must not be longer than 40 characters')
        .required('User name required'),
    email: yup.string().min(5, 'Your email is too short')
        .max(40, 'Your email must be shorter 40 characters')
        .required('User email required'),
    password: yup.string()
        .min(7, 'Your password must be longer than 7 characters and must contain numbers and at least 1 capital letter')
        .max(40, 'your password must not be longer than 40 characters')
        .required('User password required'),
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

const JoinPage = () => {
    const [values, setValues] = useState(inittialValues);
    const [isLoading, setIsLoading] = useState(false); 
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleChange = event => {
        const { value, name } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // console.log(values);
        try {
            setIsLoading(true);
            await axios.post('https://connections-api.herokuapp.com/users/signup', values);
            setIsLoading(false);
            Notiflix.Notify.success("It's ok!");
                           
        } catch (error) {
            console.log(error);
            Notiflix.Notify.failure('Some mistake');
        }
        
    }
    return (
        <>
            {isLoading && <p><Spinner /></p>}
            
            <Box
                component="form"
                sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                <CssTextField
                    id="custom-css-outlined-input"
                    label="Name"
                    placeholder="User name"
                    multiline
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    value={values.name}
                />
                <CssTextField
                    id="custom-css-outlined-input"
                    label="Email"
                    placeholder="User email"
                    multiline
                    type="text"
                    name="email"
                    required
                    onChange={handleChange}
                    value={values.email}
                />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                        name='password'
                        required
                        onChange={handleChange}
                        value={values.password}
                    />
                </FormControl>
                <Link to='/login' className='d-block my-4'>
                    Already has account?
                </Link>
                <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">
                    Sign In
                </button>
            </Box>
            
        </>
    )
}

export default JoinPage;