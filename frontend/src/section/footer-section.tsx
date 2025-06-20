import Image from 'next/image';

export const FooterSection = () => {
  return (
    <div className='px-[44px] flex sm:justify-between max-sm:items-start gap-5 max-sm:flex-col items-center py-[40px]'>
      <div className='flex items-center sm:gap-10 gap-5 max-sm:flex-col max-sm:items-start'>
        <div className='flex gap-[13px] items-center'>
          <button>
            <Image
              src='/assets/images/linked.png'
              width={40}
              height={40}
              alt='social'
            />
          </button>
          <button>
            <Image
              src='/assets/images/insta.png'
              width={40}
              height={40}
              alt='social'
            />
          </button>
          <button>
            <Image
              src='/assets/images/Vector.png'
              width={40}
              height={40}
              alt='social'
            />
          </button>
        </div>
        <p className='font-normal text-[20px]'>Follow Us</p>
      </div>
      <div className='flex items-start gap-px'>
        <Image
          src='/assets/images/copyright.png'
          width={11.88}
          height={11.88}
          alt='social'
        />
        <p className='font-normal text-[20px]'>All rights reserved</p>
      </div>
    </div>
  );
};
