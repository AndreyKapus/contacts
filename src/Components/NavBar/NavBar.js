import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <h1>Contacts</h1>
            <NavLink to='/signup'>Sign up</NavLink>
            <br/>
            <NavLink to='login'>Login</NavLink>
        </div>
    )
};
