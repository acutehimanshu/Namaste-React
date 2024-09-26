import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    
    return (
        <>
        404
        <p>
        {err.status}
        </p>
        <br/>
        <p>{err.statusText}</p>
        <br/>
        {/* <p>{err.error.message}</p> */}
        <br/>
        {/* <p>{err.error.stack}</p> */}
        <br/>
        <p>{err.data}</p>
        </>
    )
}
export default Error;