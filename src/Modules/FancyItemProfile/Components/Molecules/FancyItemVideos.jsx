import React from "react";
import {
	FancyItemVideosContainer,
	FancyItemVideoDetailsContainer,
	FancyItemProfileSectionName,
	FancyItemVideoDetails,
	FancyItemVideoThumbnail,
	FancyItemVideoName,
} from "./../../Styles/FancyItemProfileStyles";

const FancyItemVideos = ({ fancyItemVideos }) => {
	return (
		<>
			<FancyItemVideosContainer>
				<FancyItemProfileSectionName>Videos</FancyItemProfileSectionName>
				<FancyItemVideoDetailsContainer>
					{fancyItemVideos.map((video, index) => {
						return (
							<FancyItemVideoDetails>
								<FancyItemVideoThumbnail
									src={video.videoThumbnail}
								></FancyItemVideoThumbnail>
								<FancyItemVideoName>{video.videoName}</FancyItemVideoName>
							</FancyItemVideoDetails>
						);
					})}
				</FancyItemVideoDetailsContainer>
			</FancyItemVideosContainer>
		</>
	);
};

export default FancyItemVideos;
