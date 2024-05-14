import { BsCalendarHeartFill } from 'react-icons/bs';
import CenterCard from './CenterCard';
import { dateFormater } from '@/utils/date-formats';

export default async function CardTimeRemaining() {
   const date = new Date(2024, 11, 24, 18);
   const now = new Date();
   const dateString = dateFormater.timeRemainingString(date);
   return (
      <div className="w-full absolute flex justify-center bottom-[-200px]">
         <CenterCard>
            <BsCalendarHeartFill className="jump-bottom" />
            <p className="text-3xl mt-2">Tiempo restante</p>
            <div className="grid grid-cols-2 text-center gap-4 p-4">
               <div className="flex flex-col">
                  <p className=" text-5xl">{dateString.days}</p>
                  <p className="text-sm">Días</p>
               </div>
               <div className="flex flex-col">
                  <p className=" text-5xl">{dateString.hours}</p>
                  <p className="text-sm">Horas</p>
               </div>
               <div className="flex flex-col">
                  <p className=" text-5xl">{dateString.minutes}</p>
                  <p className="text-sm">Minutos</p>
               </div>
               <div className="flex flex-col">
                  <p className=" text-5xl">{dateString.seconds}</p>
                  <p className="text-sm">Segundos</p>
               </div>
            </div>
         </CenterCard>
      </div>
   );
}
