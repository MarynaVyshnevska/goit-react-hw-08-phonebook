import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import {VisibilityOff, Visibility} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Notiflix from "notiflix";
import { authSignUpThunk } from "redux/auth/auth.thunk";
import { useDispatch } from "react-redux";
import { HeaderButton } from "components/Layout/Navigation/Navigation.styled";

const inittialValues = {
    email: '',
    name: '',
    password: '',
};

// const schemaUser = yup.object().shape({
//     name: yup.string().min(2, 'Your name is too short')
//         .max(50, 'Your name must not be longer than 40 characters')
//         .required('User name required'),
//     email: yup.string().min(5, 'Your email is too short')
//         .max(40, 'Your email must be shorter 40 characters')
//         .required('User email required'),
//     password: yup.string()
//         .min(7, 'Your password must be longer than 7 characters and must contain numbers and at least 1 capital letter')
//         .max(40, 'your password must not be longer than 40 characters')
//         .required('User password required'),
// })

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
    // const [isLoading, setIsLoading] = useState(false); 
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            // setIsLoading(true);
            // await publicApi.post('/users/signup', values);
            await dispatch(authSignUpThunk(values)).unwrap();
            // Notiflix.Notify.success("It's ok!");
            // console.log(data);
            navigate('/', { replace: true });
            // setIsLoading(false);
            Notiflix.Notify.success("It's ok!");
                           
        } catch (error) {
            console.log(error);
            Notiflix.Notify.failure('Some mistake');
        }
        
    }
    return (
        <>
            {/* {isLoading && <p><Spinner /></p>} */}
            
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
                <FormControl sx={{
                            m: 1, width: '25ch',
                            '& label.Mui-focused': {color: '#6f172b',},
                            '& .MuiInput-underline:after': {borderBottomColor: 'green',},
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {borderColor: '#b73c58',},
                                '&:hover fieldset': {borderColor: '#bdbdbd',},
                                '&.Mui-focused fieldset': {borderColor: '#b73c58',},
                            },
                        }} variant="outlined"
                    >
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
                                {showPassword ? <VisibilityOff sx={{color: '#b73c58'}} /> : <Visibility />}
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
                <br/>
                <HeaderButton
                    type='submit'
                    sx={{color: '#fbe5eb', m: '8px auto'}}
                >
                    Sign In
                </HeaderButton>
                <HeaderButton
                    component={Link}
                    to='/login'
                    type='button'
                    sx={{color: '#fbe5eb', m: '8px auto', ml: '16px'}}
                >
                    I have account
                </HeaderButton>
            </Box>
            
        </>
    )
}

export default JoinPage;