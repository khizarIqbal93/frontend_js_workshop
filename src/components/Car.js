import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { Button } from "react-bootstrap";

function Car() {
	const [car, setCar] = useState({});
	const car_id = useParams();
	let history = useHistory();
	const redirect = () => {
		history.push("/cars");
	};
	function del() {
		axios.delete(`http://localhost:8080/api/cars/${car_id.id}`).then(() => {
			redirect();
		});
	}

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/cars/${car_id.id}`)
			.then((response) => {
				setCar(response.data);
			});
	}, []);

	return (
		<div class="car">
			<div class="c-image">
				<img
					src={car.img_url}
					alt={car.make}
					class="product__image"
					height="500px"
					width="auto"
				/>
			</div>

			<div class="c-data">
				<h3 class="product__title">
					{car.make} {car.model}
				</h3>
				<p class="product__description">{car.year}</p>
				<p class="product__description">Available in {car.color}</p>
			</div>

			<Button
				variant="danger"
				onClick={(event) => {
					event.preventDefault();
					del();
				}}
			>
				🗑️ Delete
			</Button>
		</div>
	);
}
export default Car;
