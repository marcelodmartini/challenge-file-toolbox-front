import axios from 'axios';

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
    return axios.get('http://localhost:3000/files/data')
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
      return axios.get(`http://localhost:3000/files/data?fileName=${fileName}`)
        .then(response => {
          dispatch(fetchFileSuccess(response.data));
        })
        .catch(error => {
          console.log(error);
        });
    };
  };
  

