import { useState } from "react";
import Main from "../Main";
import { Edit3, Trash2, CircleCheck, Loader2, FolderCheck } from "lucide-react";

const dummyProjects = [
    {
        id: 1,
        title: "Aplikasi Inventory",
        description: "Sistem manajemen barang secara online.",
        status: "Active",
        image: "https://source.unsplash.com/400x200/?inventory,warehouse",
    },
    {
        id: 2,
        title: "Website Sekolah",
        description: "Informasi sekolah dan pendaftaran online.",
        status: "In Progress",
        image: "https://source.unsplash.com/400x200/?school,website",
    },
    {
        id: 3,
        title: "Sistem Absensi",
        description: "Absensi pegawai berbasis web dan QR Code.",
        status: "Done",
        image: "https://source.unsplash.com/400x200/?attendance,qr",
    },
];

const statusColor = {
    Active: "bg-green-100 text-green-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Done: "bg-blue-100 text-blue-700",
};

const statusIcon = {
    Active: <CircleCheck className="w-4 h-4 mr-1" />,
    "In Progress": <Loader2 className="w-4 h-4 mr-1 animate-spin" />,
    Done: <FolderCheck className="w-4 h-4 mr-1" />,
};

const tabOptions = ["Semua", "Active", "In Progress", "Done"];

function Index() {
    const [activeTab, setActiveTab] = useState("Semua");

    const filteredProjects = activeTab === "Semua"
        ? dummyProjects
        : dummyProjects.filter((p) => p.status === activeTab);

    return (
        <Main>
            <div className="pc-container">
                <div className="pc-content">
                    <div className="page-header">
                        <div className="page-block">
                            <div className="page-header-title">
                                <h5 className="mb-0 font-medium">Project Management</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item" aria-current="page">Projects</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-6 mb-4">
                        <h2 className="text-xl font-semibold">Daftar Project</h2>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow">
                            + Tambah Project
                        </button>
                    </div>

                    {/* TAB FILTER */}
                    <div className="mb-4 flex gap-2 flex-wrap">
                        {tabOptions.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-full text-sm border ${activeTab === tab
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* PROJECT LIST */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-24 object-cover" />
                                <div className="p-3">
                                    <h3 className="text-sm font-semibold">{project.title}</h3>
                                    <p className="text-gray-600 text-xs mt-1 line-clamp-2">{project.description}</p>
                                    <div className={`flex items-center mt-2 text-xs font-medium px-2 py-1 rounded w-fit ${statusColor[project.status]}`}>
                                        {statusIcon[project.status]} {project.status}
                                    </div>
                                    <div className="flex justify-end gap-1 mt-2">
                                        <button className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1">
                                            <Edit3 className="w-3 h-3" /> Edit
                                        </button>
                                        <button className="text-red-600 hover:text-red-800 text-xs flex items-center gap-1">
                                            <Trash2 className="w-3 h-3" /> Hapus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Main>
    );
}

export default Index;
