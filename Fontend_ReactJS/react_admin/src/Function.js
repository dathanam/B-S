import api from './api'
export default {
    getData: async (data) => {
        const response = await api.getData(Object.assign({ token: localStorage.getItem("accessToken") }, data))
        if (response && response.data) {
            return response.data;
        }
        return;
    },
    
    validateInput: (sdt) => {
        const regexp = /^\d{10,11}$/;
        const checkingResult = regexp.exec(sdt);
        if (checkingResult !== null) {
            return {
                isInputValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Số điện thoại phải có 10-11 chữ số.'
            };
        }
    }

}