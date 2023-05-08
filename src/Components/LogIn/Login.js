export const Login = () => {
    return(
        <>
            <form>
                <label>
                    <input type="text" name="email"/>
                    Email
                </label>
                <label>
                    <input type="text" name="password"/>
                    Password
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}