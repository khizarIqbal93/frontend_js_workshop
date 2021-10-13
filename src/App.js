import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyNav from "./components/Nav.js";
import CarDisplay from "./components/Cards";
import Car from "./components/Car";
import AddCar from "./components/Form";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<MyNav></MyNav>

				<Switch>
					<Route path="/cars/:id">
						<Car></Car>
					</Route>
					<Route path="/add/">
						<AddCar></AddCar>
					</Route>
					<Route path="/cars">
						<CarDisplay></CarDisplay>
					</Route>
					<Route path="/">
						<Home></Home>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
