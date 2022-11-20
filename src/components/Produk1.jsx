import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { tambahItem } from '../redux/action';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

const Produk1 = () => {

    const {id} = useParams();
    const [produk1, setProduk1] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const tambahProduk1 = (produk1) => {
        dispatch(tambahItem(produk1));
    }

    useEffect(() => {
        const getProduk1 = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduk1(await response.json());
            setLoading(false);
        }
        getProduk1();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}} />
                </div>
            </>
        )
    }

    const ShowProduk1 = () => {
        return (
            <>
                <div className='produk1 col-md-6'>
                    <img src={produk1.image} alt={produk1.title} height="400px" width="400px" />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {produk1.category}
                    </h4>
                    <h1 className='display-5'>
                        {produk1.title}
                    </h1>
                    <p className='lead fw-bolder'>
                        Rating {produk1.rating && produk1.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        IDR {produk1.price}k
                    </h3>
                    <p className='lead'>
                        {produk1.description}
                    </p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={() => tambahProduk1(produk1)}>
                        Masukkan ke Keranjang
                    </button>
                    <NavLink to='/keranjang' className='btn btn-dark ms-5 px-3 py-2'>
                        Pergi ke Keranjang
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading/> : <ShowProduk1/>}
                </div>
            </div>
        </div>
    );
}

export default Produk1;
