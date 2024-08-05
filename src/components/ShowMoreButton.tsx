import { useNavigate } from "react-router-dom";

const ShowMoreButton: React.FC = () => {
  const navigate = useNavigate()

  const handleShowMore = () => {
    navigate('/Shop');
  }

  return (
    <div className="flex justify-center mt-10 mb-10">
      <button onClick={handleShowMore} className="border px-8 py-2 font-semibold text-[#B88E2F] border-[#B88E2F]">
        Show More
      </button>
    </div>
  )
}

export default ShowMoreButton
