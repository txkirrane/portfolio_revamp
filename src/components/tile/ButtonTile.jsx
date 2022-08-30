import Tile from "./Tile"
import { ExternalLink } from "react-feather"

export default ({label, location, square, icon, disabled, className}) => {
    return(
        <Tile
            square={square}
            onClick={() => window.open(location ?? "", "_blank")}
            className={`
                transition
                p-5 flex-col gap-5 justify-between items-end text-white select-none
                ${disabled ? "cursor-not-allowed saturate-0" : "cursor-pointer active:brightness-125"} 
                ${className}
            `}
        >
            {icon || <ExternalLink size={32} />}
            <h2 className="text-3xl self-start">{label ?? "GitHub"}</h2>
        </Tile>
    )
}