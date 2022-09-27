export default ({ children, width, square, className, onClick }) => {
    return(
        <div
            className={`
                h-100 overflow-visible
                flex flex-col

                ${width ? width : "col-span-1"}
                ${square ? "aspect-square" : null}
                rounded-xl
                
                ${className}
            `}
            onClick={onClick || (() => {})}
        >
            {children}
        </div>
    )
}