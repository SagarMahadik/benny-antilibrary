import React from "react";
import {
	FancyItemDashboardListingContainer,
	FancyItemDashboardProfile,
	FancyItemProfilePic,
	FancyItemNameContainer,
} from "Modules/FancyItemAdminDashboard/Styles/DashboardStyles.js";

import { fancyItemProfile } from "Modules/FancyItemAdminDashboard/SeedData/SeedData.js";

const FancyItemListing = ({ category }) => {
	const createFilteredFancyItemList = () => {
		if (category !== "") {
			const filteredFancyItemList = fancyItemProfile.filter(
				(fancyItem) => fancyItem.category === category
			);
			return filteredFancyItemList;
		} else {
			return fancyItemProfile;
		}
	};

	return (
		<>
			<FancyItemDashboardListingContainer>
				{createFilteredFancyItemList().map((fancyItem) => {
					return (
						<FancyItemDashboardProfile>
							<FancyItemProfilePic
								src={fancyItem.fancyItemProfilePic}
							></FancyItemProfilePic>
							<FancyItemNameContainer>
								{fancyItem.fancyItemName}
							</FancyItemNameContainer>
						</FancyItemDashboardProfile>
					);
				})}
			</FancyItemDashboardListingContainer>
		</>
	);
};

export default FancyItemListing;
