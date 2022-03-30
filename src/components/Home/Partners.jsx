import React from 'react'

import img1 from '../../assets/img/partners-img.jpg'

const Partners = () => {

    const patnersList =[
        {
            id : 1,
            img : img1
        }
    ]
  return (
    <section className='partners'> 
        <div className="container">
            <div className="heading">
              <h1>
                OUR PARTNERS
              </h1>
            </div>

            <div className="partners-carousel">
                {
                    patnersList.map(patner => (
                        <div className='list' key={patner.id}>
                            <div className="list-img">
                                <img src={patner.img} alt='patners img'/>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>

    </section>
  )
}

export default Partners