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
                                <NavLink target="_blank" to="https://github.com/aaalamandaardana"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='GitHub'/> </NavLink>
                                <NavLink target="_blank" to="https://www.linkedin.com/in/alamanda-ardana-51b278124/"> <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt='LinkedIn' /> </NavLink>  
                                <NavLink target="_blank" to="https://www.instagram.com/alamandaardana/"> <img src="http://store-images.s-microsoft.com/image/apps.31997.13510798887167234.6cd52261-a276-49cf-9b6b-9ef8491fb799.30e70ce4-33c5-43d6-9af1-491fe4679377" alt='Instagram' /> </NavLink>  
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
                                <NavLink target="_blank" to="https://github.com/Rijal25"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='GitHub'/> </NavLink>
                                <NavLink target="_blank" to="https://www.linkedin.com/in/rizal-pambudi-93a647243/"> <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt='LinkedIn' /> </NavLink>  
                                <NavLink target="_blank" to="https://www.instagram.com/rizalpambudi7/"> <img src="http://store-images.s-microsoft.com/image/apps.31997.13510798887167234.6cd52261-a276-49cf-9b6b-9ef8491fb799.30e70ce4-33c5-43d6-9af1-491fe4679377" alt='Instagram' /> </NavLink>  
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
                                <NavLink target="_blank" to="https://github.com/thebegithub"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='GitHub'/> </NavLink>
                                <NavLink target="_blank" to="https://www.linkedin.com/in/fatcur-rahman-77268124a/"> <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt='LinkedIn' /> </NavLink>  
                                <NavLink target="_blank" to="https://www.instagram.com/ftcur_rahman.125/"> <img src="http://store-images.s-microsoft.com/image/apps.31997.13510798887167234.6cd52261-a276-49cf-9b6b-9ef8491fb799.30e70ce4-33c5-43d6-9af1-491fe4679377" alt='Instagram' /> </NavLink>  
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
                                <NavLink target="_blank" to="https://github.com/kadriputra?tab=following"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='GitHub'/> </NavLink>
                                <NavLink target="_blank" to="https://www.instagram.com/kadri_putra021/"> <img src="http://store-images.s-microsoft.com/image/apps.31997.13510798887167234.6cd52261-a276-49cf-9b6b-9ef8491fb799.30e70ce4-33c5-43d6-9af1-491fe4679377" alt='Instagram' /> </NavLink>  
                            </td>
                        </tr>
                    </table>
                </center>
            </center>
        </div>
    );
}

export default Kontak;
