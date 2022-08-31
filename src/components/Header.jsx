function Header() {
  return (
    <Header>
        <div className="logo">
            <img src="src\Feedback App Logo.svg"></img>
        </div>
        <div className="menuItems">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
            </ul>
        </div>
    </Header>
    
  )
}

Header.defaultProps = {
    name: "Feedback App"
}
export default Header