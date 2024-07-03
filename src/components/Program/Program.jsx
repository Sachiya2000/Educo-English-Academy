/* eslint-disable no-unused-vars */
import React from 'react';
import './Program.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import programIcon_1 from '../../assets/program-icon-1.png';
import programIcon_2 from '../../assets/program-icon-2.png';
import programIcon_3 from '../../assets/program-icon-3.png';

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={programIcon_1} alt="" />
          <p>Gradution Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={programIcon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={programIcon_3} alt="" />
          <p>Post Gradution Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
