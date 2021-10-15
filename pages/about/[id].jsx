/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'


const detailAbout = () => {
    const router = useRouter();
    return(
        <div>
            <h1>detail about</h1>
            <h1>id {router.query.id}</h1>
        </div>
    )
}

export default detailAbout