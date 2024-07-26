function BrowseHome({CardImg, Title}) {

  return (
    <div>
     <img src={CardImg} className="rounded-lg mb-8"/>
     <span className="font-bold text-xl text-[#333333]">{Title}</span>
    </div>
  )
}

export default BrowseHome