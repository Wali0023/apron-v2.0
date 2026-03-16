"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menu = [
  { title: "Home", href: "/" },
  { title: "Recipes", href: "/recipes" },
  { title: "Calendar", href: "/calendar" },
];
export default function MainNavigation() {
  const pathname = usePathname();

  const activeStying = "bg-orange-500 text-white font-bold";
  const inactiveStyling = "hover:bg-[#D8CCAF] text-black font-bold";

  const getLinkStyles = (path: string) => {
    const isActive = pathname === path;

    return `flex h-[62px] w-[83px] items-center justify-center  
    ${isActive ? activeStying : inactiveStyling}`;
  };
  return (
    <nav>
      <ul className="w flex justify-around">
        {menu.map((item, index) => (
          <li key={index}>
            <Link className={getLinkStyles(item.href)} href={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
