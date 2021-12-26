import React from "react";
import {
	FancyItemFormInputContainer,
	FancyItemFormPreviewContainer,
	BookCoverImageContainer,
	BookName,
	BookSearchResultCard,
	BookSearchContainer,
	BookFormContainer,
	InputTextBox,
	InputTextBoxLarge,
} from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/FancyItemFormStyles.jsx";
import {
	SpaceBetweenRowContainer,
	CenterAlignedColumnContainer,
} from "StyleLibrary/Global/containerStyles.js";
import { BookFormWrapper } from "Modules/FancyItemAdminDashboard/Styles/DashboardStyles.js";
import AddBookButton from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/Molecules/FancyItemForm/FancyItemBooksForm/AddBookButton.jsx";
import IndividualBookFormContainer from "Modules/FancyItemAdminDashboard/FancyItemForm/Styles/Molecules/FancyItemForm/FancyItemBooksForm/IndividualBookFormContainer.jsx";
import { fancyItemFormBooksSeedData } from "Modules/FancyItemAdminDashboard/FancyItemForm/SeedData/fancyItemFormBooksSeedData.js";
const FancyItemBooksForm = () => {
	const [selectedBook, setSelectedBook] = React.useState("");
	const [bookPreview, setBookPreview] = React.useState("");

	return (
		<SpaceBetweenRowContainer>
			<CenterAlignedColumnContainer
				width="300px"
				height="500px"
				position="relative"
			>
				{selectedBook != "" ? <BookFormWrapper /> : null}

				{selectedBook != "" && (
					<IndividualBookFormContainer
						selectedBook={selectedBook}
						bookPreview={bookPreview}
						setBookPreview={setBookPreview}
					/>
				)}

				<FancyItemFormInputContainer>
					Fancy Item Books Form
					<BookSearchContainer>
						{fancyItemFormBooksSeedData.map((book, index) => {
							return (
								<BookSearchResultCard key={index}>
									<BookCoverImageContainer
										src={
											book.volumeInfo.imageLinks
												.smallThumbnail
										}
									/>
									<BookName>{book.volumeInfo.title}</BookName>
									<AddBookButton
										key={index}
										onClick={() => {
											console.log("Click successful");
											setSelectedBook(book);
										}}
										active={selectedBook === book}
									>
										Add
									</AddBookButton>
								</BookSearchResultCard>
							);
						})}
					</BookSearchContainer>
				</FancyItemFormInputContainer>
			</CenterAlignedColumnContainer>
			<FancyItemFormPreviewContainer>
				{bookPreview != "" ? (
					<BookSearchResultCard>
						<BookCoverImageContainer
							src={
								bookPreview.volumeInfo.imageLinks.smallThumbnail
							}
						/>
						<BookName>{bookPreview.volumeInfo.title}</BookName>
					</BookSearchResultCard>
				) : null}
			</FancyItemFormPreviewContainer>
		</SpaceBetweenRowContainer>
	);
};

export default FancyItemBooksForm;
