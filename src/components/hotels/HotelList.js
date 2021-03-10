import React, {useState, useEffect} from 'react';
import HotelSummary from './HotelSummary';
import { Link } from 'react-router-dom';
import firebase from '../../config/fbConfig';
import { collection } from 'react-redux-firebase'; 
// import { useSelector } from 'react-redux';


const HotelList = () => {
  // const hotels = useSelector(state => state.firestore.hotels);

  const [hotels, setHotels] = useState([])
  const fetchHotels = async() => {
    const response = firebase.collection('hotels');
    const data = await response.get();
    data.docs.forEach(item => {
      setHotels([...hotels,item.data()])
    })
  }
  useEffect(() => {
    fetchHotels();
  }, [])
  return (
    <div className="hotel-list section">
      {/* { hotels && hotels.map(hotel => {
        return (
          <Link to= {'/hotel/' + hotel.id} key={hotel.id}>
            <HotelSummary hotel={hotel}/>
          </Link>
        )
      })} */}
    </div>
  )
}

export default HotelList;