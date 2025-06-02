import Main from "../Main"
import { router } from '@inertiajs/react';
import HeaderPages from "@/Layouts/itemPages/HeaderPages";
import { useEffect, useState } from "react";
import ModalDetail from "@/Components/modal/ModalDetail";
import ModalEdit from "@/Components/modal/modalEdit";

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const [data, setData] = useState('');

    const [isEdit, setIsEdit] = useState(false);
    const toggleEdit = () => setIsEdit(!isEdit);

    return (
        <Main>
            <ModalDetail isOpen={isModalOpen} onClose={toggleModal} data={data} />
            <ModalEdit isOpen={isEdit} onClose={toggleEdit} data={data} />

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
                                                                setData(item);
                                                                setIsModalOpen(true);
                                                            }} className="badge bg-theme-bg-1 text-white text-[12px]">
                                                                Detail
                                                            </button>
                                                            <button onClick={() => {
                                                                setIsEdit(true);
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
