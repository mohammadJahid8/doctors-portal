import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user, loading, error] = useAuthState(auth);

    const { _id, name, slots } = treatment;
    const handleSubmit = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent">{name}</h3>

                    <form className='grid grid-cols-1 gap-3 justify-items-center mt-5' onSubmit={handleSubmit}>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-lg" />
                        <select name="slot" className="select select-bordered w-full max-w-lg">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}
                                </option>)
                            }

                        </select>
                        <input type="text" name="name" value={user?.displayName || ''} disabled className="input input-bordered w-full max-w-lg" />
                        <input type="email" name="email" value={user?.email || ''} disabled className="input input-bordered w-full max-w-lg" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                        <input type="submit" value="Submit" className="btn btn-accent w-full max-w-lg" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;