import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { height } from "dom-helpers";
import { Link } from "react-router-dom";

function CarDisplay() {
	const [cars, setCars] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8080/api/cars").then((response) => {
			setCars(response.data);
		});
	}, []);

	return (
		<div style={{ margin: "auto", display: "flex", flexDirection: "row" }}>
			<ul style={{ display: "flex", flexDirection: "row" }}>
				{cars.map((x) => {
					return (
						<li style={{ "list-style-type": "none" }}>
							<Card
								style={{
									width: "18rem",
									height: "300px",
									padding: "5px",
									margin: "5px",
								}}
							>
								<Card.Img
									variant="top"
									src={x.img_url}
									max-width="100%"
									height="800px"
								/>
								<Card.Body>
									<Card.Title>
										{x.make} {x.model}
									</Card.Title>
									<Link to={`cars/${x.id}`}>
										<Button variant="primary">Learn more</Button>
									</Link>
								</Card.Body>
							</Card>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CarDisplay;
