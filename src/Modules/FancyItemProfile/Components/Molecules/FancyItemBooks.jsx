import React from "react";
import {
	FancyItemBooksContainer,
	FancyItemProfileSectionName,
	FancyItemBookDetailsContainer,
	FancyItemBookDetails,
	FancyItemBookImage,
	FancyItemBookName,
} from "./../../Styles/FancyItemProfileStyles";

const FancyItemBooks = ({ fancyItemBooks }) => {
	return (
		<>
			<FancyItemBooksContainer>
				<FancyItemProfileSectionName>Books </FancyItemProfileSectionName>
				<FancyItemBookDetailsContainer>
					{fancyItemBooks.map((book, index) => {
						return (
							<FancyItemBookDetails key={index}>
								<FancyItemBookImage src={book.bookCoverImage} />
								<FancyItemBookName>{book.bookName}</FancyItemBookName>
							</FancyItemBookDetails>
						);
					})}
				</FancyItemBookDetailsContainer>
			</FancyItemBooksContainer>
		</>
	);
};

export default FancyItemBooks;
