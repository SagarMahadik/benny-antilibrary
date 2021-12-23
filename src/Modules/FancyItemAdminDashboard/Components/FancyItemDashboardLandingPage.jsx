import React from "react";
import {
	FancyItemDashboardHeader,
	FancyItemDashboardMainContainer,
} from "Modules/FancyItemAdminDashboard/Styles/DashboardStyles.js";

import FancyItemCategoryDrawer from "Modules/FancyItemAdminDashboard/Components/Molecules/FancyItemCategoryDrawer.jsx";
import FancyItemListing from "Modules/FancyItemAdminDashboard/Components/Molecules/FancyItemListing.js";
import FancyItemFormMainComponent from "Modules/FancyItemAdminDashboard/FancyItemForm/Components/FancyItemFormMainComponent.jsx";

import { CenterAlignedColumnContainer } from "StyleLibrary/Global/containerStyles.js";
import {
	FancyItemDashboardOverlayContainer,
	FancyItemFormWrapper,
} from "Modules/FancyItemAdminDashboard/Styles/DashboardStyles.js";

const FancyItemDashboardLandingPage = () => {
	//User will select a category
	//Fancyitems to be filtered by category

	const [category, setCategory] = React.useState("");

	return (
		<>
			<FancyItemDashboardMainContainer>
				<FancyItemDashboardOverlayContainer />
				<FancyItemFormWrapper>
					<FancyItemFormMainComponent />
				</FancyItemFormWrapper>
				<FancyItemDashboardHeader>Fancy Items</FancyItemDashboardHeader>
				<FancyItemCategoryDrawer
					category={category}
					setCategory={setCategory}
				/>
				<FancyItemListing category={category} />
			</FancyItemDashboardMainContainer>
		</>
	);
};

export default FancyItemDashboardLandingPage;
