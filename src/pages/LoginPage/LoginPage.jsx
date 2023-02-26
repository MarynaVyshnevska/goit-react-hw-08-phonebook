import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Notiflix from "notiflix";

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
import { useDispatch, useSelector } from "react-redux";
import { authLoginThunk } from "redux/auth/auth.thunk";
import { selectorAuthStatus } from "redux/auth/auth.selector";
import { STATUS } from "constans/status.constans";
import Spinner from "components/Spinner/Spinner";
import { HeaderButton } from "components/Layout/Navigation/Navigation.styled";
import { CottageRounded, KeyboardDoubleArrowLeftRounded } from "@mui/icons-material";

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


const initialState = {
    email: '',
    password: '',
};

const LoginPage = () => {
    const [values, setValues] = useState(initialState);
    const status = useSelector(selectorAuthStatus);
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

    const handleSubmit = async evt => {
        evt.preventDefault();
        console.log(values)
        try {
            await dispatch(authLoginThunk(values)).unwrap();
            Notiflix.Notify.success("It's ok!");
            // console.log(data);
            navigate('/', { replace: true });
        } catch (error) {
            console.log(error);
            Notiflix.Notify.failure('Some mistake');
        }

    }

    return (
        <>
            <IconButton
                component={Link}
                color="inherit"
                to='/'
                sx={{
                    mr: '8px',
                    '&:hover':{background: '#fbe5eb', color: '#b73c58', fontWeight: 700},
                    '&:focus':{background: '#fbe5eb', color: '#b73c58', fontWeight: 700},
                }}
            >
                <CottageRounded sx={{ color: '#b73c58' }} />
                <KeyboardDoubleArrowLeftRounded sx={{ color: '#b73c58' }}/>
            </IconButton>
            {status === STATUS.loading && <Spinner/>}
            
            <Box
                component="form"
                sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                <div>
                    <CssTextField
                        id="custom-css-outlined-input"
                        label="Email"
                        placeholder="User email"
                        multiline
                        type="text"
                        name="email"
                        required
                        onChange={handleChange}
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
                        />
                    </FormControl>
                </div>
                <HeaderButton type='submit'
                    sx={{color: '#fbe5eb', m: '8px auto'}}>
                    Go to PhoneBook
                </HeaderButton>
                
            </Box>
        
        </>
    )
}
export default LoginPage;

