import React from 'react';
import { Puff } from 'react-loader-spinner';
import css from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={css.container}>
            <div className={css.item}>
                <Puff 
                height="100"
                width="100"
                radius={1}
                color="#b73c58"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
            </div>
        </div>
        
    )
}

export default Spinner;