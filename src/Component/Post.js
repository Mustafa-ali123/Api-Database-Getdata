import React, { useEffect, useState } from 'react'
import { Get } from '../ApiBase/Api'
import Spinner from './Spinner'
import Buttons from './Buttons'

const Post = (props) => {

  const [data, setdata] = useState("")
  const [load, setload] = useState(true)

  const getData = () => {

    Get('/posts').then((res) => {
      setdata(res.data)
      console.log(res.data)
      setload(false)
    }).catch((err) => console.log(err))

  }
  const del = (x,index) => {
    console.log(x)



  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      {load ? <Spinner /> : data.map((x, i) => {

        return (

          <div key={i} className=" border shadow p-3 mb-5 bg-white rounded px-3 py-3 ">
            <h2>{x.title}</h2>
            <h5>{x.body}</h5>
            <h5>{x.id}</h5>
            <Buttons click={()=>del(x,i)} classes='mt-2' label="Delete" color='error' />
          </div>

        )
      })
      }

    </div>
  )
}



export default Post
