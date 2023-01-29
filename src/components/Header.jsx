import {NavLink} from 'react-router-dom'
function Header() {

    const headerStyles = {
        boxShadow: '0px -6px 40px -13px rgba(0,0,230,0.5)',
        padding: '5px 25px',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        zIndex: 99,
        marginBottom: '50px',
    }

    const menuItemStyles = {
        listStyleType: 'none',
        display: 'inline',
        fontSize: '14px',
        
    }
  return (
    <header style ={headerStyles}>
        <div className="logo">
            <img src='images/Feedback-App-Logo.svg' style={{width: "180px",}}></img>
        </div>
        <div className="menuItems">
            <ul style={menuItemStyles}>
                <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
                <li><NavLink to='/about' activeClassName='active'>About</NavLink></li>
               
            </ul>
        </div>
    </header>
    
  )
}

export default Header