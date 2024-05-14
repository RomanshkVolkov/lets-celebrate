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
      <div className="absolute md:top-[-200px] xs:top-[-130px] right-0 w-full flex justify-center">
         <CenterCard>
            <strong className="md:text-3xl xs:text-base">{dateString.dayWeek}</strong>
            <p className="md:text-7xl xs:text-sm">{dateString.day}</p>
            <p className="md:text-3xl xs:text-xs">{dateString.month}</p>
            <p className="md:text-4xl xs:text-xs">{dateString.year}</p>
            <p className="md:text-5xl xs:text-sm">
               {dateString.hours}:{dateString.minutes}:{dateString.seconds}
            </p>
            <div className="d-full flex justify-center mt-4">
               <FaArrowDown className="jump-top" />
            </div>
         </CenterCard>
      </div>
   );
}
