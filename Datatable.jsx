import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Datatable = ({formdata}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/dataadd")
      
        
    }

    
  return (
    <div>
        <button onClick={handleNavigate}>Add new</button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            {formdata?.map((item) => (
                <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.salary}</td>
                        <td>
                            <Link to={"/dataedit"} state={item}>Edit</Link> 
                            {/* <button onClick={handleNavigate} state={item}>Edit</button> */}
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    </div>
  )
}

export default Datatable