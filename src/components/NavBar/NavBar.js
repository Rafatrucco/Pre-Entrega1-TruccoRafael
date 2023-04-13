import CartWidget from "../CartWidget/CartWidget"
import shop from '../NavBar/assets/shopping-favicon.png'

const NavBar = () => {
    return (
        <nav>
                       <section>
                                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src={shop} alt="cart-widget" width="80" height="84"/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        
                            <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"> <button>Prenda Superior</button></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" href="#"><button>Prenda Inferior</button></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" href="#"><button>Calzado</button></a>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                <CartWidget/>
                            </span>
                            </div>
                        </div>
                        </nav>
                </section>    


        </nav>

        
    )
}

export default NavBar