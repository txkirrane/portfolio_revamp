import { useEffect, useState } from "react"

import Tile from "./Tile"
import Loading from "../misc/Loading"

export default ({src, ...props}) => {

    const [loading, setLoading] = useState(true)

    const url = src ?? "https://protkd.com/wp-content/uploads/2017/04/default-image.jpg"

    useEffect(() => {
        setLoading(true)

        const img = new Image()
        img.onload = () => setLoading(false)
        img.src = url

    }, [, src])

    return(
        <Tile {...props}>{
            !loading ?
                <img
                    src={url}
                    className="w-full h-full object-cover rounded-xl animate-in fade-in"
                />:
                <Loading />
        }</Tile>
    )
}