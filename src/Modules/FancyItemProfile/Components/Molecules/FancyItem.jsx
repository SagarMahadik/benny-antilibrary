import React from "react";

import {
	FancyItemContainer,
	FancyItemImageContainer,
	FancyItemImage,
	FancyItemName,
} from "../../Styles/FancyItemProfileStyles";

const FancyItem = ({ fancyItemName, fancyItemImageUrl }) => {
	return (
		<>
			<FancyItemContainer>
				<FancyItemImageContainer>
					<FancyItemImage src={fancyItemImageUrl} />
				</FancyItemImageContainer>
				<FancyItemName>{fancyItemName}</FancyItemName>
			</FancyItemContainer>
		</>
	);
};

export default FancyItem;
