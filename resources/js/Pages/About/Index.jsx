import TentangSaya from "@/Layouts/About/TentangSaya"
import Main from "../Main"
import RiwayatPendidikan from "@/Layouts/About/RiwayatPendidikan"
import Tech from "@/Layouts/About/Tech"
import SkillNon_teknis from "@/Layouts/About/SkillNon_teknis"

function Index({ tentangSaya, riwayatPendidikan, tech, ketrampilanNonTeknis }) {
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

                    <div className="grid grid-cols-12 gap-6 auto-rows-min">
                        <div className="col-span-12 lg:col-span-6">
                            <TentangSaya desc={tentangSaya} />
                            <Tech data={tech} title="Teknologi di Gunakan" />

                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <RiwayatPendidikan pendidikan={riwayatPendidikan} />
                            <SkillNon_teknis data={ketrampilanNonTeknis} title="Keterampilan Non-Teknis" />
                        </div>
                    </div>

                </div>
            </div>
        </Main>
    )
}

export default Index
