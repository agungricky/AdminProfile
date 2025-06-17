function Prestasi({ prestasi }) {
    return (
        <div className="col-span-12 xl:col-span-12 md:col-span-12">
            <div className="card table-card">
                <div className="card-header">
                    <div className="flex justify-between items-center">
                        <h5>Daftar Prestasi</h5>
                        <button
                            type="button"
                            onClick={() => setAdd(true)}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Tambah Project
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                                {
                                    prestasi.map((item, index) => (
                                        <tr className="unread" key={index}>
                                            <td>
                                                <div className="font-bold">{index + 1}</div>
                                            </td>
                                            <td>
                                                <h6 className="mb-1">{item?.nama_prestasi}</h6>
                                                {item?.keterangan?.length > 100 ? item.keterangan.slice(0, 60) + '...' : item.keterangan}
                                                <p className="m-0"></p>
                                            </td>
                                            <td>
                                                <i
                                                    className={`fas fa-circle text-[10px] ltr:mr-4 rtl:ml-4 ${item.status === 'show' ? 'text-green-500' : 'text-red-500'
                                                        }`}
                                                />
                                            </td>
                                            <td>
                                                <h6 className="text-muted">
                                                    <div className="font-bold">{item?.tahun}</div>
                                                </h6>
                                            </td>
                                            <td>
                                                <div className="flex items-center space-x-4">
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={item.status === 'show'}
                                                            onChange={() => handleToggle(item.id, item.status === 'show' ? 'hide' : 'show')}
                                                            className="sr-only peer"
                                                        />
                                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-300"></div>
                                                        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
                                                    </label>
                                                    <span className="text-gray-700 font-medium">
                                                        {item.status === 'show' ? 'Show' : 'Hide'}
                                                    </span>
                                                </div>
                                            </td>

                                            <td>
                                                <button onClick={() => {
                                                    setDetail(true);
                                                    setData(item);
                                                }}
                                                    className="badge bg-theme-bg-1 text-white text-[12px]">
                                                    Detail
                                                </button>
                                                <button onClick={() => Edit(item)}
                                                    className="badge bg-theme-bg-2 text-white text-[12px] mx-2">
                                                    Edit
                                                </button>
                                                <button onClick={() => {
                                                    setDestroy(true);
                                                    setData(item);
                                                }} className="badge bg-red-500 text-white text-[12px]">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prestasi
