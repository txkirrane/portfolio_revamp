import Tile from "./Tile"
import { ExternalLink } from "react-feather"

export default ({label, location, square, icon, disabled, className}) => {
    return(
        <a
            href={location ?? ""}
            target="_blank"
        >
            <Tile
                square={square}
                className={`
                    transition ease-out
                    p-5 flex-col gap-5 justify-between items-end text-white select-none aspect-square
                    ${disabled ? "cursor-not-allowed saturate-0" : "cursor-pointer active:scale-95 hover:brightness-125 focus-visible:outline-none"} 
                    ${className}
                `}
            >
                {icon || <ExternalLink size={32} />}
                <h2 className="text-2xl self-start">{label ?? "GitHub"}</h2>
            </Tile>
        </a>
    )
}