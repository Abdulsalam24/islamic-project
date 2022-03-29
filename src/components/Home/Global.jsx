import React from 'react'

import img1 from '../../assets/img/globallist-img.jpg'
import img2 from '../../assets/img/globallist-img2.jpg'
import img3 from '../../assets/img/globallist-img3.jpg'

const Global = () => {
    const globalList = [
        {
            id : 1,
            text : 'GENDER JUSTICE',
            img : img1
        }
        // {
        //     id : 2,
        //     text : 'CLIMATE CHANGE',
        //     img : img2
        // },
        // {
        //     id : 3,
        //     text : 'REFUGEES AND DISPLACED PEOPLE',
        //     img : img3
        // }
    ]
  return (
    <section className='global'>
            <div className="global-container">
            <div className="home-headings">
              <h3>
                <i>icon</i> GLOBAL CAMPAIGNS
              </h3>
            </div>
            <div className="global-carousel">
                {
                    globalList.map(global => (
                        <div className='list' key={global.id}>
                            <div className="list-img">
                                <img src={global.img} alt={global.text}/>
                                <div className="list-text">
                                    <h4>
                                        {global.text}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="global-btn">
                <button>DONATE</button>
                <button>VIEW ALL CAUSES</button>
            </div>
            </div>
    </section>
  )
}

export default Global