import React, { useState } from 'react'

const Crud = () => {

    const [username, setuserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [formdata, setFormData] = useState([]);
    const [editid, seteditId] = useState();
    const [editstate, setEditState] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();
        if(!editstate){
            let data = {
            id : formdata.length + 1,
            username : username,
            password : password,
            email : email
        }
        setFormData([...formdata,data]);
        setuserName("");
        setPassword("");
        setEmail("");
        }else{
            let data = {
                id : editid,
                username : username,
                password : password,
                email : email
            }
            let result = formdata?.map((item) => {
                if(item.id === editid){
                    return data
                }
                return item
            })
            setEditState(false);
            setFormData(result);
            setEmail("");
            setPassword("");
            setuserName("");
        }
    }
   

        const handleEdit = (data) => {
            setEditState(true);
            seteditId(data.id);
            setuserName(data.username);
            setEmail(data.email);
            setPassword(data.password);
        }

        const handleDelete = (id) => {
            const deletedata = formdata.filter(data => data.id !== id );
            setFormData(deletedata);
        }


  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label>userName:</label>
            <input value={username} onChange={(e) => setuserName(e.target.value)}/> <br /><br />

            <label>Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}/> <br /> <br />

            <label>Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}/> <br /> <br />

            <button type='submit'>Submit</button>
 
        </form>

        <div>
            <table>
                <thead>
                    <tr>
                        <th>userName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {formdata?.map((item) => (
                    <tbody>
                        <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
       
       

    </div>
  )
}

export default Crud