import Link from 'next/link'
import Style from './styles/setmenu.module.scss';
import berger from '../assets/images/berger.png'
import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function SetMenu() {
    return (
        <div>
            <div className={Style.ttlBx}>
                <h2 className={Style.ttl}>
                SetMenu
                    <span>セットメニュー</span>
                </h2>
            </div>
                {/* <ul>
                    <li>
                    <Link href="/products/smartphone">
                        <a>スマホ</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/products/pc">
                        <a>パソコン</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/products/headphone">
                        <a>ヘッドフォン</a>
                    </Link>
                    </li>
                </ul> */}
            <div className={Style.ovf}>
                <div className={Style.left}>
                    <div className={Style.imagesBx}>
                        <Image src={berger} alt="kv" layout="fill" objectFit="contain" priority={true} />
                    </div>
                    <h3 className={Style.productTtl}>
                        Cheese&nbsp;Berger
                    </h3>
                    <ul className={Style.productCounter}>
                        <li>-</li>
                        <li>1</li>
                        <li>+</li>
                    </ul>
                    <span className={Style.ovf}>
                        <p className={Style.price}>￥980</p>
                        <span className={Style.cart}>
                            <ShoppingCartIcon />
                        </span>
                    </span>
                </div>
                <ul className={Style.right}>
                    <li className={Style.productList}>
                        <span className={Style.imagesBx}>
                            <Image src={berger} alt="kv" layout="fill" objectFit="contain" priority={true} />
                        </span>
                        <h3 className={Style.productTtl}>
                            Cheese&nbsp;Berger
                        </h3>
                        <ul className={Style.productCounter}>
                            <li>-</li>
                            <li>1</li>
                            <li>+</li>
                        </ul>
                        <span className={Style.ovf}>
                            <p className={Style.price}>￥980</p>
                            <span className={Style.cart}>
                                <ShoppingCartIcon />
                            </span>
                        </span>
                    </li>
                    <li className={Style.productList}>
                        <span className={Style.imagesBx}>
                            <Image src={berger} alt="kv" layout="fill" objectFit="contain" priority={true} />
                        </span>
                        <h3 className={Style.productTtl}>
                            Cheese&nbsp;Berger
                        </h3>
                        <ul className={Style.productCounter}>
                                <li>-</li>
                                <li>1</li>
                                <li>+</li>
                            </ul>
                            <span className={Style.ovf}>
                                <p className={Style.price}>￥980</p>
                                <span className={Style.cart}>
                                    <ShoppingCartIcon />
                                </span>
                            </span>
                    </li>
                    <li className={Style.productList}>
                        <span className={Style.imagesBx}>
                            <Image src={berger} alt="kv" layout="fill" objectFit="contain" priority={true} />
                        </span>
                        <h3 className={Style.productTtl}>
                            Cheese&nbsp;Berger
                        </h3>
                        <ul className={Style.productCounter}>
                                <li>-</li>
                                <li>1</li>
                                <li>+</li>
                            </ul>
                            <span className={Style.ovf}>
                                <p className={Style.price}>￥980</p>
                                <span className={Style.cart}>
                                    <ShoppingCartIcon />
                                </span>
                            </span>
                    </li>
                    <li className={Style.productList}>
                        <span className={Style.imagesBx}>
                            <Image src={berger} alt="kv" layout="fill" objectFit="contain" priority={true} />
                        </span>
                        <h3 className={Style.productTtl}>
                            Cheese&nbsp;Berger
                        </h3>
                        <ul className={Style.productCounter}>
                                <li>-</li>
                                <li>1</li>
                                <li>+</li>
                            </ul>
                            <span className={Style.ovf}>
                                <p className={Style.price}>￥980</p>
                                <span className={Style.cart}>
                                    <ShoppingCartIcon />
                                </span>
                            </span>
                    </li>
                    {/* <li><Image src={berger} alt="kv" layout="fill" objectFit="contain" priority={true}/></li>
                    <li><Image src={berger} alt="kv" layout="fill" objectFit="contain" priority={true}/></li>
                    <li><Image src={berger} alt="kv" layout="fill" objectFit="contain" priority={true}/></li> */}
                </ul>
            </div>
        </div>
    )  
}