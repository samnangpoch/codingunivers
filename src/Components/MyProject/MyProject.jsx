import React from 'react'
import './MyProject.css'
import img1 from '../Assets/sunset.jpg'

const MyProject = () => {

 return (
  <div className='contain'>
    <section id='projects'>
    <h5>My Projects</h5>
    
      <div className='my_project'>
        <div className='myproject_card'>
          <div className='pic'>
            <img src={img1} alt="image" />
          </div>
          <h6>Best Alpha Limited</h6>
          <div className='all_language'>
            <div className='language'>
              <label> React JS</label>
            </div>
            <div className='language'>
              <label> Tailwind CSS</label>
            </div>
            <div className='language'>
              <label> Next JS</label>
            </div>
          </div>
          <div className="card__footer">
            <div className="card__Footer__first">
                <label>Code</label>
            </div>
            <div className="card__Footer__second">
              <label>View</label>
            </div>
          </div>
        </div>

        <div className='myproject_card'>
          <div className='pic'>
            <img src={img1} alt="image" />
          </div>
          <h6>Best Alpha Limited</h6>
          <div className='all_language'>
            <div className='language'>
              <label> React JS</label>
            </div>
            <div className='language'>
              <label> Tailwind CSS</label>
            </div>
            <div className='language'>
              <label> Next JS</label>
            </div>
          </div>
          <div className="card__footer">
            <div className="card__Footer__first">
                <label>Code</label>
            </div>
            <div className="card__Footer__second">
              <label>View</label>
            </div>
          </div>
        </div>

        <div className='myproject_card'>
          <div className='pic'>
            <img src={img1} alt="image" />
          </div>
          <h6>Best Alpha Limited</h6>
          <div className='all_language'>
            <div className='language'>
              <label> React JS</label>
            </div>
            <div className='language'>
              <label> Tailwind CSS</label>
            </div>
            <div className='language'>
              <label> Next JS</label>
            </div>
          </div>
          <div className="card__footer">
            <div className="card__Footer__first">
                <label>Code</label>
            </div>
            <div className="card__Footer__second">
              <label>View</label>
            </div>
          </div>
        </div>

        <div className='myproject_card'>
          <div className='pic'>
            <img src={img1} alt="image" />
          </div>
          <h6>Best Alpha Limited</h6>
          <div className='all_language'>
            <div className='language'>
              <label> React JS</label>
            </div>
            <div className='language'>
              <label> Tailwind CSS</label>
            </div>
            <div className='language'>
              <label> Next JS</label>
            </div>
            <div className='language'>
              <label> CSS</label>
            </div>
            
          </div>
          <div className="card__footer">
            <div className="card__Footer__first">
                <label>Code</label>
            </div>
            <div className="card__Footer__second">
              <label>View</label>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
 )
};

export default MyProject