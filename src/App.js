import logo from "./logo.svg";
import "./App.css";
import FancyItemProfileMain from "./Modules/FancyItemProfile/Components/FancyItemProfileMain";
import FancyItemListingPage from "./Modules/FancyItemListingPage/Components/FancyItemListingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./Routes/Routes";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route component={Routes} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
