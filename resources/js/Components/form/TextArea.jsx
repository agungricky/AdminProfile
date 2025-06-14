function TextArea({ label, name, value, onChange, placeholder }) {
    return (
        <>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <textarea
                id={name}
                rows="4"
                value={value}
                onChange={onChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder={placeholder}
            ></textarea>
        </>
    )
}

export default TextArea