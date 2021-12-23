import styled from "styled-components";
import { CenterAlignedFlexStartColumnContainer } from "../../../StyleLibrary/Global/containerStyles";
import { MotionImage } from "./../../../StyleLibrary/Global/rootStyles";
import { FlexColumnContainer } from "./../../../StyleLibrary/Global/containerStyles";
import {
	CenterAlignedColumnContainer,
	RowGridContainer,
} from "../../../StyleLibrary/Global/containerStyles";

export const FancyItemListPageCategoryCard = styled(
	CenterAlignedColumnContainer
)`
	width: 80%;
	height: 80px;
	background: radial-gradient(
		98.03% 859.47% at 1.97% 4.55%,
		#6c3d7c 0%,
		#33566f 38.54%,
		#2c673c 73.44%,
		#83342f 100%
	);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	font-size: 1.5em;
	color: white;
	text-align: center;
	font-family: "Roboto", sans-serif;
	margin-top: 24px;
`;

export const FancyItemListingPageFancyItemCard = styled(RowGridContainer)`
	width: 90%;
	height: 120px;
	grid-template-columns: 1fr 3fr;
	align-items: center;
	justify-content: center;
	align-content: center;
	justify-items: center;
	background: radial-gradient(
		98.03% 859.47% at 1.97% 4.55%,
		#2a314a 0%,
		rgba(24, 26, 39, 0.46) 100%
	);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	margin-top: 16px;
`;

export const FancyItemListingPageFancyItemCardImage = styled(MotionImage)`
	width: 70px;
	height: 100px;
	border-radius: 388px;
	object-fit: cover;
	margin-left: 10px;
`;

export const FancyItemListingPageFancyItemDetails = styled(
	CenterAlignedColumnContainer
)`
	height: 120px;
`;

export const FancyItemListingPageFancyItemName = styled.h3`
	font-family: Roboto, sans-serif;
	font-size: 18px;
	color: white;
	margin-top: -10px;
`;

export const FancyItemListingPageFancyItemSubtitle = styled.h3`
	font-family: Gothic A1;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 24px;
	display: flex;
	align-items: center;
	letter-spacing: 0.15px;
	color: rgba(255, 255, 255, 0.8);
	margin-top: -16px;
`;
