import { useState } from "react"
import {register} from '../../Redux/Operations'
import { useDispatch } from "react-redux";
 
export const SignUpForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispactch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === 'name') {
            setUserName({[name]: value});
            return;
        };
        if(name === 'email') {
            setEmail({[name]: value});
            return;
        };
        if(name === 'password') {
            setPassword({[name]: value});
            return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispactch(register({userName, email, password}))
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label>
                <input type="text" name="name" onChange={handleChange}/>
                    Name
                </label>
                <br/>
                <label>
                    <input type="text" name="email" onChange={handleChange}/>
                    Email
                </label>
                <br/>
                <label>
                    <input type="text" name="password" onChange={handleChange}/>
                    Password
                </label>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}