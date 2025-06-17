import TentangSaya from "@/Layouts/About/TentangSaya"
import Main from "../Main"
import RiwayatPendidikan from "@/Layouts/About/RiwayatPendidikan"
import Prestasi from "@/Layouts/About/Prestasi"
import List from "@/Layouts/About/List"

function Index({ tentangSaya, riwayatPendidikan, prestasi, tech, ketrampilanNonTeknis }) {
    return (
        <Main>
            <div className="pc-container">
                <div className="pc-content">
                    <div className="page-header">
                        <div className="page-block">
                            <div className="page-header-title">
                                <h5 className="mb-0 font-medium">Typography</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="../dashboard/index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="">Basic UI</a></li>
                                <li className="breadcrumb-item" aria-current="page">Typography</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                        <TentangSaya desc={tentangSaya} />
                        <RiwayatPendidikan pendidikan={riwayatPendidikan} />
                        <Prestasi prestasi={prestasi} />
                        <List data={tech} title="Teknologi di Gunakan" style="col-span-12 md:col-span-3 lg:col-span-4" />
                        <List data={ketrampilanNonTeknis} title="Keterampilan Non-Teknis" style="col-span-12 md:col-span-9 lg:col-span-8" />
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Index
