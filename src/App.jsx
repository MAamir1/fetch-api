import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const getproducts = () => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => { setLoading(false) })
  }

  return (
    <div className='container'>
      <div className="row">


        <button className='btn btn-primary mb-5' onClick={getproducts}>Get Porducts</button>
        {
          (loading == true) ? (<div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>) : null
        }
        {
          products.map((product) => {
            return (
              <div className="col-md-3 my-3" key={product.id}>
                <Card product={product} />
              </div>
            )

          })
        }
      </div>
    </div>
  )
}
export default App