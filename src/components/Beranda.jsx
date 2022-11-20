import React from 'react';
import Produk from './Produk';

const Beranda = () => {
    return (
        <div className='carousell'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i0.wp.com/kamusnetizen.com/wp-content/uploads/2022/03/abstract-yellow-halftone-comic-zoom-background-vector.jpg?resize=806.25%2C538&ssl=1" className="d-block w-100" alt="Awalan" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <center className='container'>
                            <img src='/images/onemart.png' alt='One Mart' />
                            <p className='carousel-title display-3 fw-bolder md-0'>DAPATKAN BARANG</p>
                            <p className='carousel-title display-3 fw-bolder md-0'>BERKUALITAS MAKSIMAL</p>
                            <p className='carousel-title display-3 fw-bolder md-0'>DENGAN HARGA MINIMAL</p>
                        </center>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/pakaian-carousel.jpg" className="d-block w-100" alt="Pakaian" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Pakaian</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="images/aksesoris-carousel.jpg" className="d-block w-100" alt="Aksesoris"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Aksesoris</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/elektronik-carousel.jpeg" className="d-block w-100" alt="Elektronik"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Elektronik</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

            <Produk/>
        </div>
    );
};

export default Beranda;
