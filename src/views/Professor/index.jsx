import "./professor.css"
import { useState } from "react"
import { toast } from "react-toastify";


export function Professor() {

    const [team, setTeam] = useState('')
    const [country, setCountry] = useState('')
    const [manager, setManager] = useState('')
    const [league, setLeague] = useState('')
  //  const [msn, setMsn] = useState('')

    const FieldValidation = (e) => {
        e.preventDefault()

        if  ( team === ""){
            toast ("Need insert information the field team");
        //    setMsn ('Need insert information the field team')
        }else if (country === "") {
            toast ("Need insert information the field country");
          //  setMsn ('Need insert information the field country')
        }else if (manager === "") {
            toast ("Need insert information the field manager");
        //    setMsn ('Need insert information the field manager')
        }else if (league === "") {
            toast ("Need insert information the field league");
         //   setMsn ('Need insert information the field league'
        }else {
            toast ("Successful!")
        }
    }
    

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Teams and Informations</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        <form onSubmit={FieldValidation}>
                            <div className="row">

                                <div className="col-6">
                                    <label htmlFor="team">Team</label>
                                    <input type="text" id="team" placeholder="Insert Name of the Team..." className="form-control"
                                        onChange={e => setTeam(e.target.value)} value={team} />
                                </div>

                                <div className="col">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" id="country" placeholder="Insert Country" className="form-control"
                                        onChange={e => setCountry(e.target.value)} value={country} />
                                </div>

                                <div className="col">
                                    <label type="manager" >Manager</label>
                                    <input id="manager" placeholder="Insert Name of the Manager..." className="form-control"
                                        onChange={e => setManager(e.target.value)} value={manager} />
                                </div>

                                <div className="col">
                                    <label htmlFor="league">League</label>
                                    <select 
                                        className="form-control"
                                        id="league" value={league}
                                        onChange={e => setLeague(e.target.value)}
                                        >
                                        <option disabled selected>Select League</option>
                                        <option>Premier League</option>
                                        <option>Brasileirão</option>
                                        <option>Serie A</option>
                                        <option>La Liga BBVA</option>
                                    </select>
                                </div>

                                <div className="row">
                                    <div className="col mt-2">
                                        <button type="submit" className="btn btn-success">Add</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div className="col mt-2">
                            <table className="table table-striped table-bordered mt-2">
                                <thead>
                                    <tr>
                                        <th width="60" className="text-center">Code</th>
                                        <th className="text-center">Team</th>
                                        <th width="105" className="text-center">Country</th>
                                        <th width="150" className="text-center">Manager</th>
                                        <th width="115" className="text-center">League</th>
                                        <th width="217" className="text-center">Edit</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="text-center">01</td>
                                        <td>Barcelona Football Club</td>
                                        <td className="text-center">Spain</td>
                                        <td className="text-center">Luis Henrique</td>
                                        <td className="text-center">La Liga BBVA</td>
                                        <td className="text-center">
                                            <div className="btn btn-info btn-action">Info Page</div>
                                            <div className="btn btn-warning btn-action">Edit</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">02</td>
                                        <td>Aston Villa</td>
                                        <td className="text-center">England</td>
                                        <td className="text-center">Carlo Ward</td>
                                        <td className="text-center">Premier League</td>
                                        <td className="text-center">
                                            <div className="btn btn-info btn-action">Info Page</div>
                                            <div className="btn btn-warning btn-action">Edit</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">03</td>
                                        <td>Arsenal</td>
                                        <td className="text-center">German</td>
                                        <td className="text-center">Arsene Wenger</td>
                                        <td className="text-center">Premier League</td>
                                        <td className="text-center">
                                            <div className="btn btn-info btn-action ml-2">Info Page</div>
                                            <div className="btn btn-warning btn-action">Edit</div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className="text-center">04</td>
                                        <td>São Paulo Futebol Clube</td>
                                        <td className="text-center">Brazilian</td>
                                        <td className="text-center">Dorival Jr.</td>
                                        <td className="text-center">Brasileirão</td>
                                        <td className="text-center">
                                            <div className="btn btn-info btn-action">Info Page</div>
                                            <div className="btn btn-warning btn-action">Edit</div>
                                        </td>
                                    </tr>
                                    <tr>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}