import React from 'react';

const App = (props) => (
  <div>
    {props.children}
  </div>
)

export default App;

{/* <div>
  <Slider>
      <div itemStyle={{ backgroundColor: '#a2d7c7' }}>
        <div className="content">Hello, world.</div>
      </div>
      <div itemStyle={{ backgroundColor: '#353330' }}>
        <div className="content">Sup?</div>
      </div>
      <div itemClass="has-overlay" itemStyle={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
        <div className="content">Yo.</div>
      </div>
    </Slider>
  {props.children}
</div> */}
