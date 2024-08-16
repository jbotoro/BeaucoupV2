"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Splash = () => {
    const router = useRouter();

    const openModal = () => {
        router.push('/signup');
    };

    return (
        <div className="flex flex-col text-center items-center relative h-screen bg-cover bg-center overflow-y-scroll justify-evenly bg-[url('/splash_background.png')] bg-black bg-opacity-50">
            <div className='flex flex-col text-white relative justify-between items-center mx-auto h-[400px] px-[80px] pt-[100px]'>
                <div className='masthead-header-container'>
                    <h1 className='text-[56px] leading-[56px] font-light mb-0 tracking-[-0.5px] w-[570px] h-auto font-roboto'> All Your Anime In One Place</h1>
                </div>
                <div className='mt-[20px] text-[16px] leading-[24px] font-light w-[570px] h-auto font-roboto'>
                    Watch a fair share of shows and movies(coming soon), with plans starting <br /> at FREE 99/month.
                </div>
                <div className='mt-[20px] text-[16px] leading-[24px] font-light w-[570px] h-auto font-roboto'>
                    ADVENTURE®, ACTION®, THRILLER®, and HORROR® available.
                </div>
                <div className='flex justify-center text-center mt-[1.6em] mx-auto w-[570px] h-auto'>
                    <button
                        className='inline-block shadow-none transition-all duration-200 ease-in-out uppercase whitespace-nowrap cursor-pointer text-[#1e1e1e] bg-[#fcfcfc] h-[46px] min-w-[136px] px-[32px] border-none text-[14px] font-semibold leading-[14px] tracking-[1px] text-center hover:shadow-lg hover:translate-y-[-2px]'
                        onClick={openModal}
                    >
                        START YOUR FREE TRIAL
                    </button>
                </div>
                <div className='flex justify-center opacity-60 text-[10px] font-normal leading-[16px] mx-auto mt-[16px] w-[536px] h-auto text-center'>
                    Free trial available for new and eligible returning subscribers only.
                </div>
            </div>
            <div className='px-[40px] flex flex-col relative justify-center w-full leading-[1.3] mx-auto text-white box-border h-auto'>
                <div className='mt-auto relative flex flex-col'>
                    <div className='mx-auto text-white tracking-[1px] text-[12px] pb-[10px]'>
                        PLAN OPTIONS
                    </div>
                    <button className="mx-auto block cursor-pointer rounded-full bg-transparent relative flex items-center justify-center w-[66px] h-[66px] p-0 border-none">
                      <Image
                          src="/down-arrow.png"
                          alt="Down Arrow"
                          width={66}
                          height={66}
                          className="rounded-full invert"
                      />
                  </button>
                </div>
            </div>
        </div>
    );
};

export default Splash;
