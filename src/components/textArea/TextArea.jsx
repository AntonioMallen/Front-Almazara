import React, { useState } from 'react';
import Quill from 'quill';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import 'react-quill/dist/quill.snow.css';

const CustomTextArea = () => {
  const [value, setText] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }],
    //   [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      ['link', 'image', 'video'],
    //   ['code-block', 'formula'],
      ['clean']
    ],
   
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color', 'background',
    'script',
    'align',
    'list', 'bullet', 'indent',
    'direction',
    'link', 'image', 'video',
    'code-block', 'formula'
  ];

  return (
    <>
        <div style={{ height: "500px" }}> {/* Contenedor con altura */}
        <ReactQuill 
            theme="snow"
            value={value}
            onChange={setText}
            modules={modules}
            formats={formats}
            style={{ height: "calc(100% - 42px)" }} /* Altura del editor */
        />

        
        </div>
        <div>
            <p>{value}</p>
        </div>
    </>
  );
};

export default CustomTextArea;
