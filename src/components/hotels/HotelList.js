import React, {useState, useEffect} from 'react';
import HotelSummary from './HotelSummary';
import { Link } from 'react-router-dom';


const HotelList = () => {
  const [hotels, setHotels] = useState([])
  const fetchHotels = async() => {
    const db = firebase.firestore();
    const response = db.collection('hotels');
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
      { hotels && hotels.map(hotel => {
        return (
          <Link to= {'/hotel/' + hotel.id} key={hotel.id}>
            <HotelSummary hotel={hotel}/>
          </Link>
        )
      })}
    </div>
  )
}

export default HotelList;