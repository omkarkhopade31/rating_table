import React, { Component } from 'react';
import './style.css';
import StarRating from './StarRating';

class ImageToggle extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: null,
    };

    this.imageMap = {
      Andheri: {
        imageUrl: 'https://i.postimg.cc/6qTr6tL5/Screenshot-17.png',
        rating: 3, // Static rating for this image
      },
      Bandra: {
        imageUrl: 'https://i.postimg.cc/L57znwNk/Screenshot-14.png',
        rating: 4, // Static rating for this image
      },
      Churchgate: {
        imageUrl: 'https://i.postimg.cc/MG8m0kxd/Screenshot-13.png',
        rating: 5, // Static rating for this image
      },
      CSMT: {
        imageUrl: 'https://i.postimg.cc/85ZdVjv0/Screenshot-12.png',
        rating: 2, // Static rating for this image
      },
      Dadar: {
        imageUrl: 'https://i.postimg.cc/pTWQ7Dmj/Screenshot-6.png',
        rating: 1, // Static rating for this image
      },
      Domivali: {
        imageUrl: 'https://i.postimg.cc/BbvvpJCG/Screenshot-26.png',
        rating: 3, // Static rating for this image
      },
      Ghatkopar: {
        imageUrl: 'https://i.postimg.cc/P5DM8fGC/Screenshot-9.png',
        rating: 4, // Static rating for this image
      },
      Kalyan: {
        imageUrl: 'https://i.postimg.cc/cJMMXDLZ/Screenshot-4.png',
        rating: 5, // Static rating for this image
      },
      Kurla: {
        imageUrl: 'https://i.postimg.cc/VsH9G0mS/Screenshot-10.png',
        rating: 3, // Static rating for this image
      },
      Thane: {
        imageUrl: 'https://i.postimg.cc/vHJrMR1b/Screenshot-5.png',
        rating: 5, // Static rating for this image
      },
    };

    this.tableMap = {
      Andheri: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
      Bandra: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Not Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
      Churchgate: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
      CSMT: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
      Dadar: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
      Domivali: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
      Ghatkopar: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
      Kalyan: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
      Kurla: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
      Thane: (
        <table className='tabbr'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotels nearby</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
              <td id='green'>Available</td>
            </tr>
            <tr>
              <td>Cleanliness</td>
              <td id='light-green'>Very Good</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td id='green'>Excellent</td>
            </tr>
          </tbody>
        </table>
      ),
    };
  }

  handleButtonClick = (color) => {
    const selectedImage = this.imageMap[color];
    this.setState({ selectedColor: color, selectedImage });
  };

  render() {
    const { selectedColor, selectedImage } = this.state;

    return (
      <div>
        <div className='gridcont'>
        <button onClick={() => this.handleButtonClick('Andheri')}>Andheri</button>
        <button onClick={() => this.handleButtonClick('Bandra')}>Bandra</button>
        <button onClick={() => this.handleButtonClick('Churchgate')}>Churchgate</button>
        <button onClick={() => this.handleButtonClick('CSMT')}>CSMT</button>
        <button onClick={() => this.handleButtonClick('Dadar')}>Dadar</button>
        <button onClick={() => this.handleButtonClick('Domivali')}>Domivali</button>
        <button onClick={() => this.handleButtonClick('Ghatkopar')}>Ghatkopar</button>
        <button onClick={() => this.handleButtonClick('Kalyan')}>Kalyan</button>
        <button onClick={() => this.handleButtonClick('Kurla')}>Kurla</button>
        <button onClick={() => this.handleButtonClick('Thane')}>Thane</button>
        </div>
        <br></br>
        <div className='disp'>
          {selectedImage && (
            <div>
              <h1 className='stnamerev'>{selectedColor} Station Review</h1>
              <img
                src={selectedImage.imageUrl}
                alt={`${selectedColor} pic`}
                style={{ maxWidth: '1500px', height: '700px' }}
              />
              {this.tableMap[selectedColor]}
              <StarRating rating={selectedImage.rating} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ImageToggle;
