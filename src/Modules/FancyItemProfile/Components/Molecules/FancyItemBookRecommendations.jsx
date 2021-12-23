import React from "react";
import {
	FancyItemBooksContainer,
	FancyItemProfileSectionName,
	FancyItemBookDetailsContainer,
	FancyItemBookDetails,
	FancyItemBookImage,
	FancyItemBookName,
} from "./../../Styles/FancyItemProfileStyles";

const FancyItemBookRecommendations = ({ fancyItemBookRecommendations }) => {
	return (
		<>
			<FancyItemBooksContainer>
				<FancyItemProfileSectionName>Books </FancyItemProfileSectionName>
				<FancyItemBookDetailsContainer>
					{fancyItemBookRecommendations.map((bookRecommendations, index) => {
						return (
							<FancyItemBookDetails key={index}>
								<FancyItemBookImage src={bookRecommendations.bookCoverImage} />
								<FancyItemBookName>
									{bookRecommendations.bookName}
								</FancyItemBookName>
							</FancyItemBookDetails>
						);
					})}
				</FancyItemBookDetailsContainer>
			</FancyItemBooksContainer>
		</>
	);
};

export default FancyItemBookRecommendations;
