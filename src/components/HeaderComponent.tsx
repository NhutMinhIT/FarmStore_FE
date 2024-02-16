import Logo from '../assets/logo.png'

const HeaderComponent = () => {
    return (
        <header className='fixed shadow-md w-full h-20 px-2 md:px-4'>
            {/* desktop  */}
            <div className="flex h-full items-center">
                <div className="h-20 ">
                    <img src={Logo}
                        alt=''
                        className='h-full'
                    />
                </div>
            </div>
            {/* mobile   */}
        </header>
    )
}

export default HeaderComponent