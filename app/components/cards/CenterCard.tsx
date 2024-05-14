import { vidaloka } from '@/utils/fonts';

interface Props {
   children: React.ReactNode;
}
export default function CenterCard(props: Props) {
   const { children } = props;
   return (
      <div
         className={`bg-background-100 md:w-1/3 xs:w-4/5 text-center flex flex-col justify-center items-center p-6 tracking-widest shadow-01 rounded-large ${vidaloka.className}`}>
         {children}
      </div>
   );
}
