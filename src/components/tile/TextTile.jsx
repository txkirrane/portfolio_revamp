import Tile from "./Tile"

export default ({header, text, className, ...props}) => {
    return(
        <Tile
            className={`
                p-5 gap-3 overflow-y-auto
                ${className}
            `}
            {...props}
        >
            {header && <h2 className="text-3xl">{header}</h2>}
            {text && <p className="break-words">{text}</p>}
        </Tile>
    )
}