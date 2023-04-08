import Logo from '../Assets/footerlogo.png'

function Footer () {
    const style= {
        width: '100px',
        height: 'auto',
    }
    return (
      <footer>
        <div>
          <img className="chefs_im" style={style} src={Logo} alt='Logo' />
        </div>
        <ul className="nav_links">
          <li>Home</li>
          <li>About</li>
          <li>Reservations</li>
          <li>Menu</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>

        <article className="contact">
          <div className="address">
            <p>123 Main St. </p>
            <p>Chicago, IL 60601 </p>
            <p>United States</p>
          </div>

          <p className="cell">(312) 555-1234</p>

          <p className="email">info@llchicago.com</p>
        </article>

        <p className="copyrights">
          Copyright © 2023 Little Lemon™
        </p>
      </footer>
    );
}

export default Footer;