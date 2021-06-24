import React from 'react'
import { useState } from 'react'
import './styles/AddCategory.css'

const AddCategory = (props) => {

    const [value, setvalue] = useState('')

    const handleChange = (e) => {
        setvalue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim().length > 0) {
            props.setCategory(((before) => [value,...before]));
            setvalue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text" className='form-control bg-secondary text-white'
                    value={value}
                    onChange={handleChange}
                    placeholder='buscar gif'
                    />
            </div>
        </form>
    )
}

export default AddCategory
