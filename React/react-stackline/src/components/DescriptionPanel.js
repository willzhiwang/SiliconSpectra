import React from 'react';
import { useSelector } from 'react-redux';

const DescriptionPanel = () => {
	const name = useSelector((state) => state.salesData.title);
	const image = useSelector((state) => state.salesData.image);
	const description = useSelector((state) => state.salesData.subtitle);
	const tags = useSelector((state) => state.salesData.tags);

	return (
		<div className="panel description-panel">
			<img src={image} alt="Profile" width="120" height="120" />
			<h4 className="name">{name}</h4>
			<p className="description">{description}</p>
			<div className="tags">
				{tags.map((tag, i) => {
					return (
						<div key={`${tag}-${i}`} className="tag">
							{tag}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DescriptionPanel;
