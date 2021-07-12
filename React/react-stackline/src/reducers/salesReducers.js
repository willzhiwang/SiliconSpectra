const initialState = {
	id: '',
	title: '',
	image: '',
	subtitle: '',
	brand: '',
	reviews: [],
	retailer: '',
	details: [],
	tags: [],
	sales: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case 'SALES_LOADING':
			return {
				...state,
				loading: true,
			};
		case 'GET_SALES_ERRORS':
			console.log(action.payload);
			return {
				...state,
				error: action.payload,
			};
		case 'GET_DATA':
			return {
				...state,
				...action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
