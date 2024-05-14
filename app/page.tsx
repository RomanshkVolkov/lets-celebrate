import SwitchTheme from '@/app/components/shared/SwitchTheme';
import { dateFormater } from '@/utils/date-formats';
import { vidaloka } from '@/utils/fonts';
import { Image } from '@nextui-org/react';
import { FaArrowDown, FaChurch } from 'react-icons/fa';
import { SlEnvolopeLetter } from 'react-icons/sl';
import CenterCard from './components/shared/cards/CenterCard';
import Cards from './components/shared/cards/Cards';

export default function Home() {
   const cards = Cards();
   return (
      <div className="w-full flex flex-col justify-center items-center p-2 mt-10">
         <SwitchTheme />
         <h1 className="text-center text-5xl slide-in-top">La boda de</h1>
         <div className="grid grid-cols-3 gap-2 p-14">
            <Image
               src="/images/01-l.jpeg"
               alt="La boda de"
               width={350}
               height={800}
               className="slide-in-left shadow-01"
            />
            <div className="flex flex-col justify-center items-center text-8xl gap-4 slide-in-bottom p-4">
               <FaChurch size={100} />
               <p>Mariana</p>
               <p>&</p>
               <p>Joaquin</p>
               <SlEnvolopeLetter size={100} />
            </div>
            <Image
               src="/images/01-r.jpeg"
               alt="La boda de"
               width={350}
               height={800}
               className="slide-in-right shadow-01"
            />
         </div>
         {cards.CardDate}
         <div
            className="w-full h-[500px] bg-cover bg-center bg-no-repeat mt-10 shadow-01"
            style={{
               backgroundImage:
                  'url(https://inv.entodaocasion.com/wp-content/uploads/2022/11/novios-fondo-ejemplo-min.jpeg)',
            }}></div>
      </div>
   );
}
