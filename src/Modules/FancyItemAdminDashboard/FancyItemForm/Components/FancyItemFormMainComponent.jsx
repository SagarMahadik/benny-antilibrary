import React from "react";
import {
	FancyItemFormMainContainer,
	FancyItemFormContainer,
} from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/FancyItemFormStyles.jsx";
import FancyItemFormSection from "../Styles/Molecules/FancyItemFormSection";
import FancyItemForm from "../Styles/Molecules/FancyItemForm";

const FancyItemFormMainComponent = () => {
	const [formActiveSection, setFormActiveSection] =
		React.useState("fancy-item-profile");
	return (
		<FancyItemFormMainContainer>
			<FancyItemFormSection
				formActiveSection={formActiveSection}
				setFormActiveSection={setFormActiveSection}
			/>
			<FancyItemForm formActiveSection={formActiveSection} />
		</FancyItemFormMainContainer>
	);
};

export default FancyItemFormMainComponent;
