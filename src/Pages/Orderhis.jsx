import React from 'react';
import '../Pages/Orderhis.css';

import TableImg from '../Assets/table.png';
import ACImge from '../Assets/ac-outdoor-stand.png';

const Orderhis = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={TableImg} alt="#" /><span> 12344 </span> </td>
            <td>2</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>
          <tr className='table-spar'>
            <td><img src={ACImge} alt="#" className='acimg' /></td>
            <td className='tool'>Tool name <span className='spar'>AC Spares</span></td>
            <td>1</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>
          <tr className='table-spar'>
            <td><img src={ACImge} alt="#" className='acimg' /></td>
            <td className='tool'>Tool name <span className='spar'>AC Spares</span></td>
            <td>1</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src={TableImg} alt="#" /><span> 12344 </span> </td>
            <td>2</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img src={TableImg} alt="#" /><span> 12344 </span> </td>
            <td>2</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <img src={TableImg} alt="#" /><span> 12344 </span> </td>
            <td>2</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <img src={TableImg} alt="#" /><span> 12344 </span> </td>
            <td>2</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <img src={TableImg} alt="#" /><span> 12344 </span> </td>
            <td>2</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <img src={TableImg} alt="#" /><span> 12344 </span> </td>
            <td>2</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <img src={TableImg} alt="#" /><span> 12344 </span> </td>
            <td>2</td>
            <td>Nov 27, 2024</td>
            <td>Rs 2500.00</td>
          </tr>        
        </tbody>
      </table>
    </>
  );
};

export default Orderhis;
