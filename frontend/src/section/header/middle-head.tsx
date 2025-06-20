import { CardComponent } from '@/components/card-component';
import Image from 'next/image';

export const MiddleHead = () => {
  return (
    <div className='relative inset-0 top-[-150px] px-[44px] h-fit'>
      {/* <div className='absolute z-10'> */}
      <CardComponent />
      {/* </div> */}
      <div className=' relative bg-[#FFFFFF] rounded-3xl'>
        <Image
          src='/assets/images/Marzan_Sharav_001 1.png'
          alt='logo'
          width={1000}
          height={1000}
          className='w-full h-full object-cover rounded-3xl'
        />
      </div>
    </div>
  );
};
