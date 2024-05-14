import { dateFormater } from '@/utils/date-formats';
import React from 'react';
import CenterCard from './CenterCard';
import { FaArrowDown } from 'react-icons/fa';
import Service from '@/services/service';

interface Props {
   dayWeek: string;
   day: string;
   month: string;
   year: string;
   hours: string;
   minutes: string;
   seconds: string;
}
const service = new Service();

export default async function CardDateEvent() {
   const data = await service.event.getEvent('sdflasdn');
   const dateString = dateFormater.string(data.date);
   return (
      <CenterCard>
         <strong className="text-3xl">{dateString.dayWeek}</strong>
         <p className="text-7xl">{dateString.day}</p>
         <p className="text-3xl">{dateString.month}</p>
         <p className="text-4xl">{dateString.year}</p>
         <p className="text-5xl">
            {dateString.hours}:{dateString.minutes}:{dateString.seconds}
         </p>
         <div className="d-full flex justify-center mt-4">
            <FaArrowDown className="slide-top-infinite" />
         </div>
      </CenterCard>
   );
}
