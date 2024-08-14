import logo from "./../assets/logo.png"
import menu from "./../assets/menu.png"

export default function Header() {
  return (
    <div className="bg-white">
        <header className="border-b">
            <nav className="flex justify-between items-center px-4 py-2">

            <div className="flex-shrink-0">
            <img src={logo} alt="TVS Logo" className="w-[124px] h-[107px] top-[18px] left-[40px] gap-[0px] opacity-[0px]"/>
            </div>

            <ul className="flex space-x-8 w-[489px] h-[29px] top-[72px] left-[356px] gap-[0px] opacity-[0px]">
                <li><a href="/home" className="text-black hover:text-gray-600">Home</a></li>
                <li><a href="#" className="text-black hover:text-gray-600">Notice</a></li>
                <li><a href="#" className="text-black hover:text-gray-600">Contact Us</a></li>
                <li><a href="#" className="text-black hover:text-gray-600">Industries</a></li>
            </ul>

               <img src={menu} alt="menu logo" className="flex flex-col space-y-1 cursor-pointer w-[29px] h-[29px] top-[72px] left-[1092px] gap-[0px] opacity-[0px]"/>
            </nav>
        </header>
    </div>
  )
}
