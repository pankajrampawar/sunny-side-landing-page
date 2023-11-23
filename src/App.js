import React from 'react';
import logo from './images/logo.svg';
import menuIcon from './images/icon-hamburger.svg';
import headerImg from './images/mobile/image-header.jpg';
import eggImg from './images/mobile/image-transform.jpg';
import standOutImg from './images/mobile/image-stand-out.jpg';
import apples from './images/mobile/image-graphic-design.jpg';
import oranges from './images/mobile/image-photography.jpg';
import emily from './images/image-emily.jpg';
import jennie from './images/image-jennie.jpg';
import thomas from './images/image-thomas.jpg';
import bottles from './images/mobile/image-gallery-milkbottles.jpg';
import cone from './images/mobile/image-gallery-cone.jpg';
import sugarCubes from './images/mobile/image-gallery-sugar-cubes.jpg';
import orange from './images/mobile/image-gallery-orange.jpg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import headerDesktop from './images/desktop/image-header.jpg';
import eggImgDesk from './images/desktop/image-transform.jpg'
import glassDesk from './images/desktop/image-stand-out.jpg';
import deskCherry from './images/desktop/image-graphic-design.jpg';
import deskOrange from './images/desktop/image-photography.jpg';
import deskBottles from './images/desktop/image-gallery-milkbottles.jpg';
import deskCone from './images/desktop/image-gallery-cone.jpg';
import DeskSugar from './images/desktop/image-gallery-sugarcubes.jpg';
import deskoranges from './images/desktop/image-gallery-orange.jpg';




function App() {

  // useRef
  const divRef = React.useRef(null);
  const deskDivRef = React.useRef(null);
  const navRef = React.useRef(null);

  // react states
const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
const [headerHeight, setHeaderHeight] = React.useState(null);
const [deskHeaderHeight, setDeskHeaderHeight] = React.useState(null);
const [navHeight, setNavHeight] = React.useState(null);

// Components
  const Drawer = ()=>{
    return (

      <div className='bg-white w-5/6 z-20 h-60 left-0 right-0 m-auto absolute top-20 ' style={{ display: isDrawerOpen ? 'flex' : 'none' }}>
        <div className='flex flex-col gap-6 py-4 text text-xl text-DGB items-center w-full justify-center relative'>
          <span>About</span>
          <span>Services</span>
          <span>Projects</span>
          <button className='bg-yellow header text-black p-3 rounded-3xl'>CONTACT</button>
          <div className='bg-white absolute w-10 -top-5 -right-5 h-10 rotate-45'></div>
          <div className='bg-[#3ebfff] absolute w-7 h-14 -top-7 -right-7'></div>
        </div>
      </div>

    )
  }

    //egg div component
  const eggDivMargin = {
    marginTop: 
      window.innerWidth <= 640 
      ? `${headerHeight-navHeight}px`
      : `${deskHeaderHeight-navHeight}px`
  };


//function 
const handleDrawerToggle = ()=>{
  setIsDrawerOpen(prev=>!prev);
}

// taking the height of the div for fixing the position issues of the egg img.
React.useEffect(()=>{
  //updaing div height
  const updateDivHeight= ()=>{
    if(divRef.current) {
      const newHeight = divRef.current.clientHeight;
      setHeaderHeight(newHeight);
      console.log(headerHeight)
    }
  }

  //updating nav height
  const updateNavHeight = ()=>{
    if(navRef.current) {
      const newNavHeight = navRef.current.clientHeight;
      setNavHeight(newNavHeight);
    }
  }

  // update desk Header height
  const updateDeskHeaderHeight = ()=>{
    if(deskDivRef.current) {
      const newDeskHeight = deskDivRef.current.clientHeight;
      setDeskHeaderHeight(newDeskHeight);
    }
  }

  updateDivHeight(); // initial update
  updateNavHeight(); // initial update
  updateDeskHeaderHeight(); //initail update

  const handleResize = ()=>{
    updateDeskHeaderHeight();
    updateDivHeight();
    updateNavHeight();
  }

  // event listener for window resizing
  window.addEventListener('resize', handleResize);

  // claenup of event listener
  return ()=>{
    window.removeEventListener('resize', handleResize)
  }
}, [])

// functionality check
console.log(deskHeaderHeight);

  // the main component
  return (
    <div className='h-screen w-screen flex flex-col'>
     
      <div className="flex flex-col h-full z-0 relative" ref={navRef} >  
        <nav className=" flex items-center justify-between p-4 z-10 " >
          <div><img src={logo} alt='sunnyside logo'/></div>
          <div  onClick={handleDrawerToggle} className='sm:hidden'><img src={menuIcon} alt='menu icon'/></div>

          <div className='hidden sm:flex text-white text gap-8 text-xl pr-6 items-center'>
              <span>About</span>
              <span>Services</span>
              <span>Projects</span>
              <button className=' text-md header text-black bg-white p-2 px-4 rounded-3xl hover:bg-sky-300'>CONTACT</button>
          </div>
        </nav>
        <div className='sm:hidden'>
          <Drawer></Drawer>
        </div>
        
        
        <div className="z-10 text-white text-5xl mt-24 text-center header tracking-widest leading-snug">
          WE ARE CREATIVES
        </div>
        <div className='absolute top-0 z-0 sm:hidden' ref={divRef}><img src={headerImg} alt='header' /></div>
        <div className='absolute hidden sm:block top-0 z-0 ' ref={deskDivRef}> 
          <img src={headerDesktop} alt='header' />
        </div>
      </div>
      
      <div className='sm:flex  items-center' style={eggDivMargin}>
        <div className='sm:hidden'> 
          <img src={eggImg} alt='egg'/>
        </div>

        <div className='flex flex-col items-center header gap-8 my-16 px-10 sm:w-1/2 '>
          <span className='text-4xl text-center text-VDDB'>Tarnsform your brand</span>
          <p className='text text-center text-lg text-gray-500'>We are full-service creating agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <span className='text-black decoration-softRed underline cursor-pointer'>LEARN MORE</span>
        </div>
       
        <div className='hidden sm:flex w-1/2'>
          <img src={eggImgDesk} className='object-cover' alt="egg"/>
        </div>
      </div>
      
      <div className='sm:flex items-center'>
        <div className='hidden'><img src={standOutImg} alt='Glass (stand out illustration)'/></div>

        <div className='hidden sm:block w-1/2'>
          <img src={glassDesk} alt='glass'/>
        </div>
       
       <div className='flex flex-col items-center header gap-6 my-10 sm:w-1/2'>
          <span className='text-3xl px-8 text-center text-VDDB' >Stand out to the right audience</span>
          <p className='text text-center text-lg text-gray-500 px-6' >Using collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places</p>
          <span className='decoration-yellow underline cursor-pointer'>LEARN MORE</span>
        </div>
      </div>

      <div className='sm:flex'>
        <div className='flex flex-col relative text-DDCyan'>
          <div className='sm:hidden'><img src={apples} alt='cherry'/></div>
          <div className='hidden sm:block'><img src={deskCherry} alt='cherry'/></div>

          <div className='absolute flex flex-col items-center justify-end gap-4 pb-16 px-6 h-full'>
            <span className='text-3xl header'>Graphic Design</span>
            <p className='text-center text text-lg'>Great design makes you memorable. We deliver art work that underscores your brand message and captures potential client's attention.</p>
          </div>
        </div>

        <div className='flex flex-col relative text-DBlue'>
          <div className='sm:hidden'><img src={oranges} alt='oranges'/></div>
          <div className='hidden sm:block'> <img src={deskOrange} alt='orange'/></div>

          <div className='absolute flex flex-col justify-end h-full items-center gap-4 px-6 pb-16'>
           <span className='header text-4xl'>Photography</span>
           <p className='text-center text-lg text '>Increase your credibility by getting the most stunning, hight-quality photos that improve your business image.</p>
         </div>
        </div>
      </div>
      

      <div className='flex flex-col items-center gap-12 my-10 px-8 sm:my-28'>
        <span className='header text-GB text-xl tracking-widest text-center'>CLIENT TESTIMONIALS</span>

        <div className='flex flex-col gap-12 sm:flex-row sm:justify-center sm:gap-6 sm:mx-24'>
        <div className='flex flex-col items-center gap-6'>
          <div><img src={emily} alt='Emily' className='w-24 rounded-full sm:w-20' /></div>
          <p className='text-center text-VDGB text text-lg sm:text-base'>We put our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <div className='flex flex-col gap-1'>
            <span className='text-2xl header text-VDDB text-center'>Emily R.</span>
            <span className='text text-md header text-GB'>Marketing Director</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6'>
          <div><img src={thomas} alt='thomas'  className='w-24 rounded-full sm:w-20'/></div>
          <p className='text-center text-VDGB text text-lg sm:text-base'>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experiance.</p>
          <div className='flex flex-col gap-1'>
            <span className='text-xl header text-VDDB text-center'>Thomas S.</span>
            <span className='text text-md header text-GB'>Chief Operating Officer</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6'>
          <div><img src={jennie} alt='jennie' className='w-24 rounded-full sm:w-20'/></div>
          <p className='text-center text-VDGB text text-lg sm:text-base'>Incredible end result! Our sales increased over 400% when we worked with sunnyside. Highly recommended!</p>
          <div className='flex flex-col gap-1'>
            <span className='text-2xl header text-VDDB text-center'>Jennie F.</span>
            <span className='text text-md header text-GB'>Business Owner</span>
          </div>
        </div>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:hidden'>
        <div><img src={bottles} alt='bottles' /></div>
        <div><img src={orange} alt='orange' /></div>
        <div><img src={cone} alt='cone' /></div>
        <div><img src={sugarCubes} alt='sugar' /></div>
      </div>

      <div className='grid-cols-4 hidden sm:grid'>
        <div><img src={deskBottles} alt='milk bottles'/></div>
        <div><img src={deskoranges} alt='half sliced orange'/></div>
        <div><img src={deskCone} alt='cone'/></div>
        <div><img src={DeskSugar} alt='stacked sugar cubes'/></div>
      </div>
      
      <div className='bg-footer flex flex-col gap-8 pt-14 pb-32 sm:pb-20'>
        <div className='text-4xl text-DDCyan font-extrabold text-center'>sunnyside</div>
        <div className='flex justify-evenly text text-DMCyan text-xl sm:justify-center sm:gap-10'>
          <span className='hover:text-white cursor-pointer'>About</span>
          <span className='hover:text-white cursor-pointer'>Services</span>
          <span className='hover:text-white cursor-pointer'>Projects</span>
        </div>

        <div className='flex gap-8 justify-center mt-16 sm:mt-10'>
          <span><img src={facebook} alt='facebook' className='h-6 hover:brightness-200 hover:contrast-200 cursor-pointer'/></span>
          <span><img src={instagram} alt='instagram' className='h-6 hover:brightness-200 hover:contrast-200 cursor-pointer'/></span>
          <span><img src={twitter} alt='twitter' className='h-6 hover:brightness-200 hover:contrast-200 cursor-pointer'/></span>
          <span><img src={pinterest} alt='pinterest' className='h-6 hover:brightness-200 hover:contrast-200 cursor-pointer'/></span>
        </div>
      </div>
    </div>
  );
}

export default App;
