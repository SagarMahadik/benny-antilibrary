import React from "react";

import {
	FancyItemSocialMediaContainer,
	SocialMediaIcon,
} from "../../Styles/FancyItemProfileStyles";

const FancyItemSocialMedia = ({ fancyItemSocialMediaLinks }) => {
	const getSocialMediaIcons = (siteType) => {
		console.log(siteType);
		switch (siteType) {
			case "Twitter":
				return "https://res.cloudinary.com/antilibrary/image/upload/v1639288911/Antilibrary/twitter-svgrepo-com_1_ac5z8p.svg";

			case "Reddit":
				return "https://res.cloudinary.com/antilibrary/image/upload/v1639288911/Antilibrary/reddit-svgrepo-com_1_qxp3a2.svg";

			case "Wikipedia":
				return "https://res.cloudinary.com/antilibrary/image/upload/v1639288911/Antilibrary/wikipedia-svgrepo-com_1_vruwtq.svg";

			case "Personal Website":
				return "https://res.cloudinary.com/antilibrary/image/upload/v1639288837/Antilibrary/PersonalWebsite_h2abay.svg";
		}
	};

	return (
		<>
			<FancyItemSocialMediaContainer>
				{fancyItemSocialMediaLinks.map((socialMediaLink) => {
					return (
						<a href={socialMediaLink.socialMediaLinkURL}>
							<SocialMediaIcon
								src={getSocialMediaIcons(socialMediaLink.socialMediaPlatform)}
							/>
						</a>
					);
				})}
			</FancyItemSocialMediaContainer>
		</>
	);
};

export default FancyItemSocialMedia;
