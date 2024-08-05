function HighQualityCard({ Icon, Title, Description }) {
  
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
      <img src={Icon} alt="icon" className="w-12 h-12 mb-2 md:mb-0 md:mr-4 hidden md:block"/>
      <div className="flex flex-col">
        {Title}
        {Description}
      </div>
    </div>
  );
}

export default HighQualityCard;