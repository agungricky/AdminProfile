import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextArea({ label, name, value, onChange, placeholder }) {
    return (
        <>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <ReactQuill
                theme="snow"
                id={name}
                rows="4"
                value={value}
                onChange={onChange}
                className="h-32 mb-10"
                placeholder={placeholder}
                modules={{
                    toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        ['link', 'image'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['clean'],
                    ],
                }}
            />
        </>
    )
}

export default TextArea