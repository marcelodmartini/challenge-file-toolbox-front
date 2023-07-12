import axios from 'axios';
import { API_ENDPOINTS, BASE_URL } from '../../services/api';


export const FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS';
export const FETCH_FILE_SUCCESS = 'FETCH_FILE_SUCCESS';

export const fetchFilesSuccess = files => ({
  type: FETCH_FILES_SUCCESS,
  payload: files,
});

export const fetchFileSuccess = file => ({
    type: FETCH_FILES_SUCCESS,
    payload: file,
  });

export const fetchFiles = () => {
  return dispatch => {
    return axios.get(`${BASE_URL}${API_ENDPOINTS.FILES}`)
      .then(response => {
        dispatch(fetchFilesSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchFile = (fileName) => {
    return dispatch => {
      return axios.get(`${BASE_URL}${API_ENDPOINTS.FILE_BY_NAME(fileName)}`)
        .then(response => {
          dispatch(fetchFileSuccess(response.data));
        })
        .catch(error => {
          console.log(error);
        });
    };
  };
  

