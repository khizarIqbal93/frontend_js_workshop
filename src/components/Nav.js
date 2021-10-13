import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNav() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand>
						<img
							src="https://ecs.co.uk/wp-content/themes/ecs/dist/images/logo_6957f598.png"
							height="50px"
						/>{" "}
						Whips 🚘
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>

							<Nav.Link href="/cars">Cars</Nav.Link>

							<NavDropdown title="Options" id="basic-nav-dropdown">
								<NavDropdown.Item href="/add">add a car</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default MyNav;
