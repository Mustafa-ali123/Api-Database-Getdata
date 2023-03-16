import React from 'react'
import { useState } from 'react';

const SearchBar = (props) => {
    let { search, col } = props;
    const [searchval, setsearchval] = useState("")
    const [select, setselect] = useState("")

    const changedata = (e) => {
        setsearchval(e);
        search(searchval, select)

    }
    return (
        <>
            <div>

                <input type="text" onChange={e => changedata(e.target.value)} placeholder={select} className='inpt' />

                <select onChange={e => setselect(e.target.value)}>

                    {col.filter((x) => {
                        if (x.searchable) {
                            return x
                        }
                    }).map((x, i) => <option key={x.key}>{x.Name}</option>
                    )

                    }
                </select>
            </div>
        </>
    )
}

export default SearchBar
