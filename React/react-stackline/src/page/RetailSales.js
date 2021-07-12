import React, { useEffect, useState } from 'react';
import DescriptionPanel from '../components/DescriptionPanel';
import GraphPanel from '../components/GraphPanel';
import { getData } from '../apis/getRetailSales';
import { useDispatch } from 'react-redux';

const RetailSales = () => {
	const dispatch = useDispatch();
	const [stateAPIStatus, setAPIStatus] = useState('idle');

	useEffect(() => {
		setAPIStatus('loading');

		getData()
			.then((data) => {
				dispatch({
					type: 'GET_DATA',
					payload: data[0],
				});
				setAPIStatus('success');
			})
			.catch((error) => {
				setAPIStatus('error');
			});
	}, [dispatch]);

	return (
		<div className="body">
			{stateAPIStatus && (
				<>
					<DescriptionPanel />
					<div className="graph-panel">
						<GraphPanel />
					</div>
				</>
			)}
		</div>
	);
};

export default RetailSales;
