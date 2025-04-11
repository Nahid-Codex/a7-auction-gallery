import heart from '../assets/heart.png';
import { IoMdClose } from "react-icons/io";

const FavoriteItems = ({ favorites, setFavorites }) => {
    // calculate total bids amount 
    const total = favorites.reduce((sum, item) => sum + item.currentBidPrice, 0);

    const deleteFavorite = (id) => {
        const updatedFavorites = favorites.filter(item => item.id !== id);
        setFavorites(updatedFavorites);
    };


    return (
        <div className="w-2/6 bg-white py-4 rounded-lg shadow text-center font-sora ">

            {/* Header */}
            <div className="flex p-4 border-b border-[#DCE5F3] items-center justify-center gap-x-2 text-3xl font-medium text-[#0E2954] mb-2">
                <img className='w-6' src={heart} alt="heart icon" />
                <h3>Favorite Items</h3>
            </div>

            {/* Favorites List or Empty State */}
            {favorites.length === 0 ? (
                <div className='text-black p-12 '>
                    <p className="text-2xl font-medium">No favorites yet</p>
                    <p className='text-base font-normal mt-5'>
                        Click the heart icon on any item to add it to your favorites
                    </p>
                </div>
            ) : (
                <ul className="text-[#0E2954]">
                    {favorites.map((item) => (
                        <li
                            key={item.id}
                            className="flex p-6 items-start justify-between border-b border-[#DCE5F3]"
                        >
                            <div className="flex items-start gap-3 text-left">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-24 h-24 object-cover rounded-sm"
                                />
                                <div>
                                    <p className="text-base font-normal text-[#0E2954] max-w-[160px]">
                                        {item.title}
                                    </p>
                                    <p className="text-base font-normal pt-1">
                                        ${item.currentBidPrice.toLocaleString()} &nbsp; Bids: {item.bidsCount}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => deleteFavorite(item.id)}
                                className="text-black hover:text-red-500 text-2xl font-bold pt-2 cursor-pointer"
                            >
                                <IoMdClose />
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Total Amount */}
            <div className="p-8 text-xl font-medium border-t border-[#DCE5F3]">
                <p>
                    Total bids Amount: ${favorites.length === 0 ? '0000' : total}
                </p>
            </div>
        </div>
    );
};

export default FavoriteItems;
