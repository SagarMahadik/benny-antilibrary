import React from "react";

import {
	FancyItemCategoryDrawerContainer,
	FancyItemCategoryButton,
} from "Modules/FancyItemAdminDashboard/Styles/DashboardStyles.js";

import { categoryNames } from "Modules/FancyItemAdminDashboard/SeedData/SeedData.js";

const FancyItemCategoryDrawer = ({ category, setCategory }) => {
	let stateCategory = category;
	console.log(category);
	//console.log("category in child", categoryNames);

	const handleClick = (selectedCategory) => {
		//console.log(selectedCategory);
		//setCategory(selectedCategory);
	};

	return (
		<>
			<FancyItemCategoryDrawerContainer>
				{categoryNames.map((category) => {
					return (
						<FancyItemCategoryButton
							selected={category === stateCategory}
							onClick={() => handleClick(category)}
						>
							{category}
						</FancyItemCategoryButton>
					);
				})}
			</FancyItemCategoryDrawerContainer>
		</>
	);
};

export default FancyItemCategoryDrawer;
