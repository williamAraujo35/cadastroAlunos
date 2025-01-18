export default function Titulo(props) {
    return(
        <div>
            <h1 className="px-5 py-2">
                {props.children}
            </h1>
            <hr className="border-4 border-blue-950"/>
        </div>
    )
}