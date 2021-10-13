import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";

function AddCar() {
	const [make, setMake] = useState("");
	const [model, setModel] = useState("");
	const [year, setYear] = useState("");
	const [color, setColor] = useState("");
	const [url, SetUrl] = useState("");
	const [submited, setSubmitted] = useState(false);
	console.log(submited);

	return (
		<form
			className="comment"
			onSubmit={(event) => {
				event.preventDefault();
				axios
					.post(`http://localhost:8080/api/cars`, {
						make: make,
						model: model,
						year: year,
						color: color,
						img_url: url,
					})
					.then(() => {
						setSubmitted(true);
					});
			}}
		>
			<label for="make">Make</label>
			<input
				// disabled={user.username ? false : true}
				className="comment-box"
				type="text"
				id="make"
				placeholder="enter make here"
				value={make}
				onChange={(event) => {
					setMake(event.target.value);
				}}
			></input>
			<label for="model">Model</label>
			<input
				className="comment-box"
				type="text"
				id="model"
				placeholder="enter model here"
				value={model}
				onChange={(event) => {
					setModel(event.target.value);
				}}
			></input>
			<label for="year">Year</label>
			<input
				className="comment-box"
				type="text"
				id="year"
				placeholder="enter year here"
				value={year}
				onChange={(event) => {
					setYear(event.target.value);
				}}
			></input>
			<label for="color">Color</label>
			<input
				className="comment-box"
				type="text"
				id="year"
				placeholder="enter color here"
				value={color}
				onChange={(event) => {
					setColor(event.target.value);
				}}
			></input>
			<label for="img_url">Image url</label>
			<input
				className="comment-box"
				type="text"
				id="img_url"
				placeholder="enter url here"
				value={url}
				onChange={(event) => {
					SetUrl(event.target.value);
				}}
			></input>
			<h3>{submited ? "Car added" : "Hit submit to add"}</h3>
			{/* <button type="submit" className="primary">
				submit
			</button> */}
			<Button variant={submited ? "success" : "primary"} type="submit">
				Submit
			</Button>
		</form>
	);
}

export default AddCar;
