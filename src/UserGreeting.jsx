

function UserGreeting(props){
    const welcomeMessage = <h1>Welcome {props.Username}</h1>
    const loginMessage = <h1>Please Log In {props.Username}</h1>

    return(props.isLoggedIn ? welcomeMessage : loginMessage) 
}

export default UserGreeting