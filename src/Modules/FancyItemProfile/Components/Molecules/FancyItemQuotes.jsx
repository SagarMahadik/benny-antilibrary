import React from "react";
import {
	FancyItemQuotesContainer,
	FancyItemQuotesOverflowContainer,
	FancyItemProfileSectionName,
	FancyItemQuoteContainer,
	FancyItemQuoteText,
	FancyItemScrollStatus,
	FancyItemScrollMarker,
} from "./../../Styles/FancyItemProfileStyles";

const FancyItemQuotes = () => {
	return (
		<>
			<FancyItemQuotesContainer>
				<FancyItemProfileSectionName>Quotes</FancyItemProfileSectionName>

				<FancyItemQuotesOverflowContainer>
					<FancyItemQuoteContainer>
						<FancyItemQuoteText>
							A man is morally free when he judges the world, and judges other
							men, with uncompromising sincerity. This is not just an aim but an
							obligation.
						</FancyItemQuoteText>
					</FancyItemQuoteContainer>

					<FancyItemQuoteContainer>
						<FancyItemQuoteText>
							A man is morally free when he judges the world, and judges other
							men, with uncompromising sincerity. This is not just an aim but an
							obligation.
						</FancyItemQuoteText>
					</FancyItemQuoteContainer>

					<FancyItemQuoteContainer>
						<FancyItemQuoteText>
							A man is morally free when he judges the world, and judges other
							men, with uncompromising sincerity. This is not just an aim but an
							obligation.
						</FancyItemQuoteText>
					</FancyItemQuoteContainer>
				</FancyItemQuotesOverflowContainer>

				<FancyItemScrollStatus>
					<FancyItemScrollMarker />
				</FancyItemScrollStatus>
			</FancyItemQuotesContainer>
		</>
	);
};

export default FancyItemQuotes;
