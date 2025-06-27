import HeaderPages from "@/Layouts/itemPages/HeaderPages"
import Main from "../Main"
import { Link, useForm } from "@inertiajs/react"
import Modal from "@/Components/modal/Modal";
import { useState } from "react";
import InputText from "@/Components/form/InputText";
import Select from "@/Components/form/Select";
import Button_primary from "@/Components/button/Button_primary";
import TextArea from "@/Components/form/TextArea";


function Karier({ karir }) {
    const [add, setAdd] = useState(false);
    const [detail, setDetail] = useState(false);
    const { data, setData, post, patch } = useForm(null);

    return (
        <Main>
            {/* Add Project */}
            <Modal
                isOpen={add}
                onClose={() => { setAdd(false) }}
                header="Tambah Karier"
                body={
                    <form className="p-4 md:p-5" id="projectAdd"
                    // onSubmit={handleAdd}
                    >
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-1">
                                <InputText
                                    label="Nama Perusahaan"
                                    name={data?.perusahaan}
                                    onChange={(e) => setData('perusahaan', e.target.value)}
                                    placeholder="Masukkan Nama Perusahaan" />
                            </div>
                            <div className="col-1">
                                <Select
                                    name="model_kerja"
                                    label="Model Kerja"
                                    value={data.model_kerja}
                                    onChange={(e) => setData('model_kerja', e.target.value)}
                                >
                                    <option value="Fulltime">Fulltime</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Project Based">Project Based</option>
                                </Select>
                            </div>
                            <div className="col-span-2">
                                <TextArea
                                    label="Jobdesk"
                                    name={data?.jobdesk}
                                    onChange={(e) => setData('jobdesk', e.target.value)}
                                    placeholder="Masukkan Jobdesk" />
                            </div>
                            <div className="col-span-2">
                                <InputText
                                    label="Lokasi"
                                    name={data?.lokasi}
                                    onChange={(e) => setData('lokasi', e.target.value)}
                                    placeholder="Masukkan Lokasi" />
                            </div>
                        </div>
                    </form>
                }
                footer={
                    <button
                        type="submit"
                        form="projectAdd"
                        // onSubmit={handleUpdate}
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
                header={data?.perusahaan}
                subheader={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                body={
                    <div>
                        <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="ms-5 text-sm font-medium text-gray-500">
                                Lama Bekerja
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                2020 - 2024 (4 Tahun)
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="ms-5 text-sm font-medium text-gray-500">
                                Model Kerja
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data?.model_kerja}
                            </dd>
                        </div>
                        <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="ms-5 text-sm font-medium text-gray-500">
                                Lokasi Tempat Kerja
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data?.lokasi}
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="ms-5 text-sm font-medium text-gray-500">
                                Jobdesk
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data?.jobdesk}
                            </dd>
                        </div>
                        {/* <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="ms-5 text-sm font-medium text-gray-500">
                                About
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                            </dd>
                        </div> */}
                    </div>
                }
            // footer={
            //     <>
            //         <button
            //             onClick={() => setDetail(false)}
            //             className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            //         >
            //             Tutup Modal
            //         </button>
            //     </>
            // }
            />

            <div className="pc-container">
                <div className="pc-content">
                    <HeaderPages
                        header={{ header: 'riwayat karier' }}
                    >
                        <li className="breadcrumb-item"><Link href="">About</Link></li>
                        <li className="breadcrumb-item" aria-current="page">Riwayat karier</li>
                    </HeaderPages>

                    <div className="col-span-12 xl:col-span-8 md:col-span-6">
                        <div className="card table-card">
                            <div className="card-header">
                                <div className="flex justify-between items-center">
                                    <h5 className="mb-0 font-bold text-xl">All Karier</h5>
                                    <Button_primary title="Tambah Karier" onClick={() => setAdd(true)} />
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            {
                                                karir.map((item, index) => (
                                                    <tr className="unread" key={index}>
                                                        <td>
                                                            <div className="font-bold">{index + 1}</div>
                                                        </td>
                                                        <td>
                                                            <h6 className="mb-1">{item?.perusahaan}</h6>
                                                            {item?.jobdesk?.length > 100 ? item.jobdesk.slice(0, 60) + '...' : item.jobdesk}
                                                        </td>
                                                        <td>
                                                            <i
                                                                className={`fas fa-circle text-[10px] ltr:mr-4 rtl:ml-4 ${item.status === 'show' ? 'text-green-500' : 'text-red-500'
                                                                    }`}
                                                            />
                                                        </td>
                                                        <td>
                                                            <div className="">Model Kerja</div>
                                                            <div className="font-bold">{item?.model_kerja}</div>
                                                        </td>
                                                        <td>
                                                            <div className="">Lokasi</div>
                                                            <div className="font-bold">{item?.lokasi}</div>
                                                        </td>
                                                        <td>
                                                            <div className="flex items-center space-x-4">
                                                                <label className="relative inline-flex items-center cursor-pointer">
                                                                    {/* <input
                                                                        type="checkbox"
                                                                        checked={item.status === 'show'}
                                                                        onChange={() => handleToggle(item.id, item.status === 'show' ? 'hide' : 'show')}
                                                                        className="sr-only peer"
                                                                    /> */}
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
                                                            <button
                                                                // onClick={() => Edit(item)}
                                                                className="badge bg-theme-bg-2 text-white text-[12px] mx-2">
                                                                Edit
                                                            </button>
                                                            <button onClick={() => {
                                                                // setDestroy(true);
                                                                // setData(item);
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

export default Karier
