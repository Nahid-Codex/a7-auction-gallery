import heart from '../assets/heart.png';
import heartFill from '../assets/heart-fill.png';

const AuctionTable = ({ auctions, handleFavorite, favorites }) => {
    return (
        <div className="w-4/6 font-sora">
            <table className="min-w-full bg-white rounded-2xl overflow-hidden shadow">
                <thead>
                    <tr className="text-[#000] font-normal text-lg text-left">
                        <td className="p-4">Items</td>
                        <td className="p-4">Current Bid</td>
                        <td className="p-4">Time Left</td>
                        <td className="p-4">Bid Now</td>
                    </tr>
                </thead>
                <tbody>
                    {auctions.map((item) => {
                        const isFavorited = favorites.filter(fav => fav.id === item.id).length > 0;

                        return (
                            <tr key={item.id} className="border-t border-[#DCE5F3] text-[#0E2954] hover:bg-gray-50">
                                <td className="py-6 px-8 flex gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <span className="pt-1 text-lg font-normal">{item.title}</span>
                                </td>
                                <td className="p-4 font-medium">
                                    ${item.currentBidPrice.toLocaleString()}
                                </td>
                                <td className="p-4 font-medium">{item.timeLeft} days left</td>
                                <td className="p-4">
                                    <button
                                        onClick={() => !isFavorited && handleFavorite(item)}
                                        disabled={isFavorited}
                                        className={`p-2 rounded-full ${
                                            isFavorited ? ' cursor-not-allowed' : 'cursor-pointer'
                                        }`}
                                    >
                                        <img src={isFavorited ? heartFill : heart} alt="favorite icon" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AuctionTable;
