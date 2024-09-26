import { useEffect, useState } from "react"

const Users = (props) =>{
    // const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);
    const updateCounter = () =>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log('UseEffect functional');
        
        const timer = setInterval(() => {
            console.log("Functional set Interval");
        }, 1000);

        return ()=>{
            console.log("use Effect Return. ");
            clearInterval(timer);
            
        }

    })
    return(
        <div className="card-container">
            <h2>Name: {props.name}</h2>
            <h3>Location: ABC</h3>
            <h4>Contact Details</h4>
            {/* <h4>Count : {count}</h4> */}
            {/* <h4>Count 2 : {count2}</h4> */}
            {/* <button onClick={updateCounter}>+1</button> */}
        </div>
    )
}
export default Users