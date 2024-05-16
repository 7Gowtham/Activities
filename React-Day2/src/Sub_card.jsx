function Sub_card({ title, price, user_type, storage, benefits }) {
    return <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
                <h6 className="card-price text-center">{price}<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{user_type}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{storage}</li>

                    {title === "FREE" && benefits.map((b, index) => (
                        <li key={index}>
                            <span className="fa-li">
                                <i className={index > 1 ? "fas fa-times text-muted" : "fas fa-check"}></i>
                            </span>
                            {b}
                        </li>
                    ))}

                    {title === "PLUS" && benefits.map((b, index) => (
                        <li key={index}>
                            <span className="fa-li">
                                <i className={index > 4 ? "fas fa-times text-muted" : "fas fa-check"}></i>
                            </span>
                            {b}
                        </li>
                    ))}

                    {title === "PRO" && benefits.map((b, index) => (
                        <li key={index}>
                            <span className="fa-li">
                                <i className="fas fa-check"></i>
                            </span>
                            {b}
                        </li>
                    ))}


                </ul>
                <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
    </div>
}

export default Sub_card