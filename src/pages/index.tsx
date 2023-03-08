import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Tooltip from "rc-tooltip";
import useWindowSize from '@/hooks/WindowResize';
import Link from 'next/link';
import { useEffect, useState } from 'react';

enum screenSizes {
  big,
  medium,
  small
}

const Socials = ({ isLandscape, screenSize }: {
  isLandscape: boolean,
  screenSize: screenSizes
}) => {

  const isSmallLandscape = screenSize == screenSizes.small && isLandscape;

  return (
    <div className={` absolute ${isSmallLandscape ? "bottom-0" : "bottom-[15%]"} w-full `}>
      <div className='w-full px-4'>
        <div className={` flex items-center ${isSmallLandscape?"justify-end":"justify-center "} md:h-16 sm:h-12 h-12 z-10`}>
          <Link href={"https://twitter.com/smoovefinance"} target="_blank" rel="noopener noreferrer"
            className="h-full"
          >
            <button className='h-full'>
              <img className="h-full" src="/icons/twitter.svg" />
            </button>
          </Link>

          <button className='h-full mx-4 bg-black rounded-lg md:p-3 p-2'>
            <img className="h-full " src="/icons/icon_discord.svg" />
          </button>
          <Link href="https://smoove.gitbook.io/smoove-docs/" target="_blank" rel="noopener noreferrer"
            className="h-full"
          >
            <button className="h-full">
              <img className="h-full rounded-lg" src="/icons/book.webp" />
            </button>
          </Link>
        </div>
        <div className={` font-bold font-mon  ${screenSize == screenSizes.small ? isLandscape?"text-white text-right text-sm":"text-gray-900 text-center text-lg" : "text-GREY2 text-center"} italic  drop-shadow`}>admin@smoove.finance</div>
      </div>
    </div>
  )
}

export default function Home() {
  const { windowSize, isLandscape } = useWindowSize();

  const [screenSize, setScreen,] = useState<screenSizes>(screenSizes.big);
  // const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    console.log("windowSize")
    console.log(windowSize)
    if (windowSize.width > 1024 && windowSize.height > 768) {
      setScreen(screenSizes.big);
    } else if (windowSize.width > 768 && windowSize.height > 640) {
      setScreen(screenSizes.medium);
    } else {
      setScreen(screenSizes.small);
    }
  }, [windowSize])

  const isDisabled = true;
  const isSmallLandscape = screenSize == screenSizes.small && isLandscape;

  return (
    <>
      <Head>
        <title>SMOOVE</title>
        <meta name="title" content="SMOOVE" />
        <meta name="description" content="StakeFi on Sui" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="h-screen w-screen relative bg-white overflow-hidden flex items-center justify-center">
        <div className='w-full h-full absolute  opacity-20 bg-center bg-cover bg-repeat-x '
          style={{
            backgroundImage: "url('/imgs/bg_clouds.png')",
            // transform: "translate(0px, -300px)"
          }}
        >
        </div>
        {/* <div className='w-full h-1/2 absolute bottom-0 bg-gradient-to-b from-transparent to-gray-500 opacity-30 z-20'></div> */}
        {/* Sun */}
        <div className='absolute left-0 md:top-[10%] sm:top-[5%] top-[2.5%] w-full h-32 z-10'>
          <img src="/imgs/sun.webp" className={`sun absolute top-0  ${screenSize == screenSizes.small ? " h-32 left-20" : " h-48 left-52"}`} />
        </div>
        {/* Clouds */}
        <div className={`absolute left-[-2.5%] md:top-[10%] sm:top-[5%] top-[2.5%] w-full z-10 ${screenSize == screenSizes.small ? " h-20" : " h-32 "}`}>
          <img src="/imgs/cloud_1.png" className={`cloud cloud1 absolute top-0 ${screenSize == screenSizes.small ? "h-24 -left-12" : "h-48 -left-24"}`} />
          <img src="/imgs/cloud_1.png" className={`cloud absolute top-12 left-4 ${screenSize == screenSizes.small ? "h-24 left-2" : "h-48 -left-4"} `} />
        </div>
        {
          (screenSize == screenSizes.big) && (
            <div className='absolute right-[-2.5%] top-[12%] w-full h-32 z-10 '>
              <img src="/imgs/cloud_1.png" className='cloud cloud1 absolute h-48 top-0 right-10' />
              <img src="/imgs/cloud_1.png" className='cloud absolute h-48 top-12 right-24' />
            </div>
          )
        }
        {/* title */}
        {/* p-[7.5%] */}
        <div className=' flex justify-center items-center flex-col z-10 relative ' >
          {screenSize != screenSizes.big ? (
            <div className='font-arcade_gamer text-black text-center ' style={{
              textShadow: "rgb(104, 136, 255) 3px 3px 0px"
            }}>
              <h1 className={` md:text-8xl ${isSmallLandscape?"text-5xl":"text-6xl"} z-auto`}>SMOOVE</h1>
              <h2 className={` md:text-5xl ${isSmallLandscape?"text-2xl":"text-3xl"} z-auto`}>FINANCE</h2>
            </div>
          ) : (
            <div className='font-arcade_gamer text-black text-center ' style={{
              textShadow: "rgb(104, 136, 255) 8.41439px 8.41439px 0px"
            }}>
              <h1 className='  text-9xl z-auto'>SMOOVE</h1>
              <h2 className=' text-7xl z-auto'>FINANCE</h2>
            </div>
          )}
          {/* rgb(85, 100, 88) */}
          {/* my-12 */}
          <div className={` relative font-mon italic font-bold text-center text-GREY2 lg:text-3xl md:text-xl ${isSmallLandscape?"text-sm":"text-lg"} my-[1.5%]`}>Yields so good, like you milkin&apos; it. </div>
          <div className={` relative flex justify-center items-center flex-col lg:text-3xl md:text-xl ${isSmallLandscape?"text-sm":"text-lg"} `}>
            <Tooltip overlayInnerStyle={{
              backgroundColor: "white",
              borderRadius: "64px",
              color: "#444",
              borderColor: "white",
              fontFamily: "Montserrat",
              fontStyle: "italic",
              // fontWeight: "bold"
            }} placement="right" overlay={<span> Coming Soon! </span>}>
              <button className={`relative rounded-full block md:p-4 p-3 lg:my-4 md:my-2 my-1 font-arcade_gamer bg-GREEN1 text-GREEN2 ${isDisabled ? "brightness-95 cursor-not-allowed" : ""} `}>
                LIQUID STAKING
              </button>
            </Tooltip>

            <Tooltip overlayInnerStyle={{
              backgroundColor: "white",
              borderRadius: "64px",
              color: "#444",
              borderColor: "white",
              fontFamily: "Montserrat",
              fontStyle: "italic",
              // fontWeight: "bold"
            }} placement="right" overlay={<span> Coming Soon! </span>}>
              <button className={`relative rounded-full block md:p-4 p-3 lg:my-4 md:my-2 my-1 font-arcade_gamer bg-GREY1 text-GREY2 ${isDisabled ? "brightness-95 cursor-not-allowed" : ""}`} >
                DEFI VAULTS
              </button>
            </Tooltip>
          </div>
        </div>
        <div className='absolute left-0 bottom-0 w-full h-32 '>
          {/* <div className='w-full h-full absolute bottom-0 bg-gradient-to-b from-transparent to-gray-800 opacity-50 z-20'></div> */}
          <div className='grass-plane h-16 w-full relative'>
            {screenSize != screenSizes.small && (
              <>
                <div className={`absolute w-full -bottom-2 lg:left-[10%] md:left-[5%] left-[4%]`}>
                  {/* left-40 */}
                  <img src="/imgs/tree_1.webp" className='tree tree1 absolute lg:h-48 h-36 -bottom-2 left-0 '
                    style={{
                      // transform:"translate(-80% ,0px)"
                    }}
                  />
                  {/* left-36 */}
                  <img src="/imgs/tree_2.webp" className='tree tree2 absolute lg:h-72 h-60 -bottom-2 -left-6'
                    style={{
                      // transform:"translate(-80% ,0px)"
                    }}
                  />
                  {/* left-60 */}
                  <img src="/imgs/tree_1.webp" className='tree tree3 absolute lg:h-52 h-40 -bottom-2 left-20'
                    style={{
                      // transform:"translate(-80% ,0px)"
                    }}
                  />
                </div>
                {/* right-40 */}
                <img src="/imgs/cool_cow_w.png" className={`absolute lg:h-48 h-40 bottom-0 lg:right-[10%] md:right-[5%] right-[4%] animate-bounce`}
                  style={{
                    // transform:"translate(-80% ,0px)"
                  }}
                />
              </>
            )}
            {/* footer */}
            {!(isSmallLandscape) && (
              <Socials isLandscape={isLandscape} screenSize={screenSize} />
            )}
            

          </div>
          <div className='ground-plane w-full h-16 bg-repeat-x bg-contain z-0'
            style={{
              backgroundImage: "url('/imgs/grass_tile_block.webp')"
            }}
          ></div>
          {isSmallLandscape && (
              <Socials isLandscape={isLandscape} screenSize={screenSize} />
            )}
        </div>
      </div>
    </>
  )
}
