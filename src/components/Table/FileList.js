import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchFile } from '../../state/actions/actions.js';

const FileList = ({ files }) => {
  const [fileName, setFileName] = useState('');
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.fileData);

  // The following commented line of code is based on the fact that for each letter that we put in the inputext, that is, 
  // for each change in the fileName variable, it makes a request to obtain said filename, this generates a request for each letter entered.
  // useEffect(() => {
  //   if (fileName) {
  //     dispatch(fetchFile(fileName));
  //   }
  // }, [fileName, dispatch]);


  const handleInputChange = (e) => {
    setFileName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchFile(fileName));
      setFileName('');
    }
  };

  const RenderFiles = () => {
    return files.map((file) => (
      <React.Fragment key={file.file}>
        {file.lines.map((line, index) => (
          <tr key={`${file.file}-${index}`}>
            <td>{file.file}</td>
            <td>{line.text}</td>
            <td>{line.number}</td>
            <td>{line.hex}</td>
          </tr>
        ))}
      </React.Fragment>
    ));
  };

  const clearFileName = () => {
      dispatch(fetchFile(''));
      setFileName('');
  };

  const searchFileName = () => {
    dispatch(fetchFile(fileName));
    setFileName('');
  };

  return (
        <div>
          <h2 className="titulo">React Test App</h2>
          <input type="text" value={fileName} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <button onClick={searchFileName}>Buscar</button>
          <button onClick={clearFileName}>Clear</button>
          <Table striped bordered>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              <RenderFiles />
            </tbody>
          </Table>
        </div>
      );
    };
export default FileList;
