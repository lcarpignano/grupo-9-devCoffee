export default function Header() {
  return (
    <header>
      <div className="header-nav">
        <div className="header-nav-left">
          <i className="fas fa-bars icon"></i>

          {/* <% if (locals.isLogged === true) { %> */}
          <ul>
            <li>
              <a href="#">
                <img src="../../img/users/default.png" alt="User Avatar" />
                {/* <!-- <%= locals.userLogged.first_name %> --> */}
              </a>
              <ul className="dropdown">
                <li>
                  <a href="/">Mi cuenta</a>
                </li>
                <li>
                  <a href="/">Mis compras</a>
                </li>
                {/* <% if (locals.isAdmin === true) { %> */}
                <li>
                  <a href="/">Editar</a>
                </li>

                {/* <% } %> */}
                <li>
                  <a href="/users/logout">Log Out</a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <% } %> */}

          <a href="/" className="logo">
            <i className="icon fas fa-file-code"></i> Coffee Break
          </a>
        </div>

        <div className="header-nav-right">
          <div className="header-nav-right-dkt">
            <div className="header-nav-bar">
              {/* <% if (locals.isLogged === false) { %> */}
              <a href="/users/login">Ingresa</a>
              <a href="/users/register">Crea tu cuenta</a>
              {/* <% } %> */}
              <a href="/products/catalog">Nuestros Cafés</a>
            </div>
            <div className="header-nav-search-bar">
              <input type="search" name="search" id="search" />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="header-nav-right-icons">
            <a href="/products/shoppingCart">
              <i className="icon fas fa-shopping-cart"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram icon"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
