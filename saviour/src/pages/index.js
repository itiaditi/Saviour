import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "next/image";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Home() {
  return (
    <main className="items-center min-h-screen w-full mx-auto max-w-full ">
      {/* navbar +main section */}
      <Section>
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
        <div className="min-h-screen w-full bg-black">
          <div className="w-full mx-auto max-w-full xl:max-w-[1336px] sm:max-w-[390px] min-h-screen">
            <div>
              <div>
                <div>
                  <h1 className="text-white">
                    Introduction
                  </h1>
                  </div>
                  <div className="text-white">
                    <p>
                    We've all been in the mud once, and now we've decided to fight it out. Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! Our mission is to empower everyone to share wealth and succeed. read more...
                    </p>
                  </div>
              </div>
              <div>
                <Image src="/images/introduction.png" width={200} height={200}/>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="min-h-screen w-full event-section">
          <div className="w-full mx-auto max-w-full xl:max-w-[1336px] min-h-screen"></div>
        </div>
      </Section>
      <Section>
        <div className="min-h-screen w-full tokenomics">
          <div className="w-full mx-auto max-w-full xl:max-w-[1336px] min-h-screen"></div>
        </div>
      </Section>
      <Section>
        <div className="w-full roadmap">
          <div>
            <div className="mx-auto max-w-full sm:max-w-[390px] xl:max-w-[1336px] px-4 sm:px-6 lg:px-8 ">
              <div className="">
                <h2 className="p-4 text-white font-shojumaru text-center text-4xl">Road Map</h2>
              </div>
              <div className="grid grid-cols-4 items-center w-full">
                <Image
                  src="/images/link.png"
                  width={60}
                  height={80}
                  alt="Roadmap"
                />
                <Image
                  src="/images/link.png"
                  width={60}
                  height={80}
                  alt="Roadmap"
                />
                <Image
                  src="/images/link.png"
                  width={60}
                  height={80}
                  alt="Roadmap"
                />
                <Image
                  src="/images/link.png"
                  width={60}
                  height={80}
                  alt="Roadmap"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="w-full bg-black min-h-screen">
          <div className="w-full mx-auto max-w-full xl:max-w-[1336px] min-h-screen"></div>
        </div>
      </Section>
      <Section>
      <footer className=" text-white bg-black">
  <div className="w-9/12 border border-white mx-auto  max-w-full sm:max-w-[390px] xl:max-w-[1336px]  py-8">
   <div className="grid justify-center">
    <div className="flex justify-center items-center" style={{ width: "200px", height: "221px" }}>
      <Image src="/images/Frame 1790.png" width={200} height={221} />
      
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
      </Section>
    </main>
  );
}
