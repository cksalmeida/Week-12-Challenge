import HighQualityCard from './HighQualityCard';
import Trophy from '../assets/Trophy.svg';
import Guarantee from "../assets/Guarantee.svg"
import Shipping from "../assets/Shipping.svg"
import Support from "../assets/Support.svg"

function HighQuality() {
  const cards = [
    {
      Icon: Trophy,
      Title: 'High Quality',
      Description: 'Crafted from top materials',
    },
    {
      Icon: Guarantee,
      Title: 'Warranty Protection',
      Description: 'Over 2 years',
    },
    {
      Icon: Shipping,
      Title: 'Free Shipping',
      Description: 'Order over 150 $',
    },
    {
      Icon: Support,
      Title: '24 / 7 Support',
      Description: 'Dedicated support',
    },
  ];

  return (
    <div className="bg-[#FAF3EA] h-52 flex justify-around items-center p-6">
      {cards.map((card, index) => (
        <HighQualityCard
          key={index}
          Icon={card.Icon}
          Title={<h1 className="text-lg font-bold">{card.Title}</h1>}
          Description={<p className="text-gray-600">{card.Description}</p>}
        />
      ))}
    </div>
  )
}

export default HighQuality
