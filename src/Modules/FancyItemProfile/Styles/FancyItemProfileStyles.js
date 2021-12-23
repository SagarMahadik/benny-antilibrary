import styled from "styled-components";

import { CenterAlignedFlexStartColumnContainer } from "../../../StyleLibrary/Global/containerStyles";
import {
	CenterAlignedColumnContainer,
	WrappedRowContainer,
	OverflowScrollContainer,
} from "./../../../StyleLibrary/Global/containerStyles";
import { MotionImage } from "./../../../StyleLibrary/Global/rootStyles";

export const FancyItemProfileMainContainer = styled(
	CenterAlignedFlexStartColumnContainer
)`
	background: radial-gradient(
		123.05% 63.36% at 50% 50%,
		rgba(1, 10, 35, 0.83) 0%,
		#474b6c 100%
	);
	height: 100%;
	width: 100%;
`;

export const FancyItemContainer = styled(CenterAlignedFlexStartColumnContainer)`
	height: auto;
`;

export const FancyItemImageContainer = styled(CenterAlignedColumnContainer)`
	border-radius: 388px;
	border: 2px solid #f3d6b1;
	padding: 4px;
	margin-top: 16px;
`;

export const FancyItemImage = styled(MotionImage)`
	width: 143px;
	height: 208px;
	border-radius: 388px;
	object-fit: cover;
	filter: grayScale(1);
`;

export const FancyItemName = styled.h3`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.15px;
	color: rgba(255, 255, 255, 0.87);
`;

export const FancyItemSocialMediaContainer = styled(WrappedRowContainer)`
	width: 60%;
`;

export const SocialMediaIcon = styled(MotionImage)`
	width: 40px;
	height: 40px;
	object-fit: cover;
`;

export const FancyItemProfileSectionName = styled(CenterAlignedColumnContainer)`
	font-family: Noto Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 24px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.15px;

	color: #c3cacf;
`;

export const FancyItemBooksContainer = styled(
	CenterAlignedFlexStartColumnContainer
)`
	width: 100%;
	height: 30vh;
	background: rgba(0, 0, 0, 0.15);
	box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.2);
	margin-top: 24px;
`;

export const FancyItemBookDetailsContainer = styled(OverflowScrollContainer)`
	width: 96%;
`;

export const FancyItemBookDetails = styled(
	CenterAlignedFlexStartColumnContainer
)`
	width: 84px;
	height: 187px;
	margin: 6px;
`;

export const FancyItemBookImage = styled(MotionImage)`
	width: 84px;
	height: 120px;
	border-radius: 4px;
`;

export const FancyItemBookName = styled(CenterAlignedFlexStartColumnContainer)`
	font-family: Noto Sans;
	font-size: 12px;
	width: 60px;
	height: 30px;
	white-space: normal;
	letter-spacing: 0.15px;
	color: #c3cacf;
`;

export const FancyItemVideosContainer = styled(
	CenterAlignedFlexStartColumnContainer
)`
	width: 100%;
	height: 28vh;
	margin-top: 24px;
	background: rgba(0, 0, 0, 0.26);
	box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.2);
`;

export const FancyItemVideoDetailsContainer = styled(OverflowScrollContainer)`
	width: 90%;
`;

export const FancyItemVideoDetails = styled(CenterAlignedColumnContainer)`
	width: 128px;
	height: 180px;
	margin: 6px;
`;

export const FancyItemVideoThumbnail = styled(MotionImage)`
	width: 128px;
	height: 72px;
	border-radius: 10px;
	background: #ffffff;
`;

export const FancyItemVideoName = styled(CenterAlignedColumnContainer)`
	font-family: Noto Sans;
	font-size: 12px;
	white-space: normal;
	letter-spacing: 0.15px;
	color: #c3cacf;
	margin-top: 16px;
	width: 128px;
	height: 72px;
`;

export const FancyItemQuotesContainer = styled(CenterAlignedColumnContainer)`
	width: 100%;
	height: auto;
	margin-top: 24px;
`;

export const FancyItemQuotesOverflowContainer = styled(OverflowScrollContainer)`
	width: 96%;
	margin-top: 24px;
`;

export const FancyItemQuoteContainer = styled(CenterAlignedColumnContainer)`
	min-width: 240px;
	height: 180px;
	padding: 4px;
	background: rgba(0, 0, 0, 0.26);
	border: 1px solid rgba(255, 255, 255, 0.8);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	margin: 4px;
`;

export const FancyItemQuoteText = styled.h3`
	font-family: Noto Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	white-space: normal;
	line-height: 24px;
	letter-spacing: 0.15px;
	color: #ffffff;
	margin: 0;
`;

export const FancyItemScrollStatus = styled(CenterAlignedColumnContainer)`
	width: 116.67px;
	height: 5px;
	margin-top: 10px;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 25px;
`;

export const FancyItemScrollMarker = styled(CenterAlignedColumnContainer)`
	width: 20px;
	height: 5px;
	background: #ffffff;
	border-radius: 25px;
`;
