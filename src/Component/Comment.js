import React, { useEffect, useState } from 'react'
import CommentData from './CommentData'
import { Get } from '../ApiBase/Api'
import SearchBar from './SearchBar'

const Comment = () => {
  
  const [spin, setspin] = useState(true)
  const [comt, setcomt] = useState([])
  const [values, setvalues] = useState("")
  const [selected, setselected] = useState("")
  const [colhead, setcolhead] = useState([
    {
      Name: "S:on",
      key: "id"
    },
    {
      Name: "Name",
      key: "name",
      searchable: true
    },
    {
      Name: "Email",
      key: "email",
      searchable: true
    },
    {
      Name: "Comment",
      key: "body",
      searchable: true

    },

  ])

  const showData = () => {
    Get("/comments").then(res => {
      setcomt(res.data)
      console.log(res.data)
      setspin(false)
    }).catch(err => {
      console.log(err)
    })

  }
  useEffect(() => {
    showData()
  }, [])

  const ser = (e, sel) => {
    setvalues(e)
    setselected(sel)
  }

  return (
    <>

      <SearchBar
        search={ser}
        col={colhead}
      />

      <CommentData
        title="Comments"
        data={comt}
        col={colhead}
        reload={spin}
        finalval={values}
        selection={selected}

      />

    </>
  )
}



export default Comment
