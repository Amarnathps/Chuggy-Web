import React from 'react'
import './Content.css'
function Content() {
    return (
        <div class="left">
            <div class="left-text">
                <h2>Order food from your favorite restaurants!</h2>
                <p>Delicious food delivered fast to your doorstep — anytime, anywhere.</p>

                <div class="search-bar">

                    <div>

                        <div>

                            <input type="text" placeholder='Search for restaurant, item or more" ' />




                        </div>
                    </div>
                </div>
            </div>
            <div class="right-image">
                <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800" alt="Delicious Food" srcset="" />
            </div>

        </div>




    )
}

export default Content
