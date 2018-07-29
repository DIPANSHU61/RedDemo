import {LOGIN_FAILURE, LOGIN_SUCCESS} from './ActionTypes';
const BASE_URL_FOR_POST = 'https://alpha.smarida.de/api/rest/v1/';
const USER_LOGIN = BASE_URL_FOR_POST + 'verify_user/';
export const login = (email, password) => {
    alert(email)
    debugger;
    return function (dispatch) {
        debugger;
        let formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);
        debugger;
        fetch(USER_LOGIN, {
            method: 'POST',
            body: formdata
        })

            .then((response) => response.json())
            .then((responseData) => {
                console.warn(responseData);

                if (responseData.success !== true) {
                    alert('failed')
                }
                else {
                    alert('success')
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: responseData,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Network erro-->>"+error);
                dispatch({
                    type: LOGIN_FAILURE,
                    payload:"Rajnish"
                });
            });
    };
};

