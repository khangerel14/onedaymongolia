import Image from 'next/image';

const cardMock = [
  {
    url: '/assets/images/laptop.png',
    title: 'ODM E-COMMERCE PLATFORM',
    color: '#0A2763',
  },
  {
    url: '/assets/images/Mask group.png',
    title: 'ODM EXPERIENCE CENTER',
    color: '#0071A5',
  },
  {
    url: '/assets/images/Mask group3.png',
    title: 'ODM GER BOOKING',
    color: '#22873F',
  },
  {
    url: '/assets/images/Mask group4.png',
    title: 'ODM CULTURAL HUB',
    color: '#A32D0C',
  },
];

export const CardComponent = () => {
  return (
    <div className='z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full pb-6'>
      {cardMock.map((card, index) => {
        return (
          <div
            key={index}
            className='group relative w-full h-[302px] rounded-[20px] flex justify-center items-center flex-col text-white overflow-hidden'
            style={{
              backgroundImage: `url('${card.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute z-30 opacity-0 left-0 bottom-0 group-hover:opacity-100 transition-opacity duration-300'>
              <Image
                src='/assets/images/Logo_1 1.png'
                alt='hover logo'
                width={100}
                height={100}
                className='w-[100px] h-[100px] object-contain'
              />
            </div>

            <div
              className='absolute inset-0 rounded-[20px]'
              style={{
                backgroundColor: card.color,
                opacity: 0.6,
              }}
            />

            <div className='relative z-10 text-center px-4 w-64'>
              <h3 className='font-bold text-[32px] leading-tight'>
                {card.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
