import React from "react";
import FancyItemProfileForm from "../../Components/FormSections/FancyItemProfileForm";
import FancyItemBooksForm from "../../Components/FormSections/FancyItemBooksForm";

import { FancyItemFormContainer } from "../FancyItemFormStyles";

const FancyItemForm = ({ formActiveSection }) => {
	return (
		<FancyItemFormContainer>
			{(() => {
				switch (formActiveSection) {
					case "fancy-item-profile":
						return <FancyItemProfileForm></FancyItemProfileForm>;
						break;
					case "books":
						return <FancyItemBooksForm></FancyItemBooksForm>;
						break;

					case "videos":
						return <h1>Videos</h1>;
						break;
					case "other-urls":
						return <h1>Other URLs</h1>;
						break;
					case "recommended-books":
						return <h1>Recommended Books</h1>;
						break;
					default:
						return null;
				}
			})()}
		</FancyItemFormContainer>
	);
};

export default FancyItemForm;
