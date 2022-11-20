import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BarNavigasi = () => {
    const state = useSelector((state) => state.handleKeranjang)

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/beranda">
                    One-Mart
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link"  to="/beranda">Beranda</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/produk">Produk</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/kontak">Kontak</NavLink>
                        </li>
                        
                    </ul>
                    <div className='buttons'>
                        <NavLink to='/keranjang' className='btn btn-outline-dark ms-2'>
                            <i className='fa fa-shopping-cart me-1'></i>Keranjang ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default BarNavigasi;
