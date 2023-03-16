import React from 'react'
import '../App.css';
import { useState } from 'react';
import { signUpUser } from '../Config/FirebaseMethod';
import { Link, useNavigate } from 'react-router-dom';
import Alert from './Alert'
import BtnSpinner from './BtnSpinner';


export default function SignIn() {
    const navigate = useNavigate()
    const [objdata, setobjdata] = useState({})
    const [val, setval] = useState(false)
    const [mess, setmess] = useState("")
    const [spin, setspin] = useState(false)

    let createobj = (e) => {
        setspin(true)
        e.preventDefault()
        signUpUser(objdata).then(res => {
            alert(res)
            setspin(false)
            navigate("/log")
        })
            .catch(err => {
         setspin(false)  
         setval(true)
                setmess(err)
            })
    };

    return (
        <>
            <h1 className='text-center fw-bolder mt-4'>Sign Up</h1>
            <div className='container sign'>
                <div className=' row '>
                    <div className='col-lg-12 md-12 col-sm-12 mt-4'>

                        <div className='side mx-auto '>
                            <form className='py-5 px-4 '>

                                <div className="mb-3">
                                    <h4>First Name :</h4>
                                    <input type="text" onChange={e => setobjdata({ ...objdata, userName: e.target.value })} placeholder='First Name ' className=" form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>

                                <div className="mb-3">
                                    <h4>Email address :</h4>
                                    <input type="text" onChange={e => setobjdata({ ...objdata, email: e.target.value })} className="form-control" placeholder=' Email Address' id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <h4>Password :</h4>
                                    <input type="password" onChange={e => setobjdata({ ...objdata, password: e.target.value })} placeholder='Password ' className="form-control" id="exampleInputPassword1" />
                                </div>

                                <button onClick={createobj} type="submit" className="btn btn1 px-5  btn-primary">{spin ? <BtnSpinner /> : "Sign Up"}</button>
                                <br />
                                <Link className="d-flex justify-content-center mt-2 " to="/log">You have another Account</Link>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <Alert title="Database" body={mess}
                open={val} closed={(e) => setval(e)} />


        </>
    )
}
