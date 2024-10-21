import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-4 dark:z-10 ">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} className=""/>
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-[#667FD8] dark:bg-[#A46EDB] text-white py-1 px-2 rounded-lg">
            Olympics Athletes
          </span>
          {/* <span className='text-xl hidden sm:inline'>Clone</span> */}
        </Link>
      </div>
    </div>
  );
}
