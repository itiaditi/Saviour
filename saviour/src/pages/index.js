import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "next/image";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Home() {
  return (
    <main className="items-center min-h-screen w-full mx-auto max-w-full ">
      {/* navbar +main section */}
      {/* <Section>
        <div className="main-section min-h-screen flex flex-col items-center justify-center">
          <nav className="w-full mx-auto max-w-full sm:max-w-[390px] xl:max-w-[1336px] px-4 sm:px-6 lg:px-8">
            <div className="border border-white text-white flex items-center justify-between flex-wrap">
              <div className="flex items-center border border-white justify-between w-full lg:w-auto">
                <div className="text-white material-symbols-outlined lg:hidden">menu</div>
                <div className="flex items-center justify-evenly text-white w-full lg:w-auto">
                  <Image
                    src="/images/logo.png"
                    width={60.31}
                    height={66.57}
                    alt="Logo"
                  />
                  <p className="font-zcool text-3xl">Saviour</p>
                </div>
                <div className="lg:hidden">
                  <Button />
                </div>
              </div>
              <div className="hidden lg:flex w-full lg:w-auto bg-black rounded-3xl text-xl mt-4 lg:mt-0">
                <div className="flex gap-6 items-center justify-center p-4 lg:p-4">
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
                <Button />
              </div>
            </div>
            <div className="rounded bg-black-transparent sm:bg-transparent text-3xl w-full sm:text-3xl md:text-5xl pt-24 lg:pt-48 pb-24 lg:pb-48 px-4 lg:px-8 leading-snug text-center">
              <p className="black-transparent font-shojumaru text-white">
                Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
              </p>
            </div>
          </nav>
        </div>
      </Section>

      <Section>
        <div className=" w-full bg-black">
          <div className="w-full mx-auto max-w-full xl:max-w-[1336px] sm:max-w-[390px] px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-around items-center">
              <div className="w-1/2 p-10">
                <div>
                  <h1 className="uppercase text-white mb-4 text-4xl leading-10 font-shojumaru">
                    Introduction
                  </h1>
                  </div>
                  <div className="text-xl font-zcool">
                    <p className="text-white">
                    We&apos;ve all been in the mud once&lsquo; and now we&apos;ve decided to fight it out.<br/> 
                    Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive&lasqou; join us to save the future!
                    <br/> Our mission is to empower everyone to share wealth and succeed.<br/>
                    </p>
                    <span className="text-slate-500 text-lg">read more...</span>
                  </div>
              </div>
              <div className="">
                <Image src="/images/introduction.png" width={512} height={723} alt="intro"/>
              </div>
            </div>
          </div>
        </div>
      </Section> */}
      <Section>
        <div className="min-h-screen w-full event-section">
          <div className="w-full mx-auto max-w-full xl:max-w-[1336px] min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="border border-white">
              <div>
                <h1 className="uppercase font-shojumaru text-center p-8 text-customRed text-4xl">
                  Participate in our IDO Event!
                </h1>
              </div>
              <div className="flex w-full justify-around items-center">
                <div className="w-1/2 flex flex-col justify-center items-center text-center border border-white p-20">
                  
                  <div>
                    <p className="text-white font-zcool text-lg">
                      During our IDO event, you will gain early access to our
                      revolutionary ecosystem, designed to empower everyone to
                      share wealth and achieve success.
                    </p>
                  </div>
                  <div className="w-full mt-12 relative mb-6 sm:mb-2">
                    <div className="absolute lg:-top-4 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:top-10 sm:left-40">
                      <button className="bg-gradient-to-r from-customOrange to-customLightOrange rounded-xl pl-3 pt-2 pr-3 pb-2 text-white font-semibold sm:text-xs leading-3.5 font-shojumaru">
                        Token Info
                      </button>
                    </div>
                   <div className=" rounded-lg border border-customRed">
                   <div className=" font-zcool p-2 leading-8 text-white w-full items-center justify-around grid grid-rows-3 grid-flow-col">
                      <div>Total Token Supply</div>
                      <div>Soft Cap</div>
                      <div>Initial exchange rate</div>
                      <div className="text-customRed">20</div>
                      <div className="text-customRed">200 BNB</div>
                      <div className="text-customRed">1 BNB</div>
                    </div>
                    <h1 className="text-white font-zcool">Recommended Referral Commission</h1>
                    <div className=" font-zcool  leading-10 text-white w-full items-center justify-around grid grid-rows-2 grid-flow-col ">
                      <div>Total Token Supply</div>
                      <div>Soft Cap</div>
                      <div className="text-customRed">20</div>
                      <div className="text-customRed">200 BNB</div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 mt-12 relative mb-6 sm:mb-2">
                    <div className="absolute lg:-top-4 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:top-10 sm:left-40">
                      <button className="bg-gradient-to-r from-customOrange to-customLightOrange rounded-xl pl-3 pt-2 pr-3 pb-2 text-white font-semibold sm:text-xs leading-3.5 font-shojumaru">
                        Token Details
                      </button>
                    </div>
                   <div className=" rounded-lg border border-customRed">
                   <div className=" font-zcool p-2 leading-8 text-white w-full items-center justify-around grid ">
                     <h1 className="uppercase text-customRed font-shojumaru text-4xl">Presale 1</h1>
                    </div>
                   
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
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
      {/* <Section>
        <div className="w-full roadmap">
          <div>
            <div className="mx-auto max-w-full sm:max-w-[390px] xl:max-w-[1336px] px-4 sm:px-6 lg:px-8 ">
              <div className="">
                <h2 className="p-4 text-customRed font-shojumaru text-center text-4xl">Road Map</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-10 items-center w-full">
  <div className="col-span-1">
    <Image
      src="/images/link.png"
      width={260}
      height={380}
      alt="Roadmap"
    />
  </div>
  <div className="col-span-1">
    <Image
      src="/images/link.png"
      width={260}
      height={380}
      alt="Roadmap"
    />
  </div>
  <div className="hidden lg:block col-span-1">
    <Image
      src="/images/link.png"
      width={260}
      height={380}
      alt="Roadmap"
    />
  </div>
  <div className="hidden lg:block col-span-1">
    <Image
      src="/images/link.png"
      width={260}
      height={380}
      alt="Roadmap"
    />
  </div>
</div>


            </div>
          </div>
        </div>
      </Section> */}
      {/* <Section>
        <div className="w-full bg-black min-h-screen">
          <div className="w-full mx-auto max-w-full xl:max-w-[1336px] min-h-screen"></div>
        </div>
      </Section> */}
      {/* <Section>
      <footer className=" text-white bg-black">
  <div className="w-9/12 border border-white mx-auto  max-w-full sm:max-w-[390px] xl:max-w-[1336px]  py-8">
   <div className="grid justify-center">
    <div className="flex justify-center items-center" style={{ width: "200px", height: "221px" }}>
      <Image src="/images/Frame 1790.png" width={200} height={221} alt="frame" />
      
    </div>
    <div><p className="font-poppins font-semibold text-white text-center text-2xl" style={{color:"red"}}>SITEMAP</p></div>
    </div>
    <div className="w-full font-semibold text-xl mt-4 font-poppins flex justify-around">
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
      </Section> */}
    </main>
  );
}
