import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import PieChartProduct from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import "./home.scss"
import BasicDemo from "../../components/widget/stackedBar"


const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
      <div className="widgets">
        <PieChartProduct type="product"/>
      </div>
      {/* <div className="charts">
        <Featured/>
        <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table/>
      </div> */}
      <>
    <BasicDemo/>
      </>
      </div>
    </div>
  )
}

export default Home