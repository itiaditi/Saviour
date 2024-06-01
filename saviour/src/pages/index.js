import Button from "@/components/Button";
import Section from "@/components/Section";
import { FaTelegramPlane,FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Home() {
  return (
    <main className="items-center min-h-screen w-full mx-auto max-w-full bg-gray-100">
      {/* navbar +main section */}
     <Section>
     <div className="main-section bg-red min-h-screen flex flex-col items-center justify-center">
      <nav className="w-full mx-auto max-w-full sm:max-w-[390px] xl:max-w-[1336px] px-4 sm:px-6 lg:px-8">
        <div className="border border-white text-white flex items-center justify-between flex-wrap">
          <div className="flex items-center border border-white justify-between w-full lg:w-auto">
            <div className="text-white material-symbols-outlined lg:hidden">
              menu
            </div>
            <div className="flex items-center justify-evenly text-white w-full lg:w-auto">
              <div style={{ width: "60.31px", height: "66.57px" }}>
                <img src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__" />
              </div>
              <p className="font-zcool text-3xl">Saviour</p>
            </div>
            <div className="lg:hidden"><Button /></div>
          </div>
          <div className="hidden lg:flex w-full lg:w-auto bg-black rounded-3xl text-xl mt-4 lg:mt-0">
            <div className="flex gap-6 items-center justify-center p-4 lg:p-4">
              <div className="font-zcool">Home</div>
              <div className="font-zcool">IDO</div>
              <div className="font-zcool">Tokenomics</div>
              <div className="font-zcool">Roadmap</div>
              <div className="font-zcool">Coming soon<span>v</span></div>
            </div>
          </div>
          <div className="hidden lg:block mt-4 lg:mt-0"><Button /></div>
        </div>
        <div className="rounded bg-black-transparent sm:bg-transparent text-3xl w-full sm:text-3xl md:text-5xl pt-24 lg:pt-48 pb-24 lg:pb-48 px-4 lg:px-8 leading-snug text-center">
          <p className="black-transparent font-shojumaru text-white">Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.</p>
        </div>
      </nav>
</div>
     </Section>


      
     <Section> <div className="min-h-screen w-full bg-black">
      <div className="w-full mx-auto max-w-full xl:max-w-[1336px] sm:max-w-[390px] min-h-screen"></div>
      </div></Section>
      <Section>
      <div className="min-h-screen w-full event-section">
        <div className="w-full mx-auto max-w-full xl:max-w-[1336px] min-h-screen">

        </div>
      </div>
      </Section>
      <Section>
      <div className="min-h-screen w-full tokenomics">
        <div className="w-full mx-auto max-w-full xl:max-w-[1336px] min-h-screen">
         
        </div>
      </div>
      </Section>
     <Section>
     <div className="w-full roadmap">
       <div>
       <div className="mx-auto max-w-full sm:max-w-[390px] xl:max-w-[1336px] px-4 sm:px-6 lg:px-8 ">
         <div className=""><h2 className=" p-4 text-white font-shojumaru text-center text-4xl">Road Map</h2></div>
         <div className="grid grid-cols-4 items-center w-full">
          <div className="w-60 h-80"><img src="https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__"/></div>
          <div className="w-60 h-80"><img src="https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__"/></div>
        
          <div className="w-60 h-80"><img src="https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__"/></div>
        
          <div className="w-60 h-80"><img src="https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__"/></div>
        
         </div>
         </div>
       </div>
      </div>
     </Section>
      <div className="min-h-screen w-full bg-slate-950 ">
        <div className="w-full mx-auto max-w-full xl:max-w-[1336px] min-h-screen">
          <div className="flex justify-between items-center ">
            <div className="h-1/2 w-1/2 p-20"><img src="https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"/></div>
            <div className="w-1/2">
              <div className="flex w-1/2 items-center justify-center">
                
              <h2 className="font-shojumaru text-center text-white">FAQ</h2>
              </div>
              <div className="flex-col flex gap-4 justify-center text-white">
                <div className="flex border w-1/2 p-2 font-shojumaru border-red rounded-lg justify-around items-center">
                  <div><p>1</p></div>
                  <div><p>Why choose "Savior"?</p></div>
                <div><p>v</p></div>
                </div>
                <div className="flex border w-1/2 p-2 font-shojumaru border-red rounded-lg justify-around items-center">
                  <div><p>1</p></div>
                  <div><p>Why choose "Savior"?</p></div>
                <div><p>v</p></div>
                </div>
                <div className="flex border w-1/2 p-2 font-shojumaru border-red rounded-lg justify-around items-center">
                  <div><p>1</p></div>
                  <div><p>Why choose "Savior"?</p></div>
                <div><p>v</p></div>
                </div>
                <div className="flex border w-1/2 p-2 font-shojumaru border-red rounded-lg justify-around items-center">
                  <div><p>1</p></div>
                  <div><p>Why choose "Savior"?</p></div>
                <div><p>v</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className=" text-white bg-black">
  <div className="w-9/12 border border-white mx-auto  max-w-full sm:max-w-[390px] xl:max-w-[1336px]  py-8">
   <div className="grid justify-center">
    <div className="flex justify-center items-center" style={{ width: "200px", height: "221px" }}>
      <img src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__" />
      
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

    </main>
  );
}
