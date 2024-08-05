import Trophy from '../assets/Trophy.svg';
import Guarantee from "../assets/Guarantee.svg"
import Shipping from "../assets/Shipping.svg"
import Support from "../assets/Support.svg"
import HighQualityCard from './HighQualityCard';

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
    <div className="bg-[#FAF3EA] p-6 flex flex-col md:flex-row justify-around items-center gap-4 md:gap-8">
      {cards.map((card, index) => (
        <HighQualityCard
          key={index}
          Icon={card.Icon}
          Title={<h1 className="text-lg font-bold">{card.Title}</h1>}
          Description={<p className="text-gray-600">{card.Description}</p>}
        />
      ))}
    </div>
  );
}

export default HighQuality;