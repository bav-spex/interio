import React from 'react'

function ProductTypeFour({product}) {
  return (
    <div className="type4__product__block">
        <img src={product.images} alt={product.productName} className="type4__product__image" />
    </div>
  )
}

export default ProductTypeFour