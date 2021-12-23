import React from "react";
import { CenterAlignedFlexStartColumnContainer } from "../../../StyleLibrary/Global/containerStyles";
import {
	FancyItemListingPageFancyItemCardImage,
	FancyItemListPageCategoryCard,
	FancyItemListingPageFancyItemDetails,
	FancyItemListingPageFancyItemName,
	FancyItemListingPageFancyItemSubtitle,
	FancyItemListingPageFancyItemCard,
} from "./../Styles/FancyItemListing";

const FancyItemListingPage = () => {
	return (
		<CenterAlignedFlexStartColumnContainer
			minHeight="100vh"
			background="radial-gradient(123.05% 63.36% at 50% 50%, rgba(1, 10, 35, 0.83) 0%, #474B6C 100%);"
		>
			<FancyItemListPageCategoryCard>
				The Philosophers
			</FancyItemListPageCategoryCard>
			<CenterAlignedFlexStartColumnContainer marginTop="24px">
				<FancyItemListingPageFancyItemCard>
					<FancyItemListingPageFancyItemCardImage src="https://res.cloudinary.com/antilibrary/image/upload/v1585376256/Antilibrary/220px-Taleb_mug_tvhdqa.jpg" />
					<FancyItemListingPageFancyItemDetails>
						<FancyItemListingPageFancyItemName>
							Nassim Taleb
						</FancyItemListingPageFancyItemName>
						<FancyItemListingPageFancyItemSubtitle>
							The Philosopher,Author
						</FancyItemListingPageFancyItemSubtitle>
					</FancyItemListingPageFancyItemDetails>
				</FancyItemListingPageFancyItemCard>
				<FancyItemListingPageFancyItemCard>
					<FancyItemListingPageFancyItemCardImage src="https://res.cloudinary.com/antilibrary/image/upload/v1585376256/Antilibrary/220px-Taleb_mug_tvhdqa.jpg" />
					<FancyItemListingPageFancyItemDetails>
						<FancyItemListingPageFancyItemName>
							Seneca
						</FancyItemListingPageFancyItemName>
						<FancyItemListingPageFancyItemSubtitle>
							The Philosopher
						</FancyItemListingPageFancyItemSubtitle>
					</FancyItemListingPageFancyItemDetails>
				</FancyItemListingPageFancyItemCard>
				<FancyItemListingPageFancyItemCard>
					<FancyItemListingPageFancyItemCardImage src="https://res.cloudinary.com/antilibrary/image/upload/v1585376256/Antilibrary/220px-Taleb_mug_tvhdqa.jpg" />
					<FancyItemListingPageFancyItemDetails>
						<FancyItemListingPageFancyItemName>
							Marcus Aurelius
						</FancyItemListingPageFancyItemName>
						<FancyItemListingPageFancyItemSubtitle>
							The Philosopher
						</FancyItemListingPageFancyItemSubtitle>
					</FancyItemListingPageFancyItemDetails>
				</FancyItemListingPageFancyItemCard>
			</CenterAlignedFlexStartColumnContainer>
		</CenterAlignedFlexStartColumnContainer>
	);
};

export default FancyItemListingPage;
