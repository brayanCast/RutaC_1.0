const Menu = () => { 
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/cliente">
                Request
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </nav> 
    ); 
}; 
export default Menu;