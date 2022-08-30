import Tile from "./Tile"

export default ({ children, className }) => {
    return(
        <Tile className={"grid grid-cols-2 grid-rows-2 gap-3 bg-transparent shadow-none " + className} >
            { children }
        </Tile>
    )
}