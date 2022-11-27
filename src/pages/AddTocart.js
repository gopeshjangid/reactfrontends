import React from 'react'
import { useState } from 'react';

const AddTocart = () => {


	const [num, setNum] = useState(0);

  const [nums, setNums] = useState(0);

  
//   useEffect(() => {
//     alert('I am Clicked: ' + num)

//   }, [num]);

    
//    useEffect((nums) => {
//      alert('Hello I am Count: ' + nums)

//   }, [nums]);
	return (
<div className="Cart">
  <div className="container">
    <div className="out-cart">
      <div className="inner-cart">
        <table className="table bg-transparent table-borderless border-0 mb-3">
          <tbody><tr className="border-0">
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col" className="text-center p-0">Price</th>
              <th scope="col" className="text-center p-0">Quantity</th>
              <th scope="col" className="text-center p-0">Total</th>
            </tr>
          </tbody><tbody>
            <tr className="second-tr">
              <th scope="col">
			  <i aria-hidden="true" class="fas fa-times"></i>
			  </th>
              <th scope="col"><a href="https://getprowriter.com/product/basic-guest-posts/">
                  <img src="https://getprowriter.com/wp-content/uploads/woocommerce-placeholder-300x300.png" className="woocommerce-placeholder wp-post-image" alt="Placeholder" loading="lazy" srcSet="https://getprowriter.com/wp-content/uploads/woocommerce-placeholder-300x300.png 300w, https://getprowriter.com/wp-content/uploads/woocommerce-placeholder-100x100.png 100w, https://getprowriter.com/wp-content/uploads/woocommerce-placeholder-600x600.png 600w, https://getprowriter.com/wp-content/uploads/woocommerce-placeholder-1024x1024.png 1024w, https://getprowriter.com/wp-content/uploads/woocommerce-placeholder-150x150.png 150w, https://getprowriter.com/wp-content/uploads/woocommerce-placeholder-768x768.png 768w, https://getprowriter.com/wp-content/uploads/woocommerce-placeholder-16x16.png 16w, https://getprowriter.com/wp-content/uploads/woocommerce-placeholder.png 1200w" sizes="(max-width: 300px) 100vw, 300px" /></a></th>
              <th scope="col">BASIC GUEST POST</th>
              <th scope="col" className="p-0 text-center"><span className>
                  <bdi>
                    <span className>₹</span>
                    50.00
                  </bdi>
                </span>
              </th>
              <th scope="col" className="p-0 text-center">
                <div className="quantity d-flex align-items-center justify-content-between w-50 m-auto">
                  <span className="cursor-pointer" data-action-type="minus"  onClick={() => { setNums(nums - 1) }}>-</span>
                  <h3> {num + nums}</h3>
                  <span className data-action-type="plus" onClick={() => { setNum(num + 1) }}>+</span>
                </div>
              </th>
              <th scope="col" className="p-0 text-center"><span className="woocommerce-Price-amount amount">
                  <bdi>
                    <span className>₹</span>
                    50.00
                  </bdi>
                </span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="coupon-wrap">
        <div className="coupon-inner">
          <div className="coupon">
            <input type="text" className="bg-transparent border-0" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>
          <a href="#">
            <i aria-hidden="true" className="fas fa-chevron-left" />
            Continue Shopping</a>
        </div>
        <div className="cart-collaterals">
          <div className="eael-cart-update-btn">
            <button>Update Cart</button>
          </div>
          <div className="cart_totals ">
            <table className="shop_table shop_table_responsive">
              <tbody>
                <tr className="cart-subtotal">
                  <th scope="col">Subtotal</th>
                  <td data-title="Subtotal">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">₹</span>
                        50.00</bdi>
                    </span>
                  </td>
                </tr>
                <tr className="order-total">
                  <th scope="col">Total</th>
                  <td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">₹</span>50.00</bdi></span></strong> </td>
                </tr>
              </tbody>
            </table>
            <div className="wc-proceed-to-checkout">
              <a href="https://getprowriter.com/checkout/" className="checkout-button button alt wc-forward">
                <button>Proceed to Checkout  </button>       </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

		
	
	)
}

export default AddTocart
