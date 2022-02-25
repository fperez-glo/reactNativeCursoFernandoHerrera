import React, { useEffect, useState } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResUsersAPI, User } from '../interfaces/reqRes'

const Usuarios = () => {

    const [usersData, setUsersData] = useState<User[]>([]);


    useEffect(() => {
        fetchUsersData();
    }, [])

    const fetchUsersData = async() => {
        //llamo a la api
        const resp = await reqResApi.get<ReqResUsersAPI>('/users');
        //Destructuring para obtener solo la data del llamado a la api.
        const usersData = resp.data.data
        setUsersData(usersData);
        console.log(usersData)
    };

    const render = (user: User) =>{
        return (
            <tr key={user.id.toString()}>
                <td>{user.avatar}</td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    };

    const nextUsersPage = () => {
        console.log('Siguiente pagina de usuarios')
    };

    return (
        <>
            <h3>Usuarios:</h3>
            {/* {console.log(usersData)} */}
            <table className='table table-primary'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user) => {
                        return (
                        <tr key={user.id.toString()}>
                            <td>
                                <img 
                                    src={user.avatar} 
                                    style={{
                                            width: 50, 
                                            borderRadius: 100
                                            }}
                                />
                            </td>
                            <td>{user.first_name}</td>
                            <td>{user.email}</td>
                        </tr>
                        )
                    })}
                    {/* Otra forma de renderizarlo en pantalla llamando a una funcion */}
                    {/* {usersData.map(render)} */}
                </tbody>
            </table>

            <button className='btn btn-primary' onClick={()=> nextUsersPage()}>
                    Siguientes
            </button>
        </>
    )
}

export default Usuarios
