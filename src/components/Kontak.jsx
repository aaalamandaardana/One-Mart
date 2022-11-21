import React from 'react';
import { NavLink } from "react-router-dom";

const Kontak = () => {
    return (
        <div>
            <center class="isi">
                <h1 className='display-6 fw-bolder text-center'>Kontak Kami</h1>
                <hr />
                <center class="orang1">
                    <div class="gambar1">
                        <img src="/images/arda.jpeg" alt='Alamanda Ardana'/>
                    </div>
                    <table class="nama1">
                        <tr>
                            <td> 
                                <h1>Alamanda Ardana</h1>
                                <NavLink target="_blank" to="/github-arda"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='GitHub'/> </NavLink>
                                <NavLink target="_blank" to="/linkedin-arda"> <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt='LinkedIn' /> </NavLink>  
                                <NavLink target="_blank" to="/ig-arda"> <img src="http://store-images.s-microsoft.com/image/apps.31997.13510798887167234.6cd52261-a276-49cf-9b6b-9ef8491fb799.30e70ce4-33c5-43d6-9af1-491fe4679377" alt='Instagram' /> </NavLink>  
                            </td>
                        </tr>
                    </table>
                </center>

                <center class="orang1">
                    <div class="gambar1">
                        <img src="/images/rizal.jpg" alt='Rizal Mila Pambudi'/>
                    </div>
                    <table class="nama1">
                        <tr>
                            <td> 
                                <h1>Rizal Mila Pambudi</h1>
                                <NavLink target="_blank" to="/github-rizal"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='GitHub'/> </NavLink>
                                <NavLink target="_blank" to="/linkedin-rizal"> <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt='LinkedIn' /> </NavLink>  
                                <NavLink target="_blank" to="/ig-rizal"> <img src="http://store-images.s-microsoft.com/image/apps.31997.13510798887167234.6cd52261-a276-49cf-9b6b-9ef8491fb799.30e70ce4-33c5-43d6-9af1-491fe4679377" alt='Instagram' /> </NavLink>  
                            </td>
                        </tr>
                    </table>
                </center>

                <center class="orang1">
                    <div class="gambar1">
                    <img src="/images/fatcur.jpg" alt='Fatcurrahman'/>
                    </div>
                    <table class="nama1">
                        <tr>
                        <td> 
                                <h1>Fatcurrahman</h1>
                                <NavLink target="_blank" to="/github-fatcur"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='GitHub'/> </NavLink>
                                <NavLink target="_blank" to="/linkedin-fatcur"> <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt='LinkedIn' /> </NavLink>  
                                <NavLink target="_blank" to="/ig-fatcur"> <img src="http://store-images.s-microsoft.com/image/apps.31997.13510798887167234.6cd52261-a276-49cf-9b6b-9ef8491fb799.30e70ce4-33c5-43d6-9af1-491fe4679377" alt='Instagram' /> </NavLink>  
                            </td>
                        </tr>
                    </table>
                </center>

                <center class="orang1">
                    <div class="gambar1">
                        <img src="/images/qadri.jpg" alt='Lailatul Qadri'/>
                    </div>
                    <table class="nama1">
                        <tr>
                            <td> 
                                <h1>Lailatul Qadri</h1>
                                <NavLink target="_blank" to="/github-qadri"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='GitHub'/> </NavLink>
                                <NavLink target="_blank" to="/ig-qadri"> <img src="http://store-images.s-microsoft.com/image/apps.31997.13510798887167234.6cd52261-a276-49cf-9b6b-9ef8491fb799.30e70ce4-33c5-43d6-9af1-491fe4679377" alt='Instagram' /> </NavLink>  
                            </td>
                        </tr>
                    </table>
                </center>
            </center>
        </div>
    );
}

export default Kontak;
