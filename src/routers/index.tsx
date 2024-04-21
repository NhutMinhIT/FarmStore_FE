import ContentComponent from '../components/ContentComponent'
import HeaderComponent from '../components/HeaderComponent'
import HeaderMenu from '../components/HeaderMenu'

const AppRoutes = () => {
    return (
        <div className="mx-auto max-w-6xl flex flex-col">
            <div className="">
                <div className="">
                    <HeaderMenu />
                </div>
                <div className=''>
                    <HeaderComponent />
                </div>
            </div>
            <div className=''>
                <ContentComponent />
            </div>
        </div>
    )
}

export default AppRoutes