import SwitchTheme from '@/app/components/shared/SwitchTheme';
import { dateFormater } from '@/utils/date-formats';
import { vidaloka } from '@/utils/fonts';
import { Image } from '@nextui-org/react';
import { FaArrowDown, FaChurch } from 'react-icons/fa';
import { SlEnvolopeLetter } from 'react-icons/sl';
import CenterCard from './components/cards/CenterCard';
import Cards from './components/cards/Cards';

export default function Home() {
   const cards = Cards();
   return (
      <div className="w-full flex flex-col justify-center items-center mt-10">
         <SwitchTheme />
         <h1 className="text-center text-5xl slide-in-top">La boda de</h1>
         <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-2 p-14 xs:mb-16">
            <Image
               src="/images/01-l.jpeg"
               alt="La boda de"
               width={350}
               height={800}
               className="slide-in-left shadow-01"
            />
            <div className="flex flex-col justify-center items-center md:text-8xl xs:text-3xl xs:row-span-3 gap-4 slide-in-bottom p-4">
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
               className="slide-in-right shadow-01 xs:row-span-2"
            />
         </div>
         <div
            className="w-full h-[50vw] min-h-[600px] bg-cover bg-center bg-no-repeat mt-10 shadow-01 relative opacity"
            style={{
               backgroundImage:
                  'url(https://inv.entodaocasion.com/wp-content/uploads/2022/11/novios-fondo-ejemplo-min.jpeg)',
               backgroundAttachment: 'fixed',
            }}>
            {cards.cardDate}
            <div className="flex flex-col justify-center items-center w-full h-full z-50 bg-transparent">
               <div className="text-center md:p-12 xs:px-4">
                  <strong className="text-5xl">¿Cómo nos conocimos?</strong>
                  <hr />
                  <p className="text-3xl">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla
                     voluptas animi illo id assumenda maxime quo con
                  </p>
                  <hr />
               </div>
            </div>
            {cards.cardTimeRemaining}
         </div>
      </div>
   );
}
