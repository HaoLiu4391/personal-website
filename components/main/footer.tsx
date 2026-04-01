import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px] mt-10">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-8 mb-8">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[150px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px] mb-4">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[8px] hover:text-amber-400 transition-colors"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="text-[14px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Visitor Counter */}
        <div className="mb-4">
          <img
            src="https://visitor-badge.laobi.icu/badge?page_id=haoliu4391.personal-website"
            alt="visitor count"
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="mb-[20px] text-[14px] text-center text-gray-500">
          &copy; Hao Liu {new Date().getFullYear()}. Built with Next.js &
          Framer Motion.
        </div>
      </div>
    </div>
  );
};
