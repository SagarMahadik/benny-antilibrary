import React from "react";
import {
	FancyItemFormSectionTitleContainer,
	FancyItemFormSectionTitle,
} from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/FancyItemFormStyles.jsx";
import { fancyItemFormSectionSeedData } from "Modules/FancyItemAdminDashboard/FancyItemForm/SeedData/fancyItemFormSection.js";

const FancyItemFormSection = ({ formActiveSection, setFormActiveSection }) => {
	return (
		<>
			<FancyItemFormSectionTitleContainer>
				{fancyItemFormSectionSeedData.map((section, index) => {
					return (
						<FancyItemFormSectionTitle
							key={index}
							onClick={() => setFormActiveSection(section.titleString)}
							active={formActiveSection === section.titleString}
						>
							{section.title}
						</FancyItemFormSectionTitle>
					);
				})}
			</FancyItemFormSectionTitleContainer>
		</>
	);
};

export default FancyItemFormSection;
