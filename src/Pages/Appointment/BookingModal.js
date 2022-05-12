import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleSubmit = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-accent">{name}</h3>

                    <form className='grid grid-cols-1 gap-3 justify-items-center mt-5' onSubmit={handleSubmit}>
                        <input type="text" value={format(date, 'PP')} disabled class="input input-bordered w-full max-w-lg" />
                        <select name="slot" class="select select-bordered w-full max-w-lg">
                            {
                                slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-lg" />
                        <input type="email" name="email" placeholder="Email Address" class="input input-bordered w-full max-w-lg" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-lg" />
                        <input type="submit" value="Submit" class="btn btn-accent w-full max-w-lg" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;