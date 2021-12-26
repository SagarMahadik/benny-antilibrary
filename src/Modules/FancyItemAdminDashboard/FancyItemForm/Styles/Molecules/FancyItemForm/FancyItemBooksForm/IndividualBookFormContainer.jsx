import React from "react";

import {
	BookFormContainer,
	BookFormAttributeHeader,
	InputTextBox,
	InputTextBoxLarge,
	BookFormOKButton,
} from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/FancyItemFormStyles.jsx";

import FancyItemBooksForm from "Modules/FancyItemAdminDashboard/FancyItemForm/Components/FormSections/FancyItemBooksForm.jsx";

const IndividualBookFormContainer = ({ selectedBook, setBookPreview }) => {
	const [bookTitle, setBookTitle] = React.useState(
		selectedBook.volumeInfo.title
	);
	const [bookSubTitle, setBookSubTitle] = React.useState(
		selectedBook.volumeInfo.subtitle
	);

	return (
		<BookFormContainer>
			<BookFormAttributeHeader>Title</BookFormAttributeHeader>
			<InputTextBox
				value={bookTitle}
				onChange={(e) => {
					console.log(e.target.value);
					setBookTitle(e.target.value);
				}}
			></InputTextBox>

			<BookFormAttributeHeader>Subtitle</BookFormAttributeHeader>
			<InputTextBox
				value={bookSubTitle}
				onChange={(e) => {
					console.log(e.target.value);
					setBookTitle(e.target.value);
				}}
			></InputTextBox>

			<BookFormAttributeHeader>Archive Link</BookFormAttributeHeader>
			<InputTextBox></InputTextBox>
			<BookFormAttributeHeader>Amazon Link</BookFormAttributeHeader>
			<InputTextBox></InputTextBox>

			<BookFormOKButton
				onClick={() => {
					setBookPreview(selectedBook);
				}}
			>
				OK
			</BookFormOKButton>
		</BookFormContainer>
	);
};

export default IndividualBookFormContainer;
