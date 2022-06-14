import { useState } from "react";
function MainNaviation(props) {
  let Links = [
    {name:"Informace",link:"/"},
    {name:"Objednávky",link:"/orders"},
    {name:"Pracovníci",link:"/workers"},
    {name:"Zboží",link:"/articles"},
    {name:"Zákazníci",link:"/customers"},

  ]
  let [open,setOpen] = useState(false);
  return (
    <header className='shadow-md w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-green-400 py-4 md:px-10 px-7'>
      <div className='font-bold text-4xl cursor-pointer flex items-center font-[Poppins] 
      text-white'> 
        ERP systém 
      </div>
      <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 bg-green-400 transition-all duration-500  ${open ? 'top-16 ':'top-[-490px]'}`}>
        {
          Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 bg-green-400'>
              <a href={link.link} className='text-sky-800 hover:text-white duration-200'>{link.name}</a>
            </li>
          ))
        }

        </ul>
      </div>
    </header>
    
  );
}

export default MainNaviation;
