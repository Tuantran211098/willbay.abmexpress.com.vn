import "./single.scss";
import { BreadCrumb } from 'primereact/breadcrumb';
import { useNavigate, useParams,useLocation } from 'react-router-dom';
const Single = () => {
  let { state } = useLocation();
  const params = useParams();
  console.log(state,params);
  const items = [{ label: 'Chi Tiết Vận Đơn' }, { label: `${params.productId}`}];
  const home = { icon: 'pi pi-home', url: 'https:///primereact' };
  // const params = useParams();
  // const [singleData, setSingleData] = useState({});

  var navigate = useNavigate();
  return (
    <BreadCrumb model={items} home={home} />
  )
}

export default Single

