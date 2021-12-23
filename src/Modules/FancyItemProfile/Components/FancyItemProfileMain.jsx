import React from "react";
import { FancyItemProfileMainContainer } from "../Styles/FancyItemProfileStyles";
import FancyItem from "./Molecules/FancyItem";
import FancyItemSocialMedia from "./Molecules/FancyItemSocialMedia";
import FancyItemBooks from "./Molecules/FancyItemBooks";
import FancyItemVideos from "./Molecules/FancyItemVideos";
import FancyItemQuotes from "./Molecules/FancyItemQuotes";
import FancyItemBookRecommendations from "./Molecules/FancyItemBookRecommendations";
import { talebData } from "./../SeedData/taleb";

const FancyItemProfileMain = () => {
	const [fancyItem, setFancyItem] = React.useState(talebData);

	return (
		<FancyItemProfileMainContainer>
			<FancyItem
				fancyItemName={fancyItem.fancyItemName}
				fancyItemImageUrl={fancyItem.fancyItemImageUrl}
			/>
			<FancyItemSocialMedia
				fancyItemSocialMediaLinks={fancyItem.fancyItemSocialMediaLinks}
			/>
			<FancyItemBooks fancyItemBooks={fancyItem.fancyItemBooks} />
			<FancyItemVideos fancyItemVideos={fancyItem.fancyItemVideos} />
			<FancyItemQuotes />
			<FancyItemBookRecommendations
				fancyItemBookRecommendations={fancyItem.fancyItemBookRecommendations}
			/>
		</FancyItemProfileMainContainer>
	);
};

export default FancyItemProfileMain;
