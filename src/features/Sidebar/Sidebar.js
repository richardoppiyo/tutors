import React from "react";
import './Sidebar.css';
// import {
//      NavLink
//   } from 'react-router-dom';
//   import Nav from 'react-bootstrap/Nav';
//   import Navbar from 'react-bootstrap/Navbar';
  
const Sidebar = () => (
    <div className="sidebar-div">
        <h1>This is the Sidebar</h1>
        <div>
            <h3>Tutors</h3>
            <h3>Explore Languages</h3>
            <h3>My Lessons</h3>
            <h3>Statistics</h3>
            <h3>Shopping Cart</h3>
        </div>
    </div>

)

export default Sidebar;



// const Sidebar = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    
    // const [showSidebar, setShowSidebar] = useState(false);
    // const location = useLocation();
  
    // const navActive = ({ isActive }) => (isActive ? { backgroundColor: '#96bf01', color: 'white' } : {});
  
    // const navLinkHelper = ({
    //   href, children, onClick,
    // }) => (
    //   <NavLink className="link-item" style={navActive} to={href} onClick={onClick}>
    //     {children}
    //   </NavLink>
    // );
  
    // const navLinks = () => (
    //   <>
    //     <Nav.Link href="/" as={navLinkHelper}>
    //       LAWYERS
    //     </Nav.Link>
    //     <Nav.Link href="/account" as={navLinkHelper}>
    //     <Nav.Link href="/reserve" as={navLinkHelper}>
    //       BOOK A LAWYER
    //     </Nav.Link>
    //     <Nav.Link href="/reservations" as={navLinkHelper}>
    //       MY RESERVATIONS
    //     </Nav.Link>
    //       MY ACCOUNT
    //     </Nav.Link>
    //   </>
    // );


    // return (
    //     <Nav className="navbar-links position-relative flex-column">
    //               {navLinks()}
    //             </Nav>
       
    //   );
    // };
    
    // export default Sidebar;
    