import { MenuDashboardComponent } from './MenuDashboardComponent'

export const AsideComponent = () => {
  return (
    <aside className=' h-screen w-60 bg-[#363740] '>
      <div className=' w-full h-24 flex justify-center items-center flex-row gap-4 mb-4'>
        <img src='/shop.svg' className=' w-8 h-8' />
        <h2 className='text-[#A4A6B3] font-bold text-lg'>Shop Random</h2>
      </div>
      <MenuDashboardComponent />
    </aside>
  )
}
