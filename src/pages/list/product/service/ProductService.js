export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                weight:"",
                category:'Chuyên tuyến',
                inventoryStatus: 'INSTOCK', 
                airbill:'56783736363'       
             },
            // {
            //     id: '1001',
            //     code: 'f230fh0g4',
            //     name: 'Bamboo Watch 1',
            //     description: 'Product Description',
            //     weight:4,
            //     category: 'Accessories',
            //     inventoryStatus: 'INSTOCK',        
            // },
            // {
            //     id: '1003',
            //     code: 'f230fh0g4',
            //     name: 'Bamboo Watch 4',
            //     description: 'Product Description 4',
            //     weight:3,
            //     category: 'Accessories',
            //     inventoryStatus: 'INSTOCK',        
            // }
        ];
    },


   

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

   
};

