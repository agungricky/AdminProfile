function SkillNon_teknis({ data, title}) {
    return (
        <div className="col-span-12 md:col-span-9 lg:col-span-8">
            <div className="card">
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                <div className="card-body pc-component">
                    <ol className="list-decimal ltr:pl-4 rtl:pr-4">
                        {
                            data?.map((item, index) => (
                                <li key={index} className="mb-2">{item?.nama_ketrampilan} :: {item?.deskripsi}  </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default SkillNon_teknis
