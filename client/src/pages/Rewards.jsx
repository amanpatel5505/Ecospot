import React from 'react'
import './Reward.css'

const Rewards = () => {

    const handleClick = () => {
        document.getElementById('file-input').click();
      };

  return (
    <div className='rewards'>
      <main>
        <div className='reward-grid'>
          <section className='map'>
            <h2>ISSUE MAP</h2>
            <div className='map-container'></div>
          </section>
          <section className='report'>
            <h2>Report an Issue</h2>
            <form action=''>
              <input type='text' placeholder='Issue Title' />
              <textarea placeholder='Describe the issue...' />
              <div className='cam'>
                <button onClick={handleClick}>
                  <img src='' alt='' />
                  Upload Image
                 
                </button>
                <input type='file' name='' id='file-input' />
               
              </div>
              <button className='button-submit'>Submit Report</button>
            </form>
          </section>
          <section className='Dashboard'>
            <h2>Your Dashboard</h2>
            <div className='dashboard-container'>
              <div class='card'>
                <div class='card-header'>
                  <h3 class='card-title'>Recent Reports</h3>
                </div>
                <div class='card-content'>
                  <ul class='space-y-2'>
                    <li class='report-item'>
                      <span>Litter in Central Park</span>
                      <span class='badge badge-outline badge-yellow'>Open</span>
                    </li>
                    <li class='report-item'>
                      <span>Graffiti on Main St</span>
                      <span class='badge badge-outline badge-green'>
                        Resolved
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='card'>
                <div class='card-header'>
                  <h3 class='card-title'>Your Impact</h3>
                </div>
                <div class='card-content'>
                  <div class='text-center'>
                    <p class='impact-points'>250</p>
                    <p class='impact-description'>Points Earned</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section></section>
        </div>
      </main>
    </div>
  )
}

export default Rewards
