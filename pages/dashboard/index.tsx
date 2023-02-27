import Head from 'next/head'
import Image from 'next/image'
import Styles from '../../styles/Dashboard.module.scss'
import { Sidebar } from '../../components/dashboard'
import { AuthProvider } from '../../context/AuthContext';


export default function Dashboard() {
  const order: string = '/dashboard/order';
  const register: string = '/dashboard/product-register';
  const edit:string = '/dashboard/product-edit';
  return (
    <AuthProvider>
      <div className={Styles.dashboard}>
        <Sidebar order={order} register={register} edit={edit} />
      </div>
    </AuthProvider>
  )
}