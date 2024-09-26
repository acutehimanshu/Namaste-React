import React from "react";
class UsersClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.name+"Constructor involed");
        
        // this.state = {
        //     count: 0,
        //     count2: 0,
        // }
        this.state = {
            userInfo : {
                name: "dummy",
                location:"Default"
            }
        }
    }

    async componentDidMount(){
        console.log(this.props.name+"Component Did Mount");

        const data = await fetch('https://api.github.com/users/acutehimanshu');
        const json = await data.json();
        console.log("API");
        
        console.log(json);
        await this.setState({ userInfo : json});
        console.log(this.state.userInfo);

        
    }

    componentDidUpdate(){
        console.log("component Did Update");
        
    }

    componentWillUnmount(){
        console.log('component Will Unmount');
    }
    
    
    render(){
        // console.log(this.props.name+'Render method invoked');
        console.log(this.state.userInfo);
        
        // we can also do like 
        const {name, node_id} = this.state.userInfo;
        
        return(
            <div className="card-container">
                <h2>Name: {name}</h2>
                <h3>Location: {node_id}</h3>
                <h4>Contact Details</h4>
                {/* <h4>Count: {this.state.count}</h4> */}
                {/* <button onClick={()=>{
                    // this.state.count = this.state.count+1 this is wrong
                    // NEVER UPDATE VIRABLES DIRECTLY
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>+1</button> */}
            </div>
        )
    }
}
export default UsersClass;