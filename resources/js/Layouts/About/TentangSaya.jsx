function TentangSaya({ desc }) {
    return (
        <div className="col-span-12 md:col-span-6">
            <div className="card">
                <div className="card-header">
                    <h5>Tentang Saya</h5>
                </div>
                <div className="card-body pc-component">
                    <p className="lead m-t-0">{desc?.deskripsi}</p>
                    <div className="flex flex-col mt-3">
                        <em>diBuat : {new Date(desc?.created_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}</em>

                        <em>diUpdate : {new Date(desc?.updated_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}</em>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TentangSaya
