import TextField from '@mui/material/TextField';
import React from 'react'
import Buttons from './Buttons';
import BtnSpinner from './BtnSpinner';
import Alert from './Alert';
import { postfbdata } from '../Config/FirebaseMethod'
import { useState } from 'react';

const DataPost = () => {

  const [objdata, setobjdata] = useState({})
  const [val, setval] = useState(false)
  const [spin, setspin] = useState(false)
  const [mess, setmess] = useState("")
  const [fbdata, setfbdata] = useState([])
  const [tbHead, settbHead] = useState([
    {
      name: "User Nmae",
      key: "userName"
    }, {
      name: "Email",
      key: "email"
    }, {
      name: "Description",
      key: "desc"
    },
  ])

  let create = (e) => {
    e.preventDefault()
    setspin(true)
    postfbdata(objdata, "posts")
      .then((e) => {
        setfbdata(Object.values(e))
        setmess("Your Data is successfully save in database")
        setspin(false)
        setval(false)

      }).catch((err) => {
        setmess(err)
        setval(true)
      })

  };


  return (
    <>
      <div className="form" >
        <TextField

          onChange={e => setobjdata({ ...objdata, userName: e.target.value })} id="outlined-multiline-flexible"
          label="Name"
          multiline
          className='mx-3 muiput'
          maxRows={4}
        />
        <TextField
          onChange={e => setobjdata({ ...objdata, email: e.target.value })}
          className='mx-3 muiput'
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
        /><TextField
          onChange={e => setobjdata({ ...objdata, desc: e.target.value })}
          className='mx-3 muiput'
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
        />
        <Buttons click={create} classes="py-2 mb-5 mx-3" label={spin ? <BtnSpinner /> : "save"} />
      </div>




      <div>
        <table className="table mt-5 mx-auto table-striped table-hover">
          <thead>
            <tr>
              {
                tbHead.map((x, i) => <th key={i} >{x.name}</th>)
              }
            </tr>
          </thead>

          <tbody>
            {
              fbdata.map((x, i) => <tr key={i}>
                {
                  tbHead.map((e, ind) => <td key={ind}>{x[e.key]}</td>)
                }
              </tr>
              )}
          </tbody>

        </table>

        <Alert title="Database " body={mess}
          open={val} closed={(e) => setval(e)} />
      </div>


    </>
  )
}

export default DataPost
