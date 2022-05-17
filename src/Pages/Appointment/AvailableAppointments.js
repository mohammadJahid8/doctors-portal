import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP');

    const { isLoading, error, data: services, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`https://morning-gorge-66477.herokuapp.com/available?date=${formatedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services?.map(service =>
                    <Service
                        service={service}
                        key={service._id}
                        setTreatment={setTreatment}
                    />)}
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                refetch={refetch}
                date={date}
                setTreatment={setTreatment}
            />}

        </div>
    );
};

export default AvailableAppointments;