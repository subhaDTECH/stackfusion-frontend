import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';
const UserPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();


        if (!name || !email || !dob || !phone) {
            alert("Required ALL Feild")
            return;
        }


        axios.post("https://stackfusion2.onrender.com/users", {
            name,
            email,
            dob,
            phone
        }).then((res) => {
            console.log(res.data);
            alert(" submited Data")
            navigate('/');
        }).catch((e) => {
            console.log(e.message)
            alert(e.message)
        })


        setName("");
        setEmail("");
        setDob("");
        setName("");
        setPhone("");
    }
    return (
        <div>

            <form className='w-50 mx-auto'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">D.O.B</label>
                    <input
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}

                        type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Phone</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>




                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UserPage