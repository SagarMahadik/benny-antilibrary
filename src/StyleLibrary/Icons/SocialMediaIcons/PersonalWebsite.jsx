import * as React from "react";

const SvgComponent = (props) => (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 81 81"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M40.5 0C18.093 0 0 18.15 0 40.5 0 62.877 18.127 81 40.5 81 62.974 81 81 62.79 81 40.5 81 18.096 62.837 0 40.5 0Zm20.841 64.353c-5.773 5.06-13.094 7.824-20.841 7.824-7.746 0-15.066-2.764-20.838-7.82a2.89 2.89 0 0 1-.926-2.753c1.994-9.74 8.198-17.422 16.096-19.95-4.121-2.44-6.95-7.451-6.95-13.242 0-8.187 5.65-14.824 12.618-14.824s12.618 6.637 12.618 14.824c0 5.79-2.828 10.801-6.948 13.241 7.897 2.527 14.102 10.209 16.097 19.948a2.893 2.893 0 0 1-.926 2.752Z"
			fill="#fff"
		/>
	</svg>
);

export default SvgComponent;