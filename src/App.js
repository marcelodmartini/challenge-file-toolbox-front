import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFiles } from './actions';
import FileList from './components/FileList';

const App = () => {
  const files = useSelector(state => state.files);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div>
      <FileList files={files} />
    </div>
  );
};

export default App;
