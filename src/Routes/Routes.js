import React from "react";
import { Route, Switch } from "react-router-dom";
import FancyItemListingPage from "./../Modules/FancyItemListingPage/Components/FancyItemListingPage";
import FancyItemProfileMain from "./../Modules/FancyItemProfile/Components/FancyItemProfileMain";
import FancyItemDashboardLandingPage from "Modules/FancyItemAdminDashboard/Components/FancyItemDashboardLandingPage.jsx";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={FancyItemListingPage} />
			<Route exact path="/fancyItem" component={FancyItemProfileMain} />
			<Route
				exact
				path="/adminDashboard"
				component={FancyItemDashboardLandingPage}
			/>
		</Switch>
	);
};

export default Routes;
