export default ({ children, className }) => {
    return(
        <div
            className={`
                p-5 mx-auto
                grid gap-3
                grid-cols-1 sm:grid-cols-3
                max-w-5xl
            `}
        >
            {children}
        </div>
    )
}