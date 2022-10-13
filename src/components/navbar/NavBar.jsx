import { BrowserView, MobileView } from "react-device-detect";
import NavBarBrowser from "./NavBarBrowser";
import NavBarMobile from "./NavBarMobile";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import SearchBarNavbar from "./SearchBarNavbar/SearchBarNavbar";
import "./css/navBar.css";
import TopBar from "./TopBar";
 
const NavBar = (props) => {


  return (
    <nav className="nav-extended">
      <TopBar />
      <div className="container">
        <div className="row">
          <div className="col s2 m3 l3">
            <NavLink to="/">
              <span className="hide-on-small-only ">
                <span className="led"> MARKET BA</span>
              </span>
            </NavLink>
            <NavLink
              to="#"
              data-target="mobile-demo"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </NavLink>
          </div>
          <div className="col s8 m7 l7">
            <SearchBarNavbar
              placeholder="Ingresa un producto..."
              data={props.productos}
            />
          </div>
          <div className="col s2 m2 l2">
            <NavLink to="/cart">
              <CartWidget />
            </NavLink>
          </div>
        </div>

        <BrowserView>
    
          <NavBarBrowser categorias={props.categorias} />
        </BrowserView>
        <MobileView>
          <NavBarMobile categorias={props.categorias} />
        </MobileView>
      </div>
    </nav>
  );
};
export default NavBar;