import { Link } from "@inertiajs/react"

function HeaderPages({pages, subPages, subsubPages, header}) {
    return (
        <div className="page-header">
            <div className="page-block">
                <div className="page-header-title">
                    <h5 className="mb-0 font-medium">{header?.header}</h5>
                </div>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="">{pages?.pages}</Link></li>
                    <li className="breadcrumb-item"><Link href="">{subPages?.subPages}</Link></li>
                    <li className="breadcrumb-item" aria-current="page">{subsubPages?.subsubPages}</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderPages
