function Select(
    { name, label, required, options = [], children, errors = {}, ...props }) {
    return (
        <>
            <label htmlFor={name}
                className="block text-sm font-medium text-gray-700">
                {label}{required &&
                    <span className="text-red-500">*</span>}
            </label>
            <select
                id={name}
                name={name}
                className="mt-1 block w-full px-4 py-2 border rounded-md 
                         shadow-sm focus:outline-none focus:ring-2
                        border-gray-300"
                {...props}
            >
                {children}
            </select >
            {
                errors[name] &&
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
            }
        </>
    )
}

export default Select
