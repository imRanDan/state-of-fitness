import React from 'react'

const Services = () => {
  return (
    <>
    <section className='services-banner-container'>
      <div className='services-banner'>
        <h2>Transform as you continue</h2>
        <p>We offer customized programs designed for each client to help them reach their next level. Whether that is weight loss, strength, toning, or conditioning.</p>
      </div>
    </section>

    <section className='services-grid'>
      <div className='main-card-container'>
        <div className='main-card'>
          <h3>gym</h3>
          <p>We offer a wide range of machines, free weights, and more for your fitness needs</p>
        </div>
      </div>

    <div className='side-card-container'>
      <div className='side-card card-1'>
        <div className='side-card-icon'></div>
        <h3>Zumba</h3>
      </div>
      <div className='side-card card-2'>
        <div className='side-card-icon'></div>
        <h3>Yoga</h3>
      </div>    
      <div className='side-card card-3'>
        <div className='side-card-icon'></div>
        <h3>Spin Classes</h3>
      </div>
    </div>


    </section>
    </>
  )
}

export default Services