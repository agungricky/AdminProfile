import HeaderPages from "@/Layouts/itemPages/HeaderPages";
import Main from "../Main"
import { Link, router, useForm } from "@inertiajs/react";
import Modal from "@/Components/modal/Modal";
import { useState } from "react";
import InputText from "@/Components/form/InputText";
import Button_primary from "@/Components/button/Button_primary";

function SedangdiPelajari({ tech }) {
    const handleToggle = (id, newStatus) => {
        router.patch(route('techlearning.status', id), { status: newStatus }, {
            preserveScroll: true,
            onSuccess: () => {
                console.log('Status updated successfully');
            },
            onError: (errors) => {
                console.error('Update failed', errors);
            }
        });
    };

    const [detail, setDetail] = useState(false);
    const [edit, setEdit] = useState(false);
    const [destroy, setDestroy] = useState(false);
    const [add, setAdd] = useState(false);
    const { data, setData } = useForm(null);

    const handleAdd = (e) => {
        e.preventDefault();
        post(route('project.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setAdd(false);
            },
            onError: (errors) => {
                console.error('Add failed', errors);
            }
        });
    };

    const Edit = (item) => {
        setEdit(true);
        setData({
            id: item.id,
            title: item.title,
            subtitle: item.subTitle,
            image: item.image,
        });
    };


    return (
        <Main>
            {/* Add Project */}
            <Modal
                isOpen={add}
                onClose={() => { setAdd(false) }}
                header="Add Technology Sedang dipelajari"
                body={
                    <form className="p-4 md:p-5 max-h-[70vh] overflow-y-auto" id="projectAdd" onSubmit={handleAdd}>
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <InputText
                                    label="Title"
                                    name={data?.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Masukkan Title" />
                            </div>
                            <div className="col-span-2">
                                <InputText
                                    label="Sub Title"
                                    name={data?.title}
                                    onChange={(e) => setData('subtitle', e.target.value)}
                                    placeholder="Masukkan Sub Title" />
                            </div>
                            <div className="col-span-2">
                                <InputText
                                    label="Image"
                                    name={data?.imange}
                                    onChange={(e) => setData('image', e.target.value)}
                                    placeholder="Masukkan image" />
                            </div>
                            {
                                data?.image &&
                                <div className="col-span-2">
                                    <p className="text-sm text-gray-500">Preview:</p>
                                    <img
                                        src={data?.image}
                                        alt="Preview"
                                        className="w-full max-h-64 object-contain rounded"
                                    />
                                </div>
                            }

                        </div>
                    </form>
                }
                footer={
                    <button
                        type="submit"
                        form="projectAdd"
                        onSubmit=""
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="me-1 -ms-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Create Data
                    </button>
                }
            />

            {/* Detail */}
            <Modal
                isOpen={detail}
                onClose={() => { setDetail(false) }}
                header={data?.title}
                body={
                    <div className="px-6 py-3 space-y-4">
                        <p className="text-gray-600 dark:text-gray-300">
                            <span>Sub Title :</span> <br />
                            {data?.subTitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            <span>Image :</span> <br />
                            {data?.image}
                        </p>
                        <div className="mt-4">
                            <p className="text-sm text-gray-500 mb-2">Preview:</p>
                            <img
                                src={data?.image}
                                alt="Preview"
                                className="w-full max-h-64 object-contain rounded"
                            />
                        </div>
                    </div>
                }
                footer={
                    <>
                        <button
                            onClick={() => setDetail(false)}
                            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Tutup Modal
                        </button>
                    </>
                }
            />

            {/* Edit */}
            <Modal
                isOpen={edit}
                onClose={() => { setEdit(false) }}
                header={data?.title}
                body={
                    <form className="p-4 md:p-5 max-h-[70vh] overflow-y-auto" id="projectEdit">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <InputText
                                    label="Title"
                                    name={data?.title}
                                    value={data?.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Masukkan Title" />
                            </div>
                            <div className="col-span-2">
                                <InputText
                                    label="Sub Title"
                                    name={data?.subtitle}
                                    value={data?.subtitle}
                                    onChange={(e) => setData('subtitle', e.target.value)}
                                    placeholder="Masukkan Sub Title" />
                            </div>
                            <div className="col-span-2">
                                <InputText
                                    label="Image"
                                    name={data?.imange}
                                    value={data?.image}
                                    onChange={(e) => setData('image', e.target.value)}
                                    placeholder="Masukkan image" />
                            </div>
                            {
                                data?.image &&
                                <div className="col-span-2">
                                    <p className="text-sm text-gray-500">Preview:</p>
                                    <img
                                        src={data?.image}
                                        alt="Preview"
                                        className="w-full max-h-64 object-contain rounded"
                                    />
                                </div>
                            }

                        </div>
                    </form>
                }
                footer={
                    <button
                        type="submit"
                        form="projectEdit"
                        onSubmit=""
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="me-1 -ms-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Update Data
                    </button>
                }
            />

            {/* Delete */}
            <Modal
                isOpen={destroy}
                onClose={() => { setDestroy(false) }}
                header="Hapus Project"
                body={
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" fill="none" viewBox="0 0 20 20">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this project? <br />
                            <span className="font-bold size-36">{data?.title}</span>
                        </h3>
                        <button
                            onClick={() => {
                                handleDelete(data?.id)
                                setDestroy(false)
                            }}
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                        >
                            Yes, I'm sure
                        </button>
                        <button
                            onClick={() => setDestroy(false)}
                            className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            No, cancel
                        </button>
                    </div>
                }
            />

            <div className="pc-container">
                <div className="pc-content">
                    <HeaderPages
                        header={{ header: 'Teknologi Sering di Gunakan' }}
                    >
                        <li className="breadcrumb-item"><Link href="">Home</Link></li>
                        <li className="breadcrumb-item" aria-current="page">Teknologi Sedang dipelajari</li>
                    </HeaderPages>

                    <div className="col-span-12 xl:col-span-8 md:col-span-6">
                        <div className="card table-card">
                            <div className="card-header">
                                <div className="flex justify-between items-center">
                                    <h5 className="mb-0 font-bold text-xl">All Teknologi</h5>
                                    <Button_primary title="Tambah Teknologi" onClick={() => setAdd(true)} />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            {
                                                tech.map((item, index) => (
                                                    <tr className="unread" key={index}>
                                                        <td>
                                                            <div className="font-bold">{index + 1}</div>
                                                        </td>
                                                        <td>
                                                            <h6 className="mb-1">{item?.title}</h6>
                                                            {item?.subTitle?.length > 20 ? item.subTitle.slice(0, 60) + '...' : item.subTitle}
                                                        </td>
                                                        <td>
                                                            <h6 className="text-muted">
                                                                <i
                                                                    className={`fas fa-circle text-[10px] ltr:mr-4 rtl:ml-4 ${item.status === 'show' ? 'text-green-500' : 'text-red-500'
                                                                        }`}
                                                                />
                                                                {item?.image?.length > 20 ? item.image.slice(0, 20) + '...' : item.image}
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
                </div>
            </div>
        </Main>
    )
}

export default SedangdiPelajari
