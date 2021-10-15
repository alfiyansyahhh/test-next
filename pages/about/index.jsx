/* eslint-disable react-hooks/rules-of-hooks */

import { useRouter } from "next/router";
import { useState } from 'react'
import Link from 'next/link'

const about = () => {

    const [Data, setData] = useState({
        mobil: [
            {
            id:1,
            merek:"bwm"
            },
            {
            id:2,
            merek:"toyota"
            },
            {
            id:3,
            merek:"ducati"
            },
            
        ]
      })
    
    const router = useRouter();
    const detail = (id) => {
        router.push(`/about/${id}`)
    }

    return(
        <div>
        <h1>about</h1>
        <Link href="/">
            <p>home</p>
        </Link>
        <div>
            {Data.mobil.map((e,i) => {
                return(
                    <div key={i}>
                        <p onClick={() => detail(e.id)}>{e.merek}</p>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default about;