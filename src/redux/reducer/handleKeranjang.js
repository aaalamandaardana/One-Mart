const keranjang = [];

const handleKeranjang = (state = keranjang, action) => {
    const produk1 = action.payload;
    switch (action.type) {
        case 'TAMBAHITEM':
            // Cek Jika Produk Tersedia
            const tersedia = state.find((x) => 
                x.id === produk1.id);
            if (tersedia) {
                // Tambahkan Kuantitas
                return state.map((x) =>
                    x.id === produk1.id ? {...x, qty: x.qty + 1} : x
                );
            }
            else {
                const produk1 = action.payload;
                return [
                    ...state,
                    {
                        ...produk1,
                        qty: 1,
                    }
                ]
            }
            break;

        case 'HAPUSITEM':
            const tersedia1 = state.find((x) =>
                x.id === produk1.id);
            if (tersedia1.qty === 1) {
                return state.filter((x) => 
                    x.id !== tersedia1.id
                );
            }
            else {
                return state.map((x) =>
                    x.id === produk1.id ? {...x, qty: x.qty-1} : x
                );
            }
            break;
    
        default:
            return state;
            break;
    }
}

export default handleKeranjang;