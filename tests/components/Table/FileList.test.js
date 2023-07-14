import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useDispatch, useSelector } from 'react-redux';
import FileList from '../../../src/components/Table/FileList';
import { fetchFile } from '../../../src/state/actions/actions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../../src/state/actions/actions', () => ({
  fetchFile: jest.fn(),
}));

describe('FileList component', () => {
  const files = [
    {
      file: 'file1.txt',
      lines: [
        { text: 'Line 1', number: 1, hex: '0x01' },
        { text: 'Line 2', number: 2, hex: '0x02' },
      ],
    },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockImplementation((selectorFn) => selectorFn({
      fileData: [],
    }));
  });

  afterEach(() => {
    useDispatch.mockReset();
    useSelector.mockReset();
    fetchFile.mockReset();
  });

  test('renders file list correctly', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      fileData: files,
    }));

    const { getAllByText } = render(<FileList files={files} />);

    expect(getAllByText('File Name')).toHaveLength(1);
    expect(getAllByText('Text')).toHaveLength(1);
    expect(getAllByText('Number')).toHaveLength(1);
    expect(getAllByText('Hex')).toHaveLength(1);
    expect(getAllByText('file1.txt').length).toBeGreaterThan(0);
    expect(getAllByText('Line 1')).toHaveLength(1);
    expect(getAllByText('1')).toHaveLength(1);
    expect(getAllByText('0x01')).toHaveLength(1);
    expect(getAllByText('Line 2')).toHaveLength(1);
    expect(getAllByText('2')).toHaveLength(1);
    expect(getAllByText('0x02')).toHaveLength(1);
  });

  test('dispatches fetchFile action on enter key press', () => {
    const { getByRole } = render(<FileList files={files} />);
    const inputElement = getByRole('textbox');
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    expect(fetchFile).toHaveBeenCalledWith('');
  });

  test('dispatches fetchFile action with the correct file name', () => {
    const { getByRole } = render(<FileList files={files} />);
    const inputElement = getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'file1.txt' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    expect(fetchFile).toHaveBeenCalledWith('file1.txt');
  });
});
