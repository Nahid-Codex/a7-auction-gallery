import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white py-30 px-4'>
            <img src={logo} alt="Logo" className="w-32 sm:w-40 md:w-48" />

            <div className='flex flex-col sm:flex-row font-sora gap-2 sm:gap-4 mt-3 text-[#000] text-[19px] font-normal items-center'>
                <span>Bid.</span>
                <span>Win.</span>
                <span>Own.</span>
            </div>

            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 font-poppins font-normal justify-center text-[#000] mt-6 text-[14px] sm:text-base items-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">Auctions</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">How to works</a></li>
            </ul>

            <p className='mt-8 font-sora text-sm sm:text-base font-normal text-[#000] text-center'>
                © 2025 AuctionHub. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
