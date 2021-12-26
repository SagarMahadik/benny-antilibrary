import React from "react";
import {
	FancyItemFormInputContainer,
	FancyItemFormPreviewContainer,
	InputTextBox,
	InputTextBoxLarge,
} from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/FancyItemFormStyles.jsx";
import { SpaceBetweenRowContainer } from "StyleLibrary/Global/containerStyles.js";

import SocialMediaInfo from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/Molecules/FancyItemForm/FancyItemProfileForm/SocialMediaInfo.jsx";
import CategorySelectionDrawer from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/Molecules/FancyItemForm/FancyItemProfileForm/CategorySelectionDrawer.jsx";

const FancyItemProfileForm = () => {
	const [category, setCategory] = React.useState("");
	return (
		<SpaceBetweenRowContainer>
			<FancyItemFormInputContainer>
				Fancy Item Profile Form
				<InputTextBox placeholder="Enter Name for Fancy Item"></InputTextBox>
				<InputTextBoxLarge placeholder="Enter Description in brief"></InputTextBoxLarge>
				<SocialMediaInfo />
				<CategorySelectionDrawer />
			</FancyItemFormInputContainer>

			<FancyItemFormPreviewContainer />
		</SpaceBetweenRowContainer>
	);
};

export default FancyItemProfileForm;
