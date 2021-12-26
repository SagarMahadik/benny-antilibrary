import React from "react";
import {
	FancyItemFormInputContainer,
	FancyItemFormPreviewContainer,
	InputTextBox,
	InputTextBoxLarge,
	SocialMediaInputGrid,
	SocialMediaIcon,
	CategoryButton,
} from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/FancyItemFormStyles.jsx";
import {
	SpaceBetweenRowContainer,
	WrappedRowContainer,
} from "StyleLibrary/Global/containerStyles.js";

import { categoryNames } from "Modules/FancyItemAdminDashboard/SeedData/SeedData.js";

const CategorySelectionDrawer = () => {
	const [category, setCategory] = React.useState("");
	return (
		<>
			Category
			<WrappedRowContainer>
				{categoryNames.map((categoryName, index) => {
					return (
						<CategoryButton
							key={index}
							onClick={() => setCategory(categoryName)}
							active={category === categoryName}
						>
							{categoryName}
						</CategoryButton>
					);
				})}
			</WrappedRowContainer>
		</>
	);
};

export default CategorySelectionDrawer;
