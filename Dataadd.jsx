import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dataadd = ({formdata, setFormData}) => {

    const navigate = useNavigate();
    const [name, setName] = useState();
    const [position, setPosition] = useState();
    const [salary, setSalary] = useState();

    const handlesubmit = (e) => {
        e.preventDefault();
        let data = {
            id : formdata.length + 1,
            name: name,
            position : position,
            salary : salary
        }
        setFormData([...formdata, data])
        setName("")
        setPosition("")
        setSalary("")
        navigate("/")
    }
   return (
    <div>
        <form onSubmit={handlesubmit}>
            <label>Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)}/> <br /><br />

            <label>Position:</label>
            <input value={position} onChange={(e) => setPosition(e.target.value)}/> <br /><br />

            <label>Salary:</label>
            <input value={salary} onChange={(e) => setSalary(e.target.value)}/> <br /><br />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Dataadd