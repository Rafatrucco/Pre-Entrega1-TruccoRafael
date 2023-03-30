import CartWidget from "../CartWidget/CartWidget"
import shop from '../NavBar/assets/shopping-favicon.png'

const NavBar = () => {
    return (
        <nav>
                       <section>
                                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#"><img src={shop} alt="cart-widget" width="80" height="84"/></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        
                            <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"> <button>Prenda Superior</button></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link active" href="#"><button>Prenda Inferior</button></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link active" href="#"><button>Calzado</button></a>
                                </li>
                            </ul>
                            <span class="navbar-text">
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