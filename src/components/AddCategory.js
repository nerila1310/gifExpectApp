import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setcategories }) => {
    
    const [inputValue, setinputValue] = useState( '' );

    const handdleInputChange = ( e ) => {
        setinputValue( e.target.value );
    };

    const handdleSubmit = ( e ) => {
        e.preventDefault();

        if(inputValue.trim().length > 2 ){
            setcategories( category => [inputValue] );
            setinputValue( '' );
        }
    }
    
    return (
        <form onSubmit={ handdleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={ handdleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}