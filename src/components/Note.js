import React, { useEffect, useState, useRef } from 'react'
import Noteitem from './Noteitem';

const Note = () => {
    const ref = useRef(null)
    const [Add, setAdd] = useState([]);
    const [edit, setedit] = useState({ id: "", euser: "", eemail: "", ephone: "" })
    const getNote = async () => {
        const response = await fetch('http://localhost:7000/api/userdetails/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setAdd(data);
    }
    useEffect(() => {
        getNote();
    }, [])
    const onChange = (e) => {
        setedit({ ...edit, [e.target.name]: e.target.value })
    }
    const updatenote = (note) => {
        ref.current.click();
        setedit({ id: note._id, euser: note.name, eemail: note.email, ephone: note.phone })
    }

    const update = async (e) => {
        const response = await fetch(`http://localhost:7000/api/userdetails/edit/${edit.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: edit.euser,
                email: edit.eemail,
                phone: edit.ephone
            })
        })
        const data = await response.json();
        window.location.reload(true);
    }

    return (
        <>
            <div className="  row my-3">
                {/* <!-- Button trigger modal --> */}
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Edit Details
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='container my-3'>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label ">User Name</label>
                                            <input type="text" name='euser' className="form-control" id="username" aria-describedby="emailHelp" onChange={onChange} value={edit.euser} required minLength={3} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" name='eemail' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} value={edit.eemail} required />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Phone number</label>
                                            <input type="number" name='ephone' className="form-control" id="exampleInputPassword1" onChange={onChange} value={edit.ephone} required minLength={10} maxLength={10} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={update}>Save changes </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='ms-3 '>Your Note</h2>
                <div className="container">
                    {
                        Add.length === 0 && 'No Notes to display'
                    }
                </div>
                {Add.map((note) => {
                    return <Noteitem key={note._id} note={note} updatenote={updatenote} getnote={getNote} />
                }
                )}
            </div>

        </>
    )
}

export default Note