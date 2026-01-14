import React from 'react'
import './Pages2.css'
function Pages2() {
    return (

        <div className="restaurants">
            <h2>Top Restaurants Near You</h2>
            <div className="restaurant-grid">
                <div className="restaurant-card">
                    <img src="https://visitparistexas.com/wp-content/uploads/2024/12/2024_Restraunt_Burger_Palace-1.jpg" alt="" />
                    <div className="restaurant-info">
                        <h3>Burger Palace</h3>
                        <p>Burgers, Fast Food • 30 mins</p>
                    </div>
                </div>
                <div className="restaurant-card">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/8/19634778/fdf5e5079a0352d872204dad39bc0f08.jpg?fit=around|960:500&crop=960:500;*,*" alt="" />
                    <div className="restaurant-info">
                        <h3>Pizza Hut</h3>
                        <p>Pizza, Italian • 25 mins</p>
                    </div>
                </div>

                <div className="restaurant-card">
                    <img src="https://jalojog.com/wp-content/uploads/2024/04/Chicken_Biryani.jpg" alt="" />
                    <div className="restaurant-info">
                        <h3>Indian Spice</h3>
                        <p>North Indian, Biryani • 35 mins</p>
                    </div>
                </div>

                <div className="restaurant-card">
                    <img src="https://www.nutritics.com/en/wp-content/uploads/2024/05/coffee_shop_image_webp_29a43a4e9162d6f17445921e9b54cd85.webp" alt="" />
                    <div className="restaurant-info">
                        <h3>Sweet Treats</h3>
                        <p>Desserts, Bakery • 20 mins</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pages2
