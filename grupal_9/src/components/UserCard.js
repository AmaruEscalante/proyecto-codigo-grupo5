import axios from 'axios';
import { Fragment, useState, useEffect } from 'react';
import './Card.css';

export default function UserCard(){
    const url = 'https://603c3566f4333a0017b6742d.mockapi.io/admin/v0/';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${url}users`)
        .then((res) => {
            const user_list = res.data;
            console.log(user_list.length);
            setUsers(user_list)
        })
    }, []);
    

    return(<Fragment>
        <div className="col-xl-4">
            <div className="card card-custom mt-4 mb-3">
            <div className="d-flex card-header border-0 pt-3 justify-content-between">
                <h3 className="d-inline-flex card-title align-items-start flex-column">
                    <span className="card-label fw-bolder">Usuarios Registrados</span>
                    <span># ventas {users.length}</span>
                </h3>
        

            </div>
            <div className="card-body">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="dia" role="tabpanel">
                        <div className="table-responsive-md">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellidos</th>
                                        <th scope="col">Correo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((item) => {
                                        return(
                                            <tr key={item.id}>
                                                <td><img height="30px" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar"></img></td>
                                                <th>{item.firstName}</th>
                                                <td>{item.lastName}</td>
                                                <td>{item.email}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    )

}
