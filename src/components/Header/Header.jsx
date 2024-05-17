import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className=" p-5 flex justify-between items-center border-b-2 max-w-7xl mx-auto mb-12"> 
            <h2 className='text-3xl font-bold bg-green-400 rounded-md p-2'>SocialMedia</h2>
            <div className='flex justify-between items-center gap-10 font-semibold text-gray-500'>
                <h3>Home</h3>
                <h3>Contact</h3>
                <h3>Notification</h3>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;