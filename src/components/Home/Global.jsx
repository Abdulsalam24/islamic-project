import React from 'react'

import img1 from '../../assets/img/globallist-img.jpg'
// import img2 from '../../assets/img/globallist-img2.jpg'
// import img3 from '../../assets/img/globallist-img3.jpg'

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
            <div className="container">
                <div className="global-heading heading">
                <h1>
                    GLOBAL CAMPAIGNS
                </h1>
                </div>
            <div className="global-carousel">
                {
                    globalList.map(global => (
                        <div className='global-list list' key={global.id}>
                            <div className="list-img">
                                <img src={global.img} alt={global.text}/>
                                <div className="list-text">
                                    <h1>
                                        {global.text}
                                    </h1>
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