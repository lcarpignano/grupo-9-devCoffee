export default function Header() {
  return (
    <header>
      <div className="header-nav">
        <div className="header-nav-left">
          <i className="fas fa-bars icon"></i>

          <a href="/" className="logo">
            <i className="icon fas fa-file-code"></i> Coffee Break
          </a>
        </div>

        <div className="header-nav-right">
          <div className="header-nav-right-dkt">
            <div className="header-nav-bar">
              <a href="http://localhost:3030/">Salir</a>
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
            <a href="/">
              <i className="fab fa-instagram icon"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
