import { useState } from "react"

export const SignUpForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;

      switch(e.target.name) {
        case name:
            setUserName({[name]: value});
            break;
        case email: 
            setEmail({[name]: value});
            break;
        case password: 
            setPassword({[name]: value});
            break;

            default: break;
      }
    };

    return (
        <>
            <form>
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