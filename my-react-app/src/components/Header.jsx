import {Link} from 'react-router-dom'
const Header = () => {
    return (
      <div id='navigation'>
        <nav>
          <h2>Logo</h2>
          <span>
            <Link to="/">Home</Link></span>
          <span>
            <Link to="/about">About</Link></span>
          <span>
            <Link to="/contact">Contact</Link></span>
        </nav>
      </div>
    )
  }
  export default Header