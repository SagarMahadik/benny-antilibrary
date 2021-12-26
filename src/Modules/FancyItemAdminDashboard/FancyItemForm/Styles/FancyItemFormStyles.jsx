import styled from "styled-components";
import { CenterAlignedFlexStartColumnContainer } from "StyleLibrary/Global/containerStyles.js";
import { MotionImage } from "StyleLibrary/Global/rootStyles";
import { FlexColumnContainer } from "StyleLibrary/Global/containerStyles";
import {
	CenterAlignedColumnContainer,
	RowGridContainer,
	OverflowScrollContainer,
	WrappedRowContainer,
	SpaceBetweenRowContainer,
} from "StyleLibrary/Global/containerStyles";

export const FancyItemFormMainContainer = styled(
	CenterAlignedFlexStartColumnContainer
)`
	width: 80%;
	height: 70vh;
	background: rgba(0, 0, 0, 0.5);
	color: white;
`;

export const FancyItemFormSectionTitleContainer = styled(WrappedRowContainer)`
	width: 40%;
	height: 60px;
`;

export const FancyItemFormSectionTitle = styled(CenterAlignedColumnContainer)`
	width: auto;
	height: 30px;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
	background: ${(props) =>
		props.active ? "rgb(13, 154, 149,0.25)" : "rgba(255, 255, 255, 0.5)"};
	padding: 10px;
	transition: all 0.4s ease-in-out;
`;

export const FancyItemFormContainer = styled(WrappedRowContainer)`
	width: 100%;
	height: 100%;
	border: 1px solid white;
`;

export const FancyItemFormInputContainer = styled(
	CenterAlignedFlexStartColumnContainer
)`
	width: 300px;
	height: 500px;
	background: rgba(255, 255, 255, 0.15);
	border: 1px solid #ffffff;
	box-sizing: border-box;
	border-radius: 15px;
	margin: 50px;
`;

export const FancyItemFormPreviewContainer = styled(
	CenterAlignedFlexStartColumnContainer
)`
	width: 300px;
	height: 500px;
	border: 1px solid #93c2e3;
	box-sizing: border-box;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-radius: 10px;
	margin: 50px;
`;

export const InputTextBox = styled.input`
	width: 200px;
	height: 18px;

	background: rgba(0, 0, 0, 0.25);
	border: 1px solid #ffffff;
	box-sizing: border-box;
	border-radius: 15px;
	padding: 10px;
	margin: 10px;
	color: white;
`;

export const InputTextBoxLarge = styled(InputTextBox)`
	height: 60px;
`;

export const SocialMediaIcon = styled(CenterAlignedColumnContainer)`
	width: 30px;
	height: 30px;
	box-sizing: border-box;
	border-radius: 0px;
`;

export const SocialMediaInputGrid = styled(RowGridContainer)`
	width: 90%;
	height: auto;
	grid-template-columns: 40px 150px;
	align-items: center;
`;

export const CategoryButton = styled(CenterAlignedColumnContainer)`
	padding: 10px 15px;
	align-items: center;
	position: static;
	width: auto;
	height: 30px;

	margin: 2px;

	border: 1.5px solid #ffffff;
	box-sizing: border-box;
	border-radius: 50px;

	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 16px;

	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.15px;

	color: #ffffff;

	background: ${(props) => (props.active ? "rgba(255, 255, 255, 0.13)" : "")};
	transition: all 0.4s ease-in-out;
`;

export const BookCoverImageContainer = styled(MotionImage)`
	width: 100px;
	height: 140px;

	margin: 5px;
	object-fit: cover;
`;

export const BookName = styled(CenterAlignedColumnContainer)`
	width: 100px;
	height: 40px;

	white-space: normal;
	font-size: 12px;
`;

export const BookSearchResultCard = styled(
	CenterAlignedFlexStartColumnContainer
)`
	width: 110px;
	height: auto;
	margin: 5px;
`;

export const BookSearchContainer = styled(SpaceBetweenRowContainer)`
	width: 290px;
	height: 480px;
	margin: 5px;
	overflow-y: scroll;
`;

export const BookFormContainer = styled(CenterAlignedFlexStartColumnContainer)`
	width: 100%;
	height: 100%;
	border: 1px solid white;
	position: absolute;
`;

export const BookFormAttributeHeader = styled(CenterAlignedColumnContainer)`
	padding: 10px 15px;
	align-items: center;
	position: static;
	width: auto;
	height: 30px;

	margin: 2px;

	border: 1px solid #ffffff;
	box-sizing: border-box;
	border-radius: 10px;

	font-family: Roboto;
	font-weight: bold;
	font-size: 16px;
	line-height: 16px;

	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.15px;

	color: black;

	background: rgb(255, 255, 255, 0.7);
`;

export const BookFormOKButton = styled(CenterAlignedColumnContainer)`
	padding: 10px 15px;
	align-items: center;
	position: static;
	width: auto;
	height: 40px;

	margin: 2px;

	border: 1px solid #ffffff;
	box-sizing: border-box;
	border-radius: 50px;

	font-family: Roboto;
	font-weight: bold;
	font-size: 16px;
	line-height: 16px;

	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.15px;

	color: white;

	background: black;
`;
