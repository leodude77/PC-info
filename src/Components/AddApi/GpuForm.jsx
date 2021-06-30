import React from 'react';

const GpuForm = () => {

    function onSubmitForm(e) {
        console.log(e.target.value)
    }

    return ( <form onSubmit = {onSubmitForm}>
        <label htmlFor="name">Enter Name:</label>
      <input
        type="text"
        name="name"
        required
      />
         <input type="submit"/>
    </form>) 
}

export default GpuForm;