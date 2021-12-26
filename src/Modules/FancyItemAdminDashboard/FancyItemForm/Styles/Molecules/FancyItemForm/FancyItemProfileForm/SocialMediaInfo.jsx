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
import Twitter from "StyleLibrary/Icons/SocialMediaIcons/Twitter.jsx";
import Wikipedia from "StyleLibrary/Icons/SocialMediaIcons/Wikipedia.jsx";
import Reddit from "StyleLibrary/Icons/SocialMediaIcons/Reddit.jsx";
import Youtube from "StyleLibrary/Icons/SocialMediaIcons/Youtube.jsx";
import PersonalWebsite from "StyleLibrary/Icons/SocialMediaIcons/PersonalWebsite.jsx";

const SocialMediaInfo = () => {
	return (
		<>
			<SocialMediaInputGrid>
				<SocialMediaIcon>
					<Twitter />
				</SocialMediaIcon>
				<InputTextBox placeholder="Enter Twitter Profile link"></InputTextBox>
			</SocialMediaInputGrid>
			<SocialMediaInputGrid>
				<SocialMediaIcon>
					<Wikipedia />
				</SocialMediaIcon>
				<InputTextBox placeholder="Enter Wikipedia Profile link"></InputTextBox>
			</SocialMediaInputGrid>
			<SocialMediaInputGrid>
				<SocialMediaIcon>
					<Youtube />
				</SocialMediaIcon>
				<InputTextBox placeholder="Enter Youtube Channel link"></InputTextBox>
			</SocialMediaInputGrid>
			<SocialMediaInputGrid>
				<SocialMediaIcon>
					<Reddit />
				</SocialMediaIcon>
				<InputTextBox placeholder="Enter Reddit Profile link"></InputTextBox>
			</SocialMediaInputGrid>
			<SocialMediaInputGrid>
				<SocialMediaIcon>
					<PersonalWebsite />
				</SocialMediaIcon>
				<InputTextBox placeholder="Enter Personal Website link"></InputTextBox>
			</SocialMediaInputGrid>
		</>
	);
};

export default SocialMediaInfo;
