import { Component } from "react";
import UsersClass from "./UsersClass";
import Users from "./Users";
import UserContext from "../utils/UserContext";
class About  extends Component {
    constructor(props){
        super(props);
        console.log("About us Parent Constructor Called");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount method Called");
        this.timer = setInterval(() => {
            console.log("set interval functionality");
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        console.log("Parent Render Method Called");
        
        return(
            <div >
                Logged in user: 
                <UserContext.Consumer className="p-4 m-4 font-bold">
                    {
                        (data)=>{
                            console.log(data);
                            return data.name;
                        }
                    }
                </UserContext.Consumer>
                <hr></hr>
                <h1> ABout us Class Component</h1>
                <UsersClass name={'first'} location={'First'} />
                <Users name={'Second'} />
                {/* <UsersClass name={'Thirt'} location={'Thirt'} /> */}
            </div>
        )
    }
}

export default About;