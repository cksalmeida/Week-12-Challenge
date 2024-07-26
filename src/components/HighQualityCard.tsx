function HighQualityCard({ Icon, Title, Description }) {

  return (
    <div className="flex items-center">
      <img src={Icon} alt="icon" className="w-12 h-12 mr-2"/>
      <div className="flex flex-col">
        {Title}
        {Description}
      </div>
    </div>
  )
}

export default HighQualityCard
