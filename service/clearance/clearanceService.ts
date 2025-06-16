import api from '@/utils/axiosInstance'

export const getTodos = async () => {
  try {
    const response = await api.get('/roles')
    console.log('axios res', response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const postClearance = async (formData: FormData) => {
  try {
    const response = await api.post(`/clearance`, formData, {
      headers: { 
        "Authorization": `Bearer ${`7|lxu8xIh3ZuEjXFzbkC47iynhcLbrDKmZcAIrH6Ck83429fba`}`,
        "Content-Type": "multipart/form-data" 
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};