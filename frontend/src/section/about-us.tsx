import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';

const misstionMock = [
  {
    url: '/assets/images/computer.png',
    title: 'ODM E-Commerce:',
    text: 'Explore a curated selection of Mongolian crafts, each piece telling a story of heritage and skilled craftsmanship. Through our online platform, we bring the beauty of Mongolia to your doorstep, no matter where you are.',
  },
  {
    url: '/assets/images/police-station.png',
    title: 'ODM Experience Center:',
    text: 'Step into the heart of Mongolia at our experience centers located in Almaty, Kazakhstan; Debrecen, Hungary; and Ulaanbaatar, Mongolia. These hubs provide an authentic cultural journey where visitors can immerse themselves in the traditions, art, and spirit of Mongolia.',
  },
  {
    url: '/assets/images/deadline.png',
    title: 'ODM Ger Booking:',
    text: 'Experience the nomadic lifestyle by staying in a traditional Mongolian ger. Whether you wish to rent or own, our platform offers a seamless way to connect with this iconic symbol of Mongolian culture.',
  },
  {
    url: '/assets/images/save-planet.png',
    title: 'ODM Cultural Hub:',
    text: 'Dive into the stories, history, and traditions of Mongolia through our blog. The Cultural Hub is your gateway to understanding the deeper layers of Mongolian heritage and lifestyle, bringing the essence of our culture to life through words and visuals.',
  },
];

export const AboutUs = () => {
  return (
    <div className='p-[30px] md:p-[73px] bg-[#FAFAFA]'>
      <h1 className='text-5xl font-[500] text-[#0A0A0A] mb-[73px]'>About Us</h1>
      <div className='flex flex-col items-start gap-[45px]'>
        <p className='font-normal text-[#0A0A0A] text-[20px] px-[7px]'>
          Founded in 2021, One Day in Mongolia LLC is dedicated to preserving
          and sharing the rich heritage of Mongolia with the world. Based in
          Debrecen, Hungary, we connect cultures and bridge continents, offering
          immersive experiences that bring Mongolia closer to you.
        </p>
        <div className='flex flex-col gap-[30px] w-full'>
          <Separator className='bg-[#000000] h-[1px] w-full' />
          <h3 className='px-[7px] font-normal text-[32px]'>
            Our mission extends across four core pillars:
          </h3>
        </div>
        {misstionMock.map((item, index) => {
          return (
            <div key={index} className='flex flex-col gap-[45px] w-full'>
              <div className='md:px-[30px] flex gap-[59px] flex-col md:flex-row items-center'>
                <div className='w-[56px] h-[56px] flex justify-center items-center shrink-0 grow-0'>
                  <Image
                    src={item.url}
                    alt='logo'
                    width={56}
                    height={56}
                    className='object-cover w-[56px] h-[56px]'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <h3
                    className='text-[20px] font-semibold'
                    style={{ letterSpacing: '-0.04em' }}
                  >
                    {item.title}
                  </h3>
                  <p className='font-normal text-[20px]'>{item.text}</p>
                </div>
              </div>
              <Separator className='bg-[#000000] h-[1px] w-full' />
            </div>
          );
        })}
        <p className='px-[7px] font-normal text-[#0A0A0A] text-[20px]'>
          At One Day Mongolia, we strive to preserve our traditions while making
          them accessible to the world. Join us in celebrating Mongolia’s unique
          legacy and timeless heritage.
        </p>
      </div>
    </div>
  );
};
