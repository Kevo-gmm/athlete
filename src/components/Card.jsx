import Image from 'next/image';
import Link from 'next/link';
import { FaMedal } from "react-icons/fa6";

export default function Card({ result }) {
  
  return (
    <div className="bg-white group cursor-pointer hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-2 transition-shadow duration-200">
      <Link href={`/athlete/${result.id}`}>
        <Image
          src={result.image}
          width={500}
          height={300}
          className="rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md dark:text-black">
            {result.country}
          </p>
          <h2 className="text-lg font-bold truncate  dark:text-black">
            {result.name}
          </h2>
          <p className="flex items-center  dark:text-black">
            {result.sports}
            <FaMedal className="h-5 mr-1 ml-3" />
            {result.gold_medals + result.silver_medals + result.bronze_medals}
          </p>
        </div>
      </Link>
    </div>
  );
}
