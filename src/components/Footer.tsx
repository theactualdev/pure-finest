import Image from "next/image";
import { footerLinks, information, langauges, usefulLinks } from "./definitions";
import Link from "next/link";

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className="bg-[#264D26] text-white mt-12 py-10 px-8 md:px-32">
            <div className="flex md:flex-row flex-col items-start md:items-center pb-10 md:pb-0 justify-between border-b-2 border-b-white">
                <Image src={"/footer.png"} width={300} height={300} alt="Footer Logo" />
                <select name="language" id="language" className="bg-gray-800 w-fit text-white uppercase p-3 rounded-sm">
                    {langauges.map((lang, index) => (
                        <option key={index} value={lang}>
                            { lang }
                        </option>
                    ))}
                </select>
            </div>
            <div className="border-b-white flex md:flex-row flex-col justify-between py-10 px-8 border-b-2">
                <div className="flex gap-16 md:flex-row flex-col">
                    <div className="space-y-3">
                        <p className="font-bold hover:text-green-500 cursor-pointer border-l-3 pl-2 border-l-green-500">Useful Links</p>
                        <ul className="flex flex-col gap-2">
                            {usefulLinks.map((link, index) => (
                               
                               <Link href={link.href} className="hover:text-green-500 capitalize"> <li> { link.name } </li> </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <p className="font-bold hover:text-green-500 cursor-pointer border-l-3 pl-2 border-l-green-500">Information</p>
                        <ul className="flex flex-col gap-2">
                            {information.map((link, index) => (
                               
                               <Link href={link.href} className="hover:text-green-500 capitalize"> <li> { link.name } </li> </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="space-y-3">
                    <h2 className="text-green-500 font-medium">Follow us</h2>
                    <ul className="flex gap-3 items-center">
                        {footerLinks.map((link, index) => (
                            <Link href={link.href} key={index}>
                                <li> <Image src={link.icon} width={30} height={30} alt="Social" /> </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="pt-10 md:px-8 flex justify-end">
                <p>© {year}. The Pure Finest Inc.® Company. All rights reserved.</p>
            </div>
        </div>
    )
}