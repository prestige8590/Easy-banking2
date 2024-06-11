import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <nav className='flex align items-center justify-between py-[20px] px-[50px]'>
        <a href="#"><img src="./logo (1).svg" alt="" /></a>
        
          <ul className='flex gap-[50px] text-gray-400'>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Blogs</li></a>
            <a href="#"><li>Career</li></a>
          </ul>
          <button className=' bg-[#00924b] rounded-[50px] py-[7px] px-[16px] cursor-pointer text-white'>Request Invite</button>
        
      </nav>
    </div>

   <div>
    <main className='flex items-center justify-between bg-[#F3F4F6] py-[50px] px-[50px]'>
    <div className='w-[40%]'>
        <h2 className='font-[400] text-[60px]'>Next generation digital banking</h2>
         <p className='text-[20px] py[20px] px-[0] leading-[1.5]'>Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
       <button>Request Invite</button>
        </div>
        <img src="./image-mockups.png" className='w-[45%]' alt="" />
    </main>
    </div>

    <div>
      <section className=' py-[50px] px-[50px] '>
        <div className='w-[45%]'>
      <h3 className='text-[40px] font-[400] mt-[10px] pb-[20px] '>Why choose Easybank ?</h3>
      <p className='leading-[1.4] text-[20px]' >We leaverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className='grid grid-cols-4 mt-[60px] gap-[50px]'>
      <div>
        <img src="./icon-online.svg" alt="" />
        <h1 className='text-[18px] font-[600] my-[10px] mx-[0px]'>Online Banking</h1>
                <p className='text-[17px]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
      </div>
      <div>
        <img src="./icon-onboarding.svg" alt="" />
        <h1 className='text-[18px] font-[600] my-[10px] mx-[0px]'>Simple Budgeting</h1>
                <p className='text-[17px]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
      </div>
      <div>
        <img src="./icon-budgeting.svg" alt="" />
        <h1 className='text-[18px] font-[600] my-[10px] mx-[0px]'>Fast Onboarding</h1>
                <p className='text-[17px]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
      </div>
      <div>
        <img src="./icon-api.svg" alt="" />
        <h1 className='text-[18px] font-[600] my-[10px] mx-[0px]'>Open API</h1>
                <p className='text-[17px]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
      </div>
      </div>
      </section>
      </div>
<div>
      <section className='py-[50px] px-[50px] bg-[#F3F4F6]'>
      <h1 className='font-[400] text-[25px] text-gray-400 '>Latest Articles</h1>
      <div className='grid  grid-cols-4 gap-[50px] mt-[20px]'>
        <div className='shadow-md'>
          <img src="./image-currency.jpg" alt="" className='w-[100%]' />
          <div className='p-[15px]'>
            <h2 className='font-[600] text-[16px]'>By Claire Robinson</h2>
            <a href="#" className=' hover:text-green-400' >Recieve money in any currency with no fees </a>
            <p className='text-[14px]'>
                The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …
            </p>
        </div>
        </div>

        <div className='shadow-md'>
          <img src="./image-confetti.jpg" className='w-[100%]' alt="" />
         <div className='p-[15px]'>
            <h2 className='font-[600] text-[16px]'>By Wilson Hutton</h2>
            <a href="#" className=' hover:text-green-400'>Treat yourself worrying about money</a>
            <p className='text-[14px]'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
         </div>
        </div>
        <div className='shadow-md'>
          <img src="./image-plane.jpg" className='w-[100%]' alt="" />
          <div className='p-[15px]'>
          <h2 className='font-[600] text-[16px]'> By Wilson Hutton</h2>
            <a href="#" className=' hover:text-green-400'>Take your Easybank card wherever you go</a>
            <p className='text-[14px]'>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …</p>
          </div>
          </div>
        <div className='shadow-md'>
          <img src="./image-restaurant.jpg" className='w-[100%]' alt="" />
          <div className='p-[15px]'>
              <h2 className='font-[600] text-[16px]' >By Claire Robinson</h2>
              <a href="#" className=' hover:text-green-400'>Our invite only-Beta aacounts are now live!</a>
              <p className='text-[14px]'>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
          </div> 
        
        </div>
      </div>
      </section>
      </div>

<div>
      <footer className='bg-[#2D314D] text-white flex p-[50px] items-start  justify-between'>
      <div>
      <a href="#"><img src="./logo (1).svg" alt="" className='invert-[0.5] mb-[3rem]'  /></a>
      <ul className='flex text-[20px] gap-[20px] items-center text-white'>
        <li>  <a href="https://web.facebook.com/chinaza.nwebo" target="_blank"><i class="ri-facebook-circle-line"></i></a></li>
        <li><a href="https://wa.me/+2348167708590" target="_blank"><i class="ri-whatsapp-line"></i></a></li>
        <li><a href="#"><i class="ri-instagram-line"></i></a></li>
        <li><a href="#"><i class="ri-twitter-line"></i></a></li>
        <li> <a href="#"><i class="ri-youtube-line"></i></a></li>
      </ul>
      </div>
   <div className='flex gap-[100px]'>
   <ul>
    <li className='mb-[10px]'> <a href="#">About Us</a></li>
     <li className='mb-[10px]'> <a href="#">Careers</a></li>
     <li className='mb-[10px]'><a href="#">Contact</a></li>
     </ul>
     <ul>
     <li className='mb-[10px]'><a href="#">Support</a></li>
     <li className='mb-[10px]'> <a href="#">Blogs</a></li>
     <li className='mb-[10px]'><a href="#">Privacy Policy</a></li>
     </ul>
   </div>

     <div>
            <button className='bg-[#00924b] rounded-[50px] py-[7px] px-[16px] cursor-pointer text-white'>Request Invite</button>
            <p className='mt-[10px]'>&copy;Easybank.All Rights Reserved</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
