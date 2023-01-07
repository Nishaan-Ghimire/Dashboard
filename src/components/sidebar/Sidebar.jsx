import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <>
   <div className="sidebar">
    <div className="top">
        <span className="logo">
             Admin Nishan
        </span>
    </div>
    <hr />
    <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className="title">LIST</p>
            <li>
                <Person2Icon className='icon' />
                <span>Users</span>
            </li>

            <li>
                <ProductionQuantityLimitsIcon className='icon' />
                <span>Products</span>
            </li>

            <li>
                <FilterFramesIcon className='icon' />
                <span>Orders</span>
            </li>

            <li>
                <DeliveryDiningIcon className='icon' />
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <QueryStatsIcon className='icon' />
                <span>Stats</span>
            </li>

            <li>
                <NotificationsIcon className='icon' />
                <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <HealthAndSafetyIcon className='icon' />
                <span>System Health</span>
            </li>

            <li>
                <PsychologyIcon className='icon' />
                <span>Logs</span>
            </li>

            <li>
                <SettingsIcon className='icon' />
                <span>Settings</span>
            </li>

            <p className="title">USER</p>
            <li>
                <AccountCircleIcon className='icon' />
                <span>Profile</span>
            </li>

            <li>
                <LogoutIcon className='icon' />
                <span>Logout</span>
            </li>

            <li>
                <span>Color options</span>
            </li>
        </ul>
    </div>
  <div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
  </div>
   </div>
    </>
  )
}

export default Sidebar
