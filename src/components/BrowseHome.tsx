function BrowseHome({ CardImg, Title }) {
  return (
    <div className="flex flex-col items-center">
      <img src={CardImg} className="rounded-lg mb-8 h-auto object-cover" alt={Title} />
      <span className="font-bold text-xl text-[#333333]">{Title}</span>
    </div>
  );
}

export default BrowseHome;