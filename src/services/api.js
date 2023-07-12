//We can use the .dotenv file to set the context variables
export const BASE_URL = 'http://localhost:3000';

export const API_ENDPOINTS = {
  FILES: '/files/data',
  FILE_BY_NAME: (fileName) => `/files/data?fileName=${fileName}`,
};
