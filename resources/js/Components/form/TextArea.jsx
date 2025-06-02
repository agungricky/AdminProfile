function TextArea({data}) {
    return (
        <>
            <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Description
            </label>
            <textarea
                id="description"
                rows="4"
                value={data}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write product description here"
            ></textarea>
        </>
    )
}

export default TextArea