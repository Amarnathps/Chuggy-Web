import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div>
      <nav class="nav-bar">
        <div class="logo">
          <div class="logo-icon">C</div>
          <h1>Chuggy</h1>
        </div>
        <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">Restaurants</a>
          <a href="#">Offers</a>
          <a href="#">Help</a>
          <button class="signin-btn">Sign in</button>
        </div>
      </nav>

    </div>
  )
}
