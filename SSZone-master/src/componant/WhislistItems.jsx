import { FaHeart, FaRegClock, FaRegStar } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import { TiDocumentText } from 'react-icons/ti';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function WishlistItems() {
  const { wishlistItems, toggleWishlist, addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return <p className="text-center text-[18px] text-gray-500 py-10">Your wishlist is empty.</p>;
  }

  return (
    <div className="pb-[30px] px-4 sm:px-10 md:px-24 font-[Manrope]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlistItems.map((course, index) => (
          <div key={index} className="max-w-[400px] max-h-[499px] border-1 rounded-[12px] p-4 border-[#E3E3E3] hover:border-[#296AD2] flex flex-col gap-4">
            <div className="relative w-full">
              <img src={course.image} alt="" className="rounded-[12px]" />
              <div className="absolute top-2 left-4 bg-[#296AD2] py-2 px-[21px] rounded-[40px] flex gap-2 items-center">
                <FaRegClock className="text-white" />
                <p className="text-[14px] font-normal text-white">{course.duration}</p>
              </div>
              <button onClick={() => toggleWishlist(course)}
                className='cursor-pointer absolute top-2 right-4 bg-[#ffffff] rounded-full p-2'>
                <FaHeart className="text-red-600" />
              </button>
            </div>

            <div className="font-[Manrope] pb-2">
              <h3 className="pb-3 font-semibold text-[20px] text-[#292929]">{course.title}</h3>
              <p className="pb-3 font-normal text-[16px] text-[#6F6F6F]">{course.description}</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <TiDocumentText />
                  <p className="font-semibold text-[16px] text-[#292929]">{course.lessons} Lessons</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaRegStar className="text-[#F04438E5]" />
                  <p className="font-semibold text-[16px]">{course.rating}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center font-[Manrope]">
              <div className="flex items-center">
                <MdCurrencyRupee className="text-[#F04438] text-[20px]" />
                <p className="font-semibold text-[20px] text-[#F04438]">{course.price}</p>
              </div>
              <Link to={`/courseDetailsOverview/${course.id}`} state={course}>
                <button 
                // onClick={() => addToCart(course)}
                  className="cursor-pointer py-3 px-6 border-1 hover:bg-[#296AD2] hover:text-white border-[#296AD2] text-[#296AD2] font-medium text-[16px] rounded-[4px]">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistItems;
