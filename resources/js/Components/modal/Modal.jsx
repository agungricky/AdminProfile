function Modal({isOpen, onClose, header, body, footer}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {header}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-6 space-y-4">
                        {body}
                    </div>

                    <div className="flex items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal