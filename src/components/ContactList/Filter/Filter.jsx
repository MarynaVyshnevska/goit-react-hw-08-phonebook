import React from "react";
// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { filteredContacts } from "redux/contact/filter.slice";
import { TextField } from "@mui/material";
// import { purple } from "@mui/material/colors";

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
            
            <TextField
                label='Name'
                type="text"
                value={filter}
                onChange={handleFilter}
                variant="standard"
                helperText="Enter a name for search"
                // textColo
        
                sx={{
                    m: '20px',
                    width: '50%',
                    // textColor :'#b73c58,
                }}
                // color='#b73c58'
            />
        </label> 

    );
}

export default Filter;

// Filter.propTypes = {
//     value: PropTypes.string,
// }