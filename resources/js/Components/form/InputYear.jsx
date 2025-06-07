import React, { useState, useRef, useEffect } from 'react';

function InputYear({ name, label, value, onChange, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(value || null);
    const modalRef = useRef(null);

    useEffect(() => {
        setSelectedYear(value || null);
    }, [value]);

    const years = [];
    for (let year = 2020; year <= 2031; year++) {
        years.push(year);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        onChange(year);
        setIsOpen(false);
    };

    const handleClearSelection = () => {
        setSelectedYear(null);
        onChange(null);
    };

    return (
        <div className="relative w-full">
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>

            <div className="flex items-center w-full" onClick={() => setIsOpen(!isOpen)}>
                <input
                    id={name}
                    name={name}
                    type="text"
                    // onChange={onChange}
                    value={selectedYear || ''}
                    readOnly
                    placeholder={placeholder || "Pilih tahun"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {selectedYear && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClearSelection();
                        }}
                        className="absolute right-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        title="Clear selection"
                        type="button"
                    >
                        ×
                    </button>
                )}
            </div>

            {isOpen && (
                <div
                    ref={modalRef}
                    className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600"
                >
                    <div className="grid grid-cols-3 gap-2 p-3">
                        {years.map((year) => (
                            <div
                                key={year}
                                onClick={() => handleYearSelect(year)}
                                className={`p-2 text-center rounded-md cursor-pointer transition-colors ${selectedYear === year
                                        ? 'bg-blue-500 text-white'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {year}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default InputYear;
