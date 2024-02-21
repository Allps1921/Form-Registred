import "./Alunos.css"
import { useState } from "react"
import { toast } from "react-toastify";


export function Alunos() {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [position, setPosition] = useState('')
    const [nationality, setNationality] = useState('')
    //const [msn, setMsn] = useState('')

    const FieldValidation = (e) => {
        e.preventDefault()
//nome
    if  ( name === ""){
        toast ("Need insert information the field name");
     //   setMsn ('Need insert information the field name')
    }else if (gender === "" || gender === "Gender Selection") {
        toast ("Need insert information the field gender");
     //   setMsn ('Need insert information the field gender')
    }else if (position === "") {
        toast ("Need insert information the field position");
     //   setMsn ('Need insert information the field position')
    }else if (nationality === "") {
        toast ("Need insert information the field nationality");
     //   setMsn ('Need insert information the field nationality')
    }else {
        toast ("Successful!")
    }

//gender//

//position

// nationality
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Players and Information</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        <form onSubmit={FieldValidation}>
                            <div className="row">

                                <div className="col-6">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" className="form-control" placeholder="Insert Name"
                                        onChange={e => setName(e.target.value)} value={name}
                                    />
                                </div>

                                <div className="col">
                                    <label htmlFor="Gender">Gender</label>
                                    <select className="form-control" id="Gender"
                                        value={gender} onChange={e => setGender(e.target.value)}
                                    >
                                        <option value="nothing" disabled selected hidden>Gender Selection</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="not informed">Not Informed</option>
                                    </select>

                                </div>

                                <div className="col">
                                    <label htmlFor="position">Position</label>
                                    <select className="form-control" id="position"
                                        value={position} onChange={e => setPosition(e.target.value)}>
                                        <option value="nothing" disabled selected>Select Position</option>
                                        <option value="Brazil">Left Wing</option>
                                        <option value="Switzerland">Striker</option>
                                        <option value="Germany">Center Attacking Midfield</option>
                                    </select>

                                </div>

                                <div className="col">
                                    <label htmlFor="nationality">Nationality</label>
                                    <input type="text" id="nationality" className="form-control" placeholder="Nationality"
                                        onChange={e => setNationality(e.target.value)} value={nationality}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col mt-2">
                                        <button type="submit" className="btn btn-success">Add</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="col mt-2">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th width="60" className="text-center">Code</th>
                                    <th className="text-center">Name</th>
                                    <th width="105" className="text-center">Gender</th>
                                    <th width="150" className="text-center">Position</th>
                                    <th width="115" className="text-center">Nationality</th>
                                    <th width="217" className="text-center">Edit</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="text-center">01</td>
                                    <td>Neymar Jr</td>
                                    <td className="text-center">Male</td>
                                    <td className="text-center">Left Wing</td>
                                    <td className="text-center">Brazil</td>
                                    <td className="text-center">
                                        <div className="btn btn-info btn-action">Info Page</div>
                                        <div className="btn btn-warning btn-action">Edit</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">02</td>
                                    <td>Alisha Lehmann</td>
                                    <td className="text-center">Female</td>
                                    <td className="text-center">Striker</td>
                                    <td className="text-center">Switzerland</td>
                                    <td className="text-center">
                                        <div className="btn btn-info btn-action">Info Page</div>
                                        <div className="btn btn-warning btn-action">Edit</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">03</td>
                                    <td>Mesut Ozil</td>
                                    <td className="text-center">Male</td>
                                    <td className="text-center">Center Attacking Midfield</td>
                                    <td className="text-center">Germany</td>
                                    <td className="text-center">
                                        <div className="btn btn-info btn-action">Info Page</div>
                                        <div className="btn btn-warning btn-action">Edit</div>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="text-center">04</td>
                                    <td>Wellington Rato</td>
                                    <td className="text-center">Male</td>
                                    <td className="text-center">Brazil</td>
                                    <td className="text-center">Portugal</td>
                                    <td className="text-center">
                                        <div className="btn btn-info btn-action">Info Page</div>
                                        <div className="btn btn-warning btn-action">Edit</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )

} 