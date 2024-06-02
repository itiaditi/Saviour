import Button from "@/components/Button";
import Section from "@/components/Section";
import Timer from "@/components/Timer";
import Image from "next/image";
import Input from "postcss/lib/input";
import { useState } from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdEmail, MdMenu } from "react-icons/md";
export default function Home() {
  const [selected, setSelected] = useState(null);
  return (
    <main className="items-center min-h-screen w-full  mx-auto max-w-full ">
      {/* navbar +main section */}
      <Section>
  <div className="main-section w-full min-h-screen mt-0 flex flex-col items-center justify-center">
    <nav className="w-full mx-auto max-w-full sm:max-w-[390px] xl:max-w-[1336px] px-4 sm:px-6 lg:px-8">
      <div className="text-white flex items-center justify-between flex-wrap">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="text-white material-symbols-outlined lg:hidden"><MdMenu/></div>
          <div className="flex items-center justify-evenly text-white w-full lg:w-auto">
            <Image
              src="/images/logo.png"
              width={60.31}
              height={66.57}
              alt="Logo"
            />
            <p className="font-zcool text-2xl sm:text-3xl">Saviour</p>
          </div>
          <div className="lg:hidden">
            <Button className="text-sm sm:text-base"/>
          </div>
        </div>
        <div className="hidden lg:flex w-full lg:w-auto bg-black rounded-3xl text-lg sm:text-xl mt-4 lg:mt-0">
          <div className="flex gap-4 sm:gap-6 items-center justify-center p-4 lg:p-4">
            <div className="font-zcool">Home</div>
            <div className="font-zcool">IDO</div>
            <div className="font-zcool">Tokenomics</div>
            <div className="font-zcool">Roadmap</div>
            <div className="font-zcool">
              Coming soon<span>v</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block mt-4 lg:mt-0">
          <Button className="text-sm sm:text-base"/>
        </div>
      </div>
      <div className="rounded bg-black-transparent sm:bg-transparent text-2xl sm:text-3xl md:text-5xl pt-24 lg:pt-48 pb-24 lg:pb-48 px-4 lg:px-8 leading-snug text-center">
        <p className="black-transparent font-shojumaru text-white">
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </p>
      </div>
    </nav>
  </div>
</Section>

{/* {second section} */}
<Section>
  <div className="w-full bg-black">
    <div className="w-full mx-auto max-w-full xl:max-w-[1336px] sm:max-w-[390px] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="w-full lg:w-1/2 p-4 sm:p-10 order-1 lg:order-1">
          <h1 className="uppercase text-white mb-4 text-3xl sm:text-4xl leading-8 sm:leading-10 font-shojumaru">
            Introduction
          </h1>
          <div className="text-lg sm:text-xl font-zcool">
            <p className="text-white">
              We&apos;ve all been in the mud once&lsquo; and now we&apos;ve decided to fight it out.<br/>
              Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive&lsquo; join us to save the future!<br/>
              Our mission is to empower everyone to share wealth and succeed.<br/>
            </p>
            <span className="text-slate-500 text-base sm:text-lg">read more...</span>
          </div>
        </div>
        <div className="w-full lg:w-auto mt-4 lg:mt-0 order-2 lg:order-2">
          <Image src="/images/introduction.png" width={512} height={723} alt="intro" className="mx-auto"/>
        </div>
      </div>
    </div>
  </div>
</Section>




      {/* third */}
      <Section>
  <div className="min-h-screen w-full event-section">
    <div className="w-full mx-auto max-w-full xl:max-w-[1336px] min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="">
        <div>
          <h1 className="uppercase font-shojumaru text-center p-8 text-customRed text-4xl">
            Participate in our IDO Event!
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-around items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center p-4 sm:p-20 order-1 lg:order-1">
            <div>
              <p className="text-white font-zcool text-lg">
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to
                share wealth and achieve success.
              </p>
            </div>
            <div className="w-full mt-12 mb-6 sm:mb-2">
              <div className="relative">
                <button className="absolute lg:-top-4 lg:left-20 transform translate-x-1/2 sm:translate-x-0 sm:top-2 bg-gradient-to-r from-customOrange to-customLightOrange rounded-xl pl-3 pt-2 pr-3 pb-2 text-white font-semibold sm:text-xs leading-3.5 font-shojumaru">
                  Token Info
                </button>
              </div>
              <div className="rounded-lg border border-customRed">
                <div className="font-zcool p-2 leading-8 text-white w-full items-center justify-around grid grid-rows-3 grid-flow-col">
                  <div>Total Token Supply</div>
                  <div>Soft Cap</div>
                  <div>Initial exchange rate</div>
                  <div className="text-customRed">20</div>
                  <div className="text-customRed">200 BNB</div>
                  <div className="text-customRed">1 BNB</div>
                </div>
                <h1 className="text-white font-zcool">
                  Recommended Referral Commission
                </h1>
                <div className="font-zcool leading-10 text-white w-full items-center justify-around grid grid-rows-2 grid-flow-col">
                  <div>Total Token Supply</div>
                  <div>Soft Cap</div>
                  <div className="text-customRed">20</div>
                  <div className="text-customRed">200 BNB</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto mt-12 flex justify-center items-center relative mb-6 sm:mb-2 order-2 lg:order-2">
          <div className="absolute lg:-top-8 transform -translate-x-1/2 sm:translate-x-4 ">
  <div className="hidden sm:block">
    <Timer initialMinutes={5} initialSeconds={0} />
  </div>
</div>

            <div className="rounded-lg border border-customRed">
              <div className="font-zcool p-2 leading-8 text-white w-full items-center justify-center flex flex-col text-center">
                <h1 className="uppercase mt-4 text-customRed font-shojumaru text-4xl">
                  Presale 1
                </h1>
                <div className="m-4">
                  <p>1 Saviour = 0.657 USDT</p>
                  <p>Next Stage Price = 0.723 USDT</p>
                  <p>Sold - $34,56,56,764/$50,00,00,000</p>
                  <p>Raised - $34,56,56,764/$40,00,00,000</p>
                  <input
                    className="bg-black border border-customRed mt-2 w-80 p-1 rounded-lg"
                    placeholder="Enter the amount (BNB)"
                  />
                  <input
                    className="bg-black border border-customRed mt-2 w-80 p-1 rounded-lg"
                    placeholder="Minimum Quantity to Buy"
                  />
                  <input
                    className="bg-black border border-customRed w-80 mt-2 p-1 rounded-lg"
                    placeholder="Maximum Quantity of Tokens"
                  />
                  <div className="flex justify-center gap-4 m-4 items-center">
                    <button className='bg-gradient-to-r from-customOrange to-customLightOrange rounded-lg pt-1 pl-2 pr-2 pb-1 text-white font-semibold font-xxs font-zcool'>Buy</button>
                    <button className='bg-gradient-to-r from-customOrange to-customLightOrange rounded-lg pt-1 pl-2 pr-2 pb-1 text-white font-semibold font-xxs font-zcool'>Claim Drop</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>


      {/* forth */}
      <Section>
        <div className=" w-full tokenomics">
          <div className="w-full mx-auto max-w-full xl:max-w-[1336px]  px-4 sm:px-6 lg:px-8">
          <div className="p-10 text-center">
  <div className="flex items-center justify-center">
    <h1 className="uppercase lg:mb-10 sm:mb-4 text-customRed font-shojumaru text-center p-8 text-4xl">Tokenomics</h1>
  </div>
  <div className="flex flex-col sm:flex-row justify-around items-center">
    <div className="w-full sm:w-1/4 relative mb-6 sm:mb-2">
      <div className="absolute lg:top-8 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:top-10 sm:left-20">
        <button className='bg-gradient-to-r from-customOrange to-customLightOrange rounded-xl pl-3 pt-2 pr-3 pb-2 text-white font-semibold sm:text-xs leading-3.5 font-shojumaru'>Token Details</button>
      </div>
      <div className="border rounded-lg font-zcool p-4 leading-10 text-white w-full items-center justify-around grid grid-rows-4 grid-flow-col border-customRed mt-12">
        <div>Name</div>
        <div>Symbol</div>
        <div>Total Supply</div>
        <div>Decimals</div>
        <div className="text-customRed">Saviour</div>
        <div className="text-customRed">SVR</div>
        <div className="text-customRed">1000 Trillion</div>
        <div className="text-customRed">18</div>
      </div>
    </div>
    <div className="w-full sm:w-1/2">
      <Image src="/images/Frame 1824.png" width={885.42} height={372} alt="tokenomics" />
    </div>
  </div>
</div>

          </div>
        </div>
      </Section>
      {/* fifth */}
      <Section>
        <div className="w-full roadmap">
          <div>
            <div className="mx-auto max-w-full sm:max-w-[390px] xl:max-w-[1336px] px-4 sm:px-6 lg:px-8 ">
              <div className="">
                <h2 className="p-4 text-customRed font-shojumaru text-center text-4xl">Road Map</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-10 items-center w-full">
  <div className="col-span-1">
    <Image
      src="/images/Link.png"
      width={260}
      height={380}
      alt="Roadmap"
    />
  </div>
  <div className="col-span-1">
    <Image
      src="/images/Link (1).png"
      width={260}
      height={380}
      alt="Roadmap"
    />
  </div>
  <div className="hidden lg:block col-span-1">
    <Image
      src="/images/Link (2).png"
      width={260}
      height={380}
      alt="Roadmap"
    />
  </div>
  <div className="hidden lg:block col-span-1">
    <Image
      src="/images/Link (3).png"
      width={260}
      height={380}
      alt="Roadmap"
    />
  </div>
</div>


            </div>
          </div>
        </div>
      </Section>
      {/* sixth */}
      <Section>
  <div className="w-full bg-black">
    <div className="w-full mx-auto max-w-full xl:max-w-[1336px]">
      <div className="w-full flex justify-center items-center flex-col lg:flex-row">
        <div>
          <Image src="/images/image 1.png" width={503} height={503} alt="faq" />
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <h1 className="text-customRed text-center text-4xl font-shojumaru">FAQ</h1>
          </div>
          <div className="text-white flex justify-center pt-10">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-1 gap-1">
                <div className="rounded-lg">
                  <ul className="p-1">
                    <li className="border rounded-lg border-customRed">
                      <button
                        type="button"
                        className="w-full px-6 py-6 text-left"
                        onClick={() => setSelected(selected !== 1 ? 1 : null)}
                      >
                        <div className="flex font-shojumaru items-center justify-between">
                          <span>Why choose &quot;Savior&quot;?</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 ${selected === 1 ? 'transform rotate-180' : ''}`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all ${selected === 1 ? 'max-h-full' : 'max-h-0'} duration-700`}>
                        <div className="px-6 pb-6 font-zcool bg-slate-900">
                          <p>Game day seats are rentals will be in place for the first game of the season, unless you are in sections 409-421. Those sections will have game day seats midway through the football season.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg ">
        <ul className="p-1">
          <li className="border rounder-lg border-customRed">
            <button
              type="button"
              className="w-full px-6 py-6 text-left"
              onClick={() => setSelected(selected !== 2 ? 2 : null)}
            >
              <div className="flex font-shojumaru items-center justify-between">
                <span>Why is the IDO duration so long?</span>
                <svg
                  className={`w-5 h-5 text-gray-500 ${selected === 2 ? 'transform rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </button>
            <div className={`overflow-hidden transition-all ${selected === 2 ? 'max-h-full' : 'max-h-0'} duration-700`}>
              <div className="px-6 pb-6  font-zcool bg-slate-900">
                <p>Game day seats are rentals will be in place for the first game of the season, unless you are in sections 409-421. Those sections will have game day seats midway through the football season.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="rounded-lg ">
        <ul className="p-1">
          <li className="border rounder-lg border-customRed">
            <button
              type="button"
              className="w-full px-6 py-6 text-left"
              onClick={() => setSelected(selected !== 3 ? 3 : null)}
            >
              <div className="flex font-shojumaru items-center justify-between">
                <span>Why is the IDO duration so long?</span>
                <svg
                  className={`w-5 h-5 text-gray-500 ${selected === 2 ? 'transform rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </button>
            <div className={`overflow-hidden transition-all ${selected === 3 ? 'max-h-full' : 'max-h-0'} duration-700`}>
              <div className="px-6 pb-6  font-zcool bg-slate-900">
                <p>Game day seats are rentals will be in place for the first game of the season, unless you are in sections 409-421. Those sections will have game day seats midway through the football season.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="rounded-lg ">
        <ul className="p-1">
          <li className="border rounder-lg border-customRed">
            <button
              type="button"
              className="w-full px-6 py-6 text-left"
              onClick={() => setSelected(selected !== 4 ? 4 : null)}
            >
              <div className="flex font-shojumaru items-center justify-between">
                <span>Why is the IDO duration so long?</span>
                <svg
                  className={`w-5 h-5 text-gray-500 ${selected === 4 ? 'transform rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </button>
            <div className={`overflow-hidden transition-all ${selected === 4 ? 'max-h-full' : 'max-h-0'} duration-700`}>
              <div className="px-6 pb-6  font-zcool bg-slate-900">
                <p>Game day seats are rentals will be in place for the first game of the season, unless you are in sections 409-421. Those sections will have game day seats midway through the football season.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      

</Section>

      {/* footer */}
      <Section>
      <footer className=" text-white bg-black">
  <div className="w-9/12   mx-auto  max-w-full sm:max-w-[390px] xl:max-w-[1336px]  py-8">
   <div className="grid justify-center">
    <div className="flex justify-center items-center" style={{ width: "200px", height: "221px" }}>
      <Image src="/images/Frame 1790.png" width={200} height={221} alt="frame" />
      
    </div>
    <div><p className="font-poppins font-semibold text-white text-center text-2xl" style={{color:"red"}}>SITEMAP</p></div>
    </div>
    <div className="w-full font-semibold text-xl mt-4 font-poppins grid gap-2 lg:grid-rows-1 lg:grid-flow-col sm:grid-rows-2 sm:grid-flow-col justify-around ">
      <div>Home</div>
      <div>IDO</div>
      <div>Tokenomics</div>
      <div>Road map</div>
      <div>Whitepaper</div>
      <div>Pledge</div>
      <div>NFT</div>
    </div>
    <div className="w-full p-10 flex justify-center">
    <div className="flex w-60 justify-evenly items-center">
      <div className="w-7 h-7"><FaTelegramPlane className="w-7 h-7" style={{color:"red"}}/></div>
      <div><FaTwitter className="w-7 h-7" style={{color:"red"}}/></div>
      <div ><MdEmail className="w-7 h-7" style={{color:"red"}}/></div>
    </div>
    </div>
   
  </div>
</footer>
      </Section>
    </main>
  );
}
