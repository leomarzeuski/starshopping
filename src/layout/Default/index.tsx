import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import './styles.scss'

export function DefaultLayout() {
  return (
    <div className='LayoutContainer'>
      <Header />

      <Outlet />
    </div>
  )
}
