import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user, loading, error] = useAuthState(auth);

  const { _id, name, slots, price } = treatment;

  const formatedDate = format(date, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: formatedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch(
      // 'https://morning-gorge-66477.herokuapp.com/booking'
      "https://doctors-portal-server3.onrender.com/booking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          toast.success(`Appointment is set, ${formatedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        //close the modal
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-accent">{name}</h3>

          <form
            className="grid grid-cols-1 gap-3 justify-items-center mt-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-lg"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-lg"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              disabled
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              disabled
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full max-w-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
