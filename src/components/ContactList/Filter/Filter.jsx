import React from "react";
// import css from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { filteredContacts } from "redux/contact/filter.slice";
import { Container, styled, TextField, Typography } from "@mui/material";

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

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    
    const handleFilter = evt => {
        dispatch(filteredContacts(evt.currentTarget.value))
    }
    
    return (
        <Container
            sx={{
                    width: '80%',
                    maxWidth: '500px',
                    alignItems: 'center',
                    m: '0 auto',
            }}
        >
            <Typography variant='h6' align='center' sx={{color: '#b73c58', mt: '16px'}}>
                Find contacts by name 
            </Typography>
            <CssTextField
                id="custom-css-outlined-input"
                label='Name'
                type="text"
                value={filter}
                multiline
                fullWidth
                onChange={handleFilter}
                helperText="Enter a name for search"
                sx={{
                    m: '16px auto',
                    // width: '50%',
                }}
            />
        </Container>
    );
}

export default Filter;