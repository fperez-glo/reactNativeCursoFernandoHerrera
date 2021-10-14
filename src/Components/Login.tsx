import React, { useState, useReducer, useEffect } from 'react'
import { nodeModuleNameResolver } from 'typescript';

//tipo predefinido
interface AuthState {
    validating: boolean;
    token: string | null;
    userName: string;
    name: string;
}

const Login = () => {

    const initialState: AuthState = {
        validating: true,
        token: null,
        userName: '',
        name: ''
    };

    type LoginPayload = {userName: string, name: string};

    type AuthAction = 
        | {type: 'logout'}
        | {type: 'login', payload: LoginPayload}

    

    //Funcion reducer que trabaja con states y el dispach de las actions definidas en los tipos.
    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validating: false,
                    token: null,
                    name: '',
                    userName: ''
                }
            case 'login':
                const { name, userName } = action.payload
                return {
                    validating: false,
                    token: '91aGa87gAWm',
                    name,
                    userName
                }
        
            default:
                return state;
        }
    };

    const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState);


    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 1500);
        }
    , [])

    if (validating) {
        return (
            <>
                <h3>Login</h3>

                <div className='alert alert-info'>
                    Validando...
                </div>
            </>
        )
    };

    const login = () => {
        dispatch({type: 'login', payload: {userName: 'Fperez', name: 'Facundo'}})
    };

    const logout = () =>{
        dispatch({type: 'logout'})
    };


 

    return (
        <>
            
            <h3>Login</h3>

            {
                (
                    token
                    ? <div className='alert alert-success'> Autenticado como: {name} </div>
                    : <div className='alert alert-danger'>No autenticado </div>
                )
            }

            
            {
                (token)
                ? (
                    <button className='btn btn-danger' onClick={()=> logout()}>
                        Logout
                    </button>
                    )
                : (
                    <button className='btn btn-primary' onClick={()=> login()}>
                        Login
                    </button>
                )
            }
            
           
            
        </>
    )
}

export default Login
