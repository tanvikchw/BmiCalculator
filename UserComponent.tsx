import * as React from "react";
import UserInterface from "./UserInterface";

class UserComponent extends React.Component<UserInterface, {}>{

    constructor (props:UserInterface){
        super(props);
    }
    public render(){
        return(
            <div>
                <h1>User Component</h1>
                hello, {this.props.name}
                <br />
                you are {this .props.age}years old
                <br />
                your address is {this.props.address}
                <br />
                you were born on {this.props.age}
                <br />
            </div>
        );
    }
}
export default UserComponent