import Link from 'next/link'
import Logo from '../assets/images/logo.png'
import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
    return (
        <div className='header'>
            <div className="left">
                <Image src={Logo} alt="logo" width={40} height={32} />
            </div>
            <div className="right">
                <ShoppingCartIcon />
            </div>
        </div>
    )  
}