import React from "react";
import {
	FancyItemFormInputContainer,
	FancyItemFormPreviewContainer,
	InputTextBox,
	InputTextBoxLarge,
	SocialMediaInputGrid,
	SocialMediaIcon,
} from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/FancyItemFormStyles.jsx";
import { SpaceBetweenRowContainer } from "StyleLibrary/Global/containerStyles.js";
import Twitter from "StyleLibrary/Icons/SocialMediaIcons/Twitter.jsx";

const FancyItemProfileForm = () => {
	return (
		<SpaceBetweenRowContainer>
			<FancyItemFormInputContainer>
				Fancy Item Profile Form
				<InputTextBox placeholder="Enter Name for Fancy Item"></InputTextBox>
				<InputTextBoxLarge placeholder="Enter Description in brief"></InputTextBoxLarge>
				<SocialMediaInputGrid>
					<SocialMediaIcon>
						<Twitter />
					</SocialMediaIcon>
					<InputTextBox placeholder="Enter Twitter profile link"></InputTextBox>
				</SocialMediaInputGrid>
				<SocialMediaInputGrid>
					<SocialMediaIcon></SocialMediaIcon>
					<InputTextBox></InputTextBox>
				</SocialMediaInputGrid>
				<SocialMediaInputGrid>
					<SocialMediaIcon></SocialMediaIcon>
					<InputTextBox></InputTextBox>
				</SocialMediaInputGrid>
				<SocialMediaInputGrid>
					<SocialMediaIcon></SocialMediaIcon>
					<InputTextBox></InputTextBox>
				</SocialMediaInputGrid>
			</FancyItemFormInputContainer>

			<FancyItemFormPreviewContainer />
		</SpaceBetweenRowContainer>
	);
};

export default FancyItemProfileForm;
