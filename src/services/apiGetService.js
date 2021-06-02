import apiService from './apiService';

const apiGetService = async ( type, id = '' ) => {

    const response = await apiService.get(`/${ type }/${ id }`);
    return await response.data;
}

export default apiGetService;