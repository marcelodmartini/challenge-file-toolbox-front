import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchFile } from '../../state/actions/actions.js';

const FileList = ({ files }) => {
  const [fileName, setFileName] = useState('');
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.fileData);

  useEffect(() => {
    if (fileName) {
      dispatch(fetchFile(fileName));
    }
  }, [fileName, dispatch]);


  const handleInputChange = (e) => {
    setFileName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchFile(fileName));
      setFileName('');
    }
  };
  return (
        <div>
          <h2 className="titulo">React Test App</h2>
          <input type="text" value={fileName} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <button onClick={() => setFileName('')}>Clear</button>
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
              {files.map((file) => (
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
              ))}
            </tbody>
          </Table>
        </div>
      );
    };
export default FileList;
