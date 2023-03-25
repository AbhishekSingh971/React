import React from 'react'

const UserDetails = ({ nextStep, handleChange, values }) => {
    return (
        <div>
            <label>Email
                <input
                    type="text"
                    placeholder="email address"
                    value={values.email}
                    onChange={handleChange('email')}
                />
            </label>
        </div>
    )
}

export default UserDetails