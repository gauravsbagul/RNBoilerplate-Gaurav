import axios from 'axios';

//To loginWithEmailPssword
export const _signUp = data => {
	console.log('TCL: _signUp data', data);
	return dispatch =>
		new Promise(async (resolve, reject) => {
			const body = {
				method: 'post',
				url: `url`,
				data
			};

			axios(body)
				.then(response => {
					console.log('TCL: _signUp response', response);
					dispatch({
						type: 'SIGN_UP',
						payload: { error: false, response: response, showLoader: false }
					});
				})
				.catch(error => {
					console.log('TCL:_signUp  error', error);
					dispatch({
						type: 'SIGN_UP',
						payload: { error: true, response: undefined, showLoader: false }
					});
				});
		});
};
export const _clearSignUpProps = () => {
	return dispatch =>
		new Promise(resolve => {
			resolve(
				dispatch({
					type: 'SIGN_UP',
					payload: undefined
				})
			);
		});
};
export const _login = data => {
	console.log('TCL: _login data', data);
	return dispatch =>
		new Promise(async (resolve, reject) => {
			const body = {
				method: 'post',
				url: `url`,
				data
			};

			axios(body)
				.then(response => {
					console.log('TCL: _login response', response);
					dispatch({
						type: 'LOGIN',
						payload: { error: false, response: response, showLoader: false }
					});
				})
				.catch(error => {
					console.log('TCL:_signUp  error', error);
					dispatch({
						type: 'LOGIN',
						payload: { error: true, response: undefined, showLoader: false }
					});
				});
		});
};
export const _clearLoginProps = () => {
	return dispatch =>
		new Promise(resolve => {
			resolve(
				dispatch({
					type: 'LOGIN',
					payload: undefined
				})
			);
		});
};
