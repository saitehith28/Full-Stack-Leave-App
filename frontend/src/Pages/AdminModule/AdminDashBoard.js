import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
function AdminDashBoard() {
    return (
        <div>
            <Navbar>
                <NavbarBrand href="/">LeaveApp</NavbarBrand>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link to="/allleave">All Request</Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>Logout</NavbarText>
            </Navbar>
            <h1>Hello Admin</h1>
        </div>
    )
}

export default AdminDashBoard;