import Header from '../components/Header'
import Footer from '../components/Footer'

const Checkout: React.FC = () => {

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        {/* Adicione seu conteúdo de checkout aqui */}
      </div>
      <Footer />
    </>
  )
}

export default Checkout
