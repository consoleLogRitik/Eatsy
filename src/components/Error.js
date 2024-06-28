import { useRouteError } from "react-router-dom";


const Error = () => {
    const {status,statusText} = useRouteError()
    return (
        <>
        <div className="route-error">
        <img src="https://media.tenor.com/IW4RBQLx454AAAAe/panchayat-season2-panchayat.png" alt="error"></img>
        <h2>{status} : {statusText}</h2>
        </div>
        </>
    )
}
export default Error;