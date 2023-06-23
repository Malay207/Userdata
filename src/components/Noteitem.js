import React from 'react'

const Noteitem = (props) => {
    const { note, updatenote, getnote } = props;
    const Delete = () => {
        fetch(`http://localhost:7000/api/userdetails/delete/${note._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        getnote();
    }
    return (
        <>
            <div className="col-md-3 ">
                <div className="card my-3" style={{
                    marginLeft: "30px"
                }}>
                    <div className="card-body">
                        <h5 className="card-title">{note.name}</h5>
                        <p className="card-text">{note.email}</p>
                        <p className="card-text">{note.phone}</p>
                        <i className="fa-solid fa-trash mx-2 " style={{
                            cursor: "pointer"
                        }} onClick={Delete}></i>
                        <i className="fa-sharp fa-solid fa-pen-to-square mx-2" style={{
                            cursor: "pointer"
                        }} onClick={Delete}></i>
                        <i onClick={() => { updatenote(note) }}></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Noteitem