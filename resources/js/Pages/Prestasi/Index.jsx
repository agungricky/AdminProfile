import Prestasi from "@/Layouts/Prestasi/Prestasi"
import Main from "../Main"

function Index({ prestasi }) {
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
                        <Prestasi prestasi={prestasi} />
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Index
