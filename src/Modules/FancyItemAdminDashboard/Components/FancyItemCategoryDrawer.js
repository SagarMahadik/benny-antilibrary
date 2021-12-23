import React from "react";
import {
	FancyItemCategoryDrawer,
	FancyItemCategoryButton,
} from "Modules/FancyItemAdminDashboard/Styles/DashboardStyles.js";

import { categoryNames } from "Modules/FancyItemAdminDashboard/SeedData/SeedData.js";

const FancyItemCategoryDrawer = ({ categoryNames }) => {
	return (
		<>
			<FancyItemCategoryDrawer>
				<FancyItemCategoryButton selected={true}>
					{fancyItemCategoryButton.map((categoryNames, index) => {
						return { categoryNames };
					})}
				</FancyItemCategoryButton>
			</FancyItemCategoryDrawer>
		</>
	);
};

export default FancyItemCategoryDrawer;
