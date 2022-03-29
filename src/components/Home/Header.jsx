import React from 'react'

import carousel from '../../assets/img/carousel image.jpg'

const Header = () => {
  return (
    <header>
          <div className="carousel">
            <div className="img">
              <img src={carousel} alt="carousel img" />
            </div>
          </div>
    </header>
  )
}

export default Header