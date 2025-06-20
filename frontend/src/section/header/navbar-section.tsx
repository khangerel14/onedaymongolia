import Image from 'next/image';

export const NavbarSection = () => {
  return (
    <section
      className='h-[400px] sm:h-[500px] md:h-[749px] bg-no-repeat bg-top bg-contain xl:bg-cover'
      style={{
        backgroundImage: `url('/assets/images/headBlue.png')`,
        backgroundPosition: 'top center',
      }}
    >
      <div className='lg:px-10 md:px-5 px-3 lg:pt-12.5 pt:7 h-full'>
        <div className='flex justify-between items-center p-6'>
          <Image
            src='/assets/images/Logo_5 1.png'
            alt='logo'
            width={270.35}
            height={73}
            className='object-cover'
            priority
          />
          <div className='flex items-center gap-4'>
            <input
              type='text'
              className='lg:w-[267px] w-[200px] h-[36px] bg-[#F2F5FC] rounded-full pl-16 pr-3 text-[#8B8B8F] placeholder:text-[#8B8B8F] focus:outline-none text-sm max-md:hidden'
              placeholder='Search...'
            />
            <button className='rounded-full w-[92px] h-[35px] bg-[#F2F5FC] text-[#8B8B8F] text-sm font-medium hover:bg-[#e2e6f0] transition'>
              About us
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center text-center lg:mt-20 md:mt-10 mt-5 max-w-[1092px] mx-auto'>
          <h1 className='text-white text-[22px] sm:text-[40px] md:text-[80px] font-bold mb-4 tracking-tighter'>
            WELCOME TO
          </h1>
          <h2 className='text-white text-2xl sm:text-2xl md:text-4xl lg:text-7xl font-semibold tracking-wide leading-16'>
            Integrated Export Gateway of Mongolian Culture and Heritage
          </h2>
        </div>
      </div>
    </section>
  );
};
