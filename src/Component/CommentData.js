import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';

const CommentData = (props) => {
    const [first, setfirst] = useState("")
    const [inpt,setinpt ] = useState("")

    let { title, col, data, reload, finalval, selection } = props;
    useEffect(() => {
        console.log(selection)
         setinpt(finalval)
        setfirst(selection)
    }, [finalval])

    return (
        <>
            <h1 className=' py-4'>{title}</h1>



            {data && Array.isArray(data) && (
                <table className='table table-striped table-hover  ' cellPadding="10px" >
                    <thead>
                        <tr >
                            {reload ? <Spinner/> : col && Array.isArray(col) && col.map((x, i) => {
                                return <th key={i} ><h5>{x.Name}</h5></th>

                            }

                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter((x, i) => {
                            if (finalval == "") {
                                return x
                            }
                            else if (x.first??x.name.toLowerCase().includes(inpt.toLowerCase())) {
                                return x
                            }
                        }).map((x, i) => <tr key={i} >
                            {
                                col.map((e, ind) => <td key={ind}>{x[e.key]}</td>

                                )
                            }
                        </tr>

                        )}
                    </tbody>


                </table>
            )
            }
        </>
    )
}

export default CommentData
