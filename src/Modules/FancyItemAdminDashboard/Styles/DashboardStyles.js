import styled from "styled-components";
import { CenterAlignedFlexStartColumnContainer } from "../../../StyleLibrary/Global/containerStyles";
import { MotionImage } from "./../../../StyleLibrary/Global/rootStyles";
import { FlexColumnContainer } from "./../../../StyleLibrary/Global/containerStyles";
import {
	CenterAlignedColumnContainer,
	RowGridContainer,
	OverflowScrollContainer,
	WrappedRowContainer,
} from "../../../StyleLibrary/Global/containerStyles";

export const FancyItemDashboardMainContainer = styled(
	CenterAlignedFlexStartColumnContainer
)`
	width: 100%;
	height: auto;
	background: linear-gradient(243.25deg, #022146 9.13%, #093f3c 106.67%);
`;

export const FancyItemDashboardHeader = styled(CenterAlignedColumnContainer)`
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 64px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.15px;
	margin: 0;
	padding: 0;
	color: #ffffff;
`;

export const FancyItemCategoryDrawerContainer = styled(WrappedRowContainer)`
	padding: 26px 0px;
	width: 65%;
	height: 94px;
	background: linear-gradient(
		89.75deg,
		rgba(60, 126, 225, 0.16) 17.47%,
		rgba(222, 60, 225, 0.18) 97.53%
	);
	border: 1px solid #ffffff;
	margin: 50px;
`;

export const FancyItemCategoryButton = styled(CenterAlignedColumnContainer)`
	padding: 7px 12px;
	width: auto;
	height: 42px;
	border-radius: 10px;
	margin: 10px 25px;
	border: 2px solid #f08268;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	text-align: center;
	color: #ffffff;
	background-color: ${(props) =>
		props.selected ? "rgba(255,255,255,0.3)" : "transparent"};
`;

export const FancyItemDashboardListingContainer = styled(WrappedRowContainer)`
	width: 1227px;
	height: auto;
	padding-bottom: 100px;
`;

export const FancyItemDashboardProfile = styled(CenterAlignedColumnContainer)`
	width: 369px;
	height: 379px;
	filter: drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.51));
	border-radius: 25px;
	border: 1px solid white;
	margin-bottom: 30px;
`;

export const FancyItemProfilePic = styled.img`
	width: 144px;
	height: 209px;
	background: linear-gradient(
		332.86deg,
		rgba(0, 0, 0, 0.72) 14.05%,
		rgba(0, 0, 0, 0) 86.01%
	);
	border-radius: 388px;
	object-fit: cover;
`;

export const FancyItemNameContainer = styled(CenterAlignedColumnContainer)`
	width: 239px;
	height: 42px;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 36px;
	line-height: 42px;
	align-items: center;
	color: #ffffff;
	margin: 5px;
`;

export const FancyItemDashboardOverlayContainer = styled(
	CenterAlignedColumnContainer
)`
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	border: 1px solid pink;
	position: fixed;
	z-index: 1;
`;

export const FancyItemFormWrapper = styled(CenterAlignedColumnContainer)`
	width: 80%;
	height: 100%;
	position: absolute;
	z-index: 2;
`;

export const BookFormWrapper = styled(CenterAlignedColumnContainer)`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.85);
	position: absolute;
`;
