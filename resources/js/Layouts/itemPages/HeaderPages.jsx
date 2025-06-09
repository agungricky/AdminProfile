import { Children } from "react"

function HeaderPages({header, children}) {
    return (
        <div className="page-header">
            <div className="page-block">
                <div className="page-header-title">
                    <h5 className="mb-0 font-medium">{header?.header}</h5>
                </div>
                <ul className="breadcrumb">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export default HeaderPages
