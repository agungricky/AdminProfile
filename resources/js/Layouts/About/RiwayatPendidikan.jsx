function RiwayatPendidikan({ pendidikan }) {
    console.log(pendidikan);
    return (
        <div className="col-span-12 md:col-span-6">
            <div className="card">
                <div className="card-header">
                    <h5>Riwayat Pendidikan</h5>
                </div>

                <div className="py-3">
                    {
                        pendidikan.map((item, index) => (
                            <div className="card-body pc-component !my-1 !py-2" key={index}>
                                <p className="text-muted text-md mb-1">{item?.nama_sekolah} [ {item?.jurusan} ]</p>
                                <blockquote className="px-4 text-[1rem]">
                                    <p className="mb-2">{item?.keterangan}</p>
                                    <footer
                                        className="text-[80%] before:content-['—'] text-theme-bodycolor/70 dark:text-themedark-bodycolor/70">
                                        Tahun Masuk: {item?.tahun_masuk} - Tahun Lulus: {item?.tahun_lulus}
                                        <br />
                                    </footer>
                                </blockquote>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default RiwayatPendidikan
