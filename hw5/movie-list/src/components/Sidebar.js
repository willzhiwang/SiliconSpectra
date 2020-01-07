import React from 'react'
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
let openStyle;
let navStyle;
const Sidebar = (props) => {
    if (props.isOpen === true) {

        openStyle = {
            width: '500px',
        };
        navStyle = {
            transition: 'all 0.9s',
            marginLeft: '0px',
        }
    }
    else {
        openStyle = {
            width: '0px',
        };
        navStyle = {
            marginLeft: '-500px',
            transition: 'all 0.9s',
        }
    }

    return (
        <div className="sidebar" style={openStyle} >
            <Nav style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "50px 0" }}>
                <NavItem>
                    <Button color="danger" className="sidebar-item" style={navStyle} onClick={props.menuHandler}>
                        Close
                    </Button>
                </NavItem>
                <hr />
                <NavItem>
                    <Link className="sidebar-link" style={navStyle} to='/'>HomePage</Link>
                    <hr />
                </NavItem>
                <NavItem>
                    <Link className="sidebar-link" style={navStyle} to='/movieslist'>Movies List</Link>
                    <hr />
                </NavItem>
                <NavItem>
                    <Link className="sidebar-link" style={navStyle} to='/likedmovieslist'>Liked Movies List</Link>
                    <hr />
                </NavItem>
                <NavItem>
                    <Link className="sidebar-link" style={navStyle} to='/blockedmovieslist'>Blocked Movies List</Link>
                    <hr />
                </NavItem>
            </Nav>
        </div>
    )
}
export default Sidebar
