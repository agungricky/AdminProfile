function List({ data, title, style }) {
    return (
        <div className={style}>
            <div className="card">
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                <div className="card-body pc-component">
                    <ol className="list-decimal ltr:pl-4 rtl:pr-4">
                        {
                            data?.map((item, index) => (
                                <li key={index} className="mb-2">{item?.Teknologi}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default List
