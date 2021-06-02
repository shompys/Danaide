import apiService from './apiService';

const apiPostService = async ( type, payload, config = {} ) => {

    const response = await apiService.post(`/${ type }`, payload, config);
    return await response.data;

}

export default apiPostService;