import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Dataedit = ({formdata, setFormData}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [position, setPosition] = useState();
    const [salary, setSalary] = useState();

    let id = parseInt(location.state.id)
    console.log(location, "loc");

    useEffect(() => {
        if(location.state){
            setName(location.state.name)
            setPosition(location.state.position)
            setSalary(location.state.salary)
        }
    }, [location.state]);

    const handlesubmit = (e) => {
        e.preventDefault();
        let data = {
            id : id,
            name : name,
            position : position,
            salary : salary
        }
        let result = formdata?.map((item) => {
            if(item.id === id){
                return data
            }
            return item
        })
        setFormData(result)
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

export default Dataedit