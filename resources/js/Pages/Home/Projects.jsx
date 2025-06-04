import Main from "../Main"
import { router } from '@inertiajs/react';
import HeaderPages from "@/Layouts/itemPages/HeaderPages";
import { useState } from "react";
import Modal from "@/Components/modal/Modal";
import InputText from "@/Components/form/InputText";
import TextArea from "@/Components/form/TextArea";

function Projects({ project }) {
    const handleToggle = (id, newStatus) => {
        router.post(route('projects.status', id), { status: newStatus }, {
            preserveScroll: true,
            onSuccess: () => {
                console.log('Status updated successfully');
            },
            onError: (errors) => {
                console.error('Update failed', errors);
            }
        });
    };

    const [data, setData] = useState(null);

    const [detail, setDetail] = useState(false);
    const [edit, setEdit] = useState(false);
    const handleUpdate = () => {
        
    }



    const [modal, setModal] = useState(false);
    const toggleClose = () => setModal(false);



    return (
        <Main>
            {/* <ModalDetail isOpen={isModalOpen} onClose={toggleModal} data={data} />
            <ModalEdit isOpen={isEdit} onClose={toggleEdit} data={data} />
            <ModalAdd isOpen={addData} onClose={toggleAdd} /> */}
            <Modal
                isOpen={modal}
                onClose={() => { setModal(false) }}
                header={"Traralelo"}
                body={
                    <>
                        <p className="text-gray-600 dark:text-gray-300">
                            <span>Desc :</span> <br />
                            Ini deskripsi
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            Link : <br />
                            Ini Link
                        </p>
                    </>
                }
                footer={
                    <>
                        <button
                            onClick={toggleClose}
                            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Tutup Modal
                        </button>
                    </>
                }
            />

            {/* Detail */}
            <Modal
                isOpen={detail}
                onClose={() => { setDetail(false) }}
                header={data?.title}
                body={
                    <>
                        <p className="text-gray-600 dark:text-gray-300">
                            <span>Desc :</span> <br />
                            {data?.desc}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            Link : <br />
                            {data?.link}
                        </p>
                    </>
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
                    <form className="p-4 md:p-5" id="projectEdit" onSubmit={handleUpdate}>
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <InputText data={data?.title} />
                            </div>
                            <div className="col-span-2">
                                <InputText data={data?.link} />
                            </div>
                            <div className="col-span-2">
                                <TextArea data={data?.desc} />
                            </div>
                        </div>
                    </form>
                }
                footer={
                    <button
                        type="submit"
                        form="projectEdit"
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

            <div className="pc-container">
                <div className="pc-content">
                    <HeaderPages
                        header={{ header: 'Projects' }}
                        pages={{ pages: 'Home' }}
                        subPages={{ subPages: 'Projects' }}
                        subsubPages={{ subsubPages: 'List Aplikasi Pernah dibuat' }}
                    />

                    <div className="col-span-12 xl:col-span-8 md:col-span-6">
                        <div className="card table-card">
                            <div className="card-header">
                                <div className="flex justify-between items-center">
                                    <h5>All Projects</h5>
                                    <button
                                        type="button"
                                        onClick={() => setModal(true)}
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
                                                project.map((item, index) => (
                                                    <tr className="unread" key={index}>
                                                        <td>
                                                            <div className="font-bold">{index + 1}</div>
                                                        </td>
                                                        <td>
                                                            <h6 className="mb-1">{item?.title}</h6>
                                                            {item?.desc?.length > 20 ? item.desc.slice(0, 60) + '...' : item.desc}
                                                            <p className="m-0"></p>
                                                        </td>
                                                        <td>
                                                            <h6 className="text-muted">
                                                                <i
                                                                    className={`fas fa-circle text-white text-[10px] ltr:mr-4 rtl:ml-4`}
                                                                ></i>
                                                                {item?.link?.length > 20 ? item.link.slice(0, 20) + '...' : item.link}
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
                                                            <button onClick={() => {
                                                                setEdit(true);
                                                                setData(item);
                                                            }}
                                                                className="badge bg-theme-bg-2 text-white text-[12px] mx-2">
                                                                Edit
                                                            </button>
                                                            <a href="#!" className="badge bg-red-500 text-white text-[12px]">
                                                                Delete
                                                            </a>
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


                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Hello card</h5>
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Projects
