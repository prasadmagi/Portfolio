import './Navbar.css'
function Navbar() {

    return (
        <div className="nav">
            <div className="nav-logo">
                <h3>Logo</h3>  
            </div>
            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar