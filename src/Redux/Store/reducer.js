const initialState = {
	userLogedout: false
};

export default (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case 'SIGN_UP':
			return {
				...state,
				userSignup: action.payload,
				userLogedout: true
			};
		case 'LOGIN':
			return {
				...state,
				userLogin: action.payload,
				userLogedout: true
			};
	}
	return newState;
};
