// components/molecules/SidebarItem.tsx
import Link from "next/link";
import { nav } from "../../interface/type";
import Image from "next/image";
import { usePathname } from 'next/navigation';




export const SidebarItem = ({ icon, label, href, isOpen, setIsOpen }: nav) => {

  const pathName = usePathname();

  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className={`flex items-center gap-[15px] h-full py-3 px-7 ${pathName === href ? "bg-[#0A74DC] rounded-[4px]" : ""}`}
    >
      <Image src={icon} alt={label} width={20} height={20} />
      <span className="text-[16px] leading-[24px] font-semibold font-inter">{label}</span>
    </Link>
  );
};
