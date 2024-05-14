import { vidaloka } from '@/utils/fonts';

interface Props {
   children: React.ReactNode;
}
export default function CenterCard(props: Props) {
   const { children } = props;
   return (
      <div
         className={`bg-background-100 w-1/3 text-center p-6 tracking-widest shadow-01 ${vidaloka.className}`}>
         {children}
      </div>
   );
}
