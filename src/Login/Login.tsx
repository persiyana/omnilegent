import { Wrapper } from "./Login.styles";


const Login: React.FC = () => {
    return (
        <Wrapper>
            <h1>Please login</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />    
            <button type="submit">Login</button>   
        </Wrapper>
    )
}

export default Login;