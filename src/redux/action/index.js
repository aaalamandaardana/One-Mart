// Untuk Menambahkan Item ke Keranjang
export const tambahItem = (produk1) => {
    return {
        type : 'TAMBAHITEM',
        payload : produk1
    }
}

// Untuk Menghapus Item dari Keranjang
export const hapusItem = (produk1) => {
    return {
        type : 'HAPUSITEM',
        payload : produk1
    }
}