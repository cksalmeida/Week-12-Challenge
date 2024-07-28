import { Link } from 'react-router-dom'

interface BreadcrumbsProps {
  productTitle: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ productTitle }) => {
  return (
    <div className="bg-[#F9F1E7] py-7 px-6 mb-10">
      <nav className="max-w-5xl mx-auto" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link to="/shop" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Shop
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-500">{productTitle}</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumbs
