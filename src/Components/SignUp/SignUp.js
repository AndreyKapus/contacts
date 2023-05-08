export const SignUpForm = () => {
    return (
        <>
            <form>
                <label>
                    <input type="text" name="email"/>
                    Email
                </label>
                <br/>
                <label>
                    <input type="text" name="password"/>
                    Password
                </label>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}