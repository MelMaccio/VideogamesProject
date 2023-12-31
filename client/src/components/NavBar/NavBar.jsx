import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return ( 
        <div className="nav-bar">
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">VG</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" href="#" to='/home'>Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="#" to='/create'>Create</Link>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-primary" type="submit">Search</button>
                  </form>
                </div>
              </div>
           </nav>
        </div>
     );
}

export default NavBar;