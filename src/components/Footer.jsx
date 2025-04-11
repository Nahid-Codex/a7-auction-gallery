import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white py-30'>
            <img src={logo} alt="" srcset="" />
            <div className='flex  font-sora  gap-4 mt-3 text-[#000] text-[22px] font-normal'>
                <span>Bid.</span>
                <span>Win.</span>
                <span>Own.</span>
            </div>
            <ul className="flex gap-8 font-poppins font-normal justify-center text[#000] mt-6 text-lg ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Auctions</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">How to works</a></li>
            </ul>
            <p className='mt-8 font-sora text-lg font-normal text-[#000]'>
                © 2025 AuctionHub. All rights reserved.
            </p>

        </div>
    );
};

export default Footer;