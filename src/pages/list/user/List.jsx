import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
// import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import { Link, useNavigate } from "react-router-dom"; 
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css"; 
const List = () => {
    let emptyProduct = {
        id: null,
        uuid:null,
        name_acc:'',
        name: '',
        description:'',
        role:0,
        // image: null,
        // price: 0,
        // quantity: 0,
        // rating: 0,
        phone:'',
        addr: '',
        status:null
    };

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(true);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name_acc.trim()) {
            let _products = [...products];
            let _product = { ...product };

            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
            console.log(_product);
        }
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        console.log(product);
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
      console.log(product);
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);

        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 10; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));

        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    };

    const onCategoryChange = (e) => {
        let _product = { ...product };

        _product['category'] = e.value;
        setProduct(_product);
    };

    const oninventoryStatusChange = (e) => {
      let _product = { ...product };

      _product['status'] = e.value;
      setProduct(_product);
    };
    const radioChangeRole = (e) => {
        let _product = { ...product };
  
        _product['role'] = e.value;
        setProduct(_product);
      };
    
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };
    const onInputChangeRole = (e, name) => {
        const val = (e.target && e.target.value) || '';
         console.log(e.target,typeof(Number(val)));
        const converNumb = Number(val);
        let _product = { ...product };

        _product[`${name}`] = converNumb;

        setProduct(_product);
    };
    
    const onInputNumberChange = (e, name) => {
         const val = e.value ;
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    // const imageBodyTemplate = (rowData) => {
    //     return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    // };

    // const priceBodyTemplate = (rowData) => {
    //     return formatCurrency(rowData.price);
    // };

    // const ratingBodyTemplate = (rowData) => {
    //     return <Rating value={rowData.rating} readOnly cancel={false} />;
    // };

    const BodyTemplatePrivacy = (rowData) => {
        if(rowData.status == 'Admin'){
            return <Tag value={rowData.role} severity={getSeverityPrivacy(rowData)}></Tag>;
        }
        else{
            return <Tag value={rowData.role} severity={getSeverityPrivacy(rowData)}></Tag>;
        }
    };
    const BodyTemplateStatus = (rowData) => {
        if(rowData.status == 'Kích hoạt'){
            return <Tag value={rowData.status} severity={getSeverityStatus(rowData)}></Tag>;
        }
        else{
            return <Tag value={rowData.status} severity={getSeverityStatus(rowData)}></Tag>;
        }
       
    };
    
    const linkAirbill = (rowData) => {
      // return <Tag value={rowData.airbill} severity={getSeverity(rowData)}> <Link to={`/product/${rowData.airbill}`}>{rowData.airbill}</Link></Tag>;
      return <Tag severity={getSeverity(rowData)}> <Link to={`/products/${rowData.airbill}`} style={{color:"#fff"}} state={{  data : rowData }} preventScrollReset={true} >{rowData.airbill}</Link></Tag>;
    };
    const actionBodyTemplate = (rowData) =>  {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };
    

    const getSeverityPrivacy = (product) => {
        switch (product.role) {
            case 'Admin':
                return 'success';

            case 'Nhân viên':
                return 'Primary';
            default:
                return null;
        }
    };
    const getSeverityStatus = (product) => {
        switch (product.status) {
            case 'Kích hoạt':
                return 'success';

            case 'Ngưng hoạt động':
                return 'danger';
            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage Products</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} scrollable scrollHeight="400px"  rowGroupMode="subheader" value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}>
                    <Column selectionMode="multiple" exportable={false}></Column>
                    {/* <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column> */}
                    {/* <Column field="id" header="STT" sortable style={{ minWidth: '5rem' }}></Column> */}
                    <Column field="id" header="Mã Định Danh" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="name_acc" header="Tên tài khoản" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="name" header="Tên nhân viên" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="phone" header="Số điện thoại" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="addr" header="Địa chỉ" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="description" header="Mô tả thêm" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="role" header="Quyền tài khoản" body={BodyTemplatePrivacy} sortable style={{ minWidth: '10rem' }}></Column>
                    {/* <Column field="detail_role" header="Mô tả quyền" sortable style={{ minWidth: '10rem' }}></Column> */}
                    <Column field="status" header="Trạng thái" body={BodyTemplateStatus} sortable style={{ minWidth: '10rem' }}></Column>
                    {/* <Column field="image" header="Image" body={imageBodyTemplate}></Column> */}
                    {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column> */}
                   
                    
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {/* {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="product-image block m-auto pb-3" />} */}
                <div className="field">
                    <label htmlFor="name_acc" className="font-bold">
                        Tên tài khoản
                    </label>
                    <InputText id="name_acc" value={product.name_acc} onChange={(e) => onInputChange(e, 'name_acc')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name_acc })} />
                    {submitted && !product.name_acc && <small className="p-error">Tên tài khoản bắt buộc</small>}
                </div>
                <div className="field">
                    <label htmlFor="name" className="font-bold">
                          Tên nhân viên
                    </label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.name && <small className="p-error">Tên nhân viên bắt buộc</small>}
                </div>
                <div className="field">
                    <label htmlFor="phone" className="font-bold">
                           Số điện thoại nhân viên
                    </label>
                    <InputText id="phone" value={product.phone} onChange={(e) => onInputChange(e, 'phone')}  autoFocus className={classNames({ 'p-invalid': submitted && !product.phone })} />
                   
                </div>
                <div className="field">
                    <label htmlFor="addr" className="font-bold">
                         Địa chỉ
                    </label>
                    <InputTextarea id="addr" value={product.addr} onChange={(e) => onInputChange(e, 'addr')} required rows={2} cols={20} />
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                        Description
                    </label>
                    <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label className="mb-3 font-bold">Quyền nhân viên</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="role1" name="role" value="Nhân viên" onChange={radioChangeRole} checked={product.role === 'Nhân viên'} />
                            <label htmlFor="role1">Nhân viên</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="role2" name="role" value="Admin" onChange={radioChangeRole} checked={product.role === 'Admin'} />
                            <label htmlFor="role2">Admin</label>
                        </div>
                    </div>
                </div>

                {/* <div className="field">
                    <label htmlFor="detail_role" className="font-bold">
                            Mô tả quyền
                    </label>
                    <InputText id="detail_role" value={product.detail_role} onChange={(e) => onInputChange(e, 'detail_role')}  autoFocus className={classNames({ 'p-invalid': submitted && !product.detail_role })} />
                   
                </div> */}

                <div className="field">
                    <label className="mb-3 font-bold">Trạng Thái</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="status1" name="status" value="Kích hoạt" onChange={oninventoryStatusChange} checked={product.status == '1'} />
                            <label htmlFor="status1">Kích hoạt</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="status2" name="status" value="Ngưng hoạt động" onChange={oninventoryStatusChange} checked={product.status == '0'} />
                            <label htmlFor="status2">Ngưng hoạt động</label>
                        </div>
                        {/* <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div> */}
                    </div>
                </div>
                <div className="formgrid grid">
                    {/* <div className="field col">
                        <label htmlFor="price" className="font-bold">
                            Price
                        </label>
                        <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity" className="font-bold">
                            Quantity
                        </label>
                        <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                    </div> */}
                    
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}
export default List;       