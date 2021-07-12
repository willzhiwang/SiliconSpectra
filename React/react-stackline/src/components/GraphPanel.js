import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

const GraphPanel = () => {
	const sales = useSelector((state) => state.salesData.sales);

	const retailSales = sales.map((sale) => {
		const newData = [Date.parse(sale.weekEnding), sale.retailSales];
		return newData;
	});
	const wholesaleSales = sales.map((sale) => {
		const newData = [Date.parse(sale.weekEnding), sale.wholesaleSales];
		return newData;
	});

	const options = {
		title: {
			text: 'Retail Sales',
		},
		yAxis: {
			min: 0,
			labels: {
				enabled: false,
			},
		},
		xAxis: {
			type: 'datetime',
			min: Date.UTC(2017, 0, 1),
			max: Date.UTC(2017, 11, 31),
			labels: {
				formatter: function () {
					return Highcharts.dateFormat('%b', this.value);
				},
			},
		},
		plotOptions: {
			series: {
				connectNulls: true,
				cursor: 'pointer',
				pointInterval: undefined,
				pointStart: undefined,
			},
		},
		series: [
			{
				name: 'Retail Sales',
				type: 'line',
				data: retailSales,
				marker: {
					enabled: false,
				},
			},
			{
				name: 'Wholesale Sales',
				type: 'line',
				data: wholesaleSales,
				marker: {
					enabled: false,
				},
			},
		],
	};
	return (
		<div className="panel">
			<HighchartsReact highcharts={Highcharts} options={options} {...HighchartsReact.Props} />
		</div>
	);
};

export default GraphPanel;
