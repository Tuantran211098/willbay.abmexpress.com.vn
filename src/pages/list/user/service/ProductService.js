export const ProductService = {
    getProductsData() {
        return [
            {
                id: '10001',
                uuid: 'f230fh0g3',
                name_acc:'test@gmail.com',
                name: 'Bamboo Watch',
                phone: '035664332', 
                addr:' Bach Dang'  ,
                description: 'Product Description',
                role:2,
                status:1
             }
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

