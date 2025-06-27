import Main from "../Main";
import { useState } from "react";
import { Reply, Trash2 } from "lucide-react";

function Index() {
    const [activeTab, setActiveTab] = useState('inbox'); // inbox atau read

    const dummyMessages = [
        {
            id: 1,
            sender: "Andi Prasetyo",
            subject: "Permintaan Akses",
            message: "Halo, saya butuh akses ke modul proyek terbaru...",
            date: "17 Juni 2025",
            read: false,
        },
        {
            id: 2,
            sender: "Dewi Ayu",
            subject: "Revisi Laporan",
            message: "Tolong cek ulang bagian akhir laporan karena ada kesalahan...",
            date: "16 Juni 2025",
            read: true,
        },
        {
            id: 3,
            sender: "Rudi Santoso",
            subject: "Terima Kasih",
            message: "Terima kasih atas bantuannya pada tugas kemarin...",
            date: "15 Juni 2025",
            read: true,
        },
    ];

    const filteredMessages = dummyMessages.filter(msg =>
        activeTab === 'inbox' ? !msg.read : msg.read
    );

    return (
        <Main>
            <div className="pc-container">
                <div className="pc-content">
                    <div className="page-header mb-4">
                        <div className="page-block">
                            <div className="page-header-title">
                                <h5 className="mb-0 font-medium">Manajemen Pesan</h5>
                            </div>
                        </div>
                    </div>

                    {/* Tab */}
                    <div className="flex gap-4 border-b mb-4">
                        <button
                            onClick={() => setActiveTab('inbox')}
                            className={`px-4 py-2 border-b-2 font-medium ${
                                activeTab === 'inbox'
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            Pesan Masuk
                        </button>
                        <button
                            onClick={() => setActiveTab('read')}
                            className={`px-4 py-2 border-b-2 font-medium ${
                                activeTab === 'read'
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            Dibaca
                        </button>
                    </div>

                    {/* List Pesan */}
                    <div className="rounded-lg border border-gray-200 bg-white divide-y">
                        {filteredMessages.length === 0 ? (
                            <div className="p-4 text-center text-gray-500">Tidak ada pesan.</div>
                        ) : (
                            filteredMessages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`group flex justify-between items-center px-4 py-2 text-sm transition ${
                                        msg.read ? 'bg-white' : 'bg-gray-100'
                                    } hover:bg-blue-50`}
                                >
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-gray-800 truncate">
                                                {msg.sender}
                                            </span>
                                            <span className="text-gray-400 text-xs whitespace-nowrap">
                                                {msg.date}
                                            </span>
                                        </div>
                                        <div className="text-gray-700 font-semibold truncate">
                                            {msg.subject}
                                        </div>
                                        <div className="text-gray-500 truncate">
                                            {msg.message}
                                        </div>
                                    </div>
                                    <div className="hidden group-hover:flex gap-2 pl-4">
                                        <button className="text-blue-600 hover:text-blue-800">
                                            <Reply className="w-4 h-4" />
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Index;
