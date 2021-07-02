import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const HowAudioConferenceWorks = () => {
    return (
        <div className="container">
            
            <h2 className="text-center"><strong>How Audio-Conference Services Actually Works</strong></h2>
            <div className="row ptb-80 pb-50">
               <h6>
                   Audio-Conferencing is a cloud telephony based system wherein all the participants of the call dial in to a given number to get connected into the call. It’s an advanced calling system where an individual gets connected into a call that’s just starting or ongoing and becomes a part of the conversation in progress. Through audio-conferencing people across multiple locations tune into a common call. On joining a person is greeted by the company’s intended message and gets connected to the others in the conference through a “Demand Pin”. Only those people can join this conference who have the pin. Attendees can join and participate effortlessly in conference call with crystal clear audio.
               </h6>
               <ul>
                   <li><strong> Call recording of each attendee</strong></li>
                   <li><strong> Online Web Panel – To Check Call Records</strong></li>
                   <li><strong> Secure Conference thru “Demand Pin” </strong></li>
                   <li><strong> Easy Connect for multiple attendees on a single number</strong></li>
                </ul>
            </div>
        </div>

    )
}        

export default HowAudioConferenceWorks;