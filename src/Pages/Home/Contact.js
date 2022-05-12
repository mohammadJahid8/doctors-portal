import React from 'react';
import appointment from '../../assets/images/appointment.png';
import Button from '../Shared/Button';

const Contact = () => {
    return (
        <section style={
            {
                background: `url(${appointment})`,
            }
        }>
            <div className="container mx-auto px-4">
                <div className="text-center my-10 pt-10">
                    <h2 className="text-primary text-xl font-bold uppercase">Contact Us</h2>
                    <h2 className="text-3xl text-white">Stay Connected with us</h2>
                </div>
                <div className="text-center pb-10">
                    <input type="text" placeholder="Email Address" className="input w-full max-w-sm mb-5 " />
                    <br />
                    <input type="text" placeholder="Subject" className="input w-full max-w-sm mb-5 " />
                    <br />
                    <textarea className="textarea pb-14 w-full max-w-sm mb-5" placeholder="Your Message"></textarea>
                    <br />
                    <Button>Submit</Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;