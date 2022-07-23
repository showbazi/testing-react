import React, { useId } from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from '../redux-toolkit/features/customerSlice';
import { removeReservations } from '../redux-toolkit/features/reservationSlice';

const ReservationCard = ({name, id}) => {

  const dispatch = useDispatch();

  const cusotmerId = useId();

  const handleRemoveReservationName = (id) => {
    dispatch(removeReservations(id));
    dispatch(addCustomer({
      id: cusotmerId,
      name,
      food: []
    }));
  }

  return (
    <div 
      className="reservation-card-container"
      onClick={() => handleRemoveReservationName(id)}
    >
        {name}
    </div>
  )
}

export default ReservationCard;