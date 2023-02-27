import Link from 'next/link'
import Logo from '../assets/images/logo.png'
import Image from 'next/image'
import Styles from '../styles/sidebar.module.scss'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddIcon from '@mui/icons-material/Add';

export default function Sidebar(props) {
    return (
        <ul className={Styles.sidebar}>
            <li>
                <Link href={props.order}>
                    <a>
                    <ShoppingCartCheckoutIcon /><p>注文管理</p>
                    </a>
                </Link>
            </li>
            {/* <li>
                <Link>
                    <TrendingUpIcon /><p>売上げ情報</p>
                </Link>
            </li> */}
            <li>
                <Link href={props.register}>
                    <a>
                        <AddIcon /><p>商品登録</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href={props.edit}>
                    <a>
                        <AppRegistrationIcon /><p>商品一覧</p>
                    </a>
                </Link>
            </li>
            <li>
                <a><LogoutIcon /><p>ログアウト</p></a>
            </li>
        </ul>
    )  
}