import React, { useState } from 'react'

const Addnote = () => {
    const [Add, setAdd] = useState({ user: "", email: "", phone: "" });
    const onChange = (e) => {
        setAdd({ ...Add, [e.target.name]: e.target.value })
    }
    const onclick = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:7000/api/userdetails/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Add.user,
                email: Add.email,
                phone: Add.phone
            })
        })
        const data = await response.json();
        console.log(data);
        setAdd({
            user: "",
            email: "",
            phone: ""
        })
        window.location.reload(true);
    }
    return (
        <div className='container my-3'>
            <h1>Enter Your Details</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label ">User Name</label>
                    <input type="text" name='user' className="form-control" id="username" aria-describedby="emailHelp" onChange={onChange} value={Add.user} required minLength={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} value={Add.email} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone number</label>
                    <input type="number" name='phone' className="form-control" id="exampleInputPassword1" onChange={onChange} value={Add.phone} required minLength={10} maxLength={10} />
                </div>
                <button type="submit" disabled={
                    Add.user.length < 3 || Add.email.length < 1 || Add.phone.length < 10
                } className="btn btn-primary" onClick={onclick}>Submit</button>
            </form>
        </div>
    )
}

export default Addnote