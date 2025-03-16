import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blog } from "@/components/definitions";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="banner">
        <video width="100%" className="h-[50vh] md:h-full" src="/HomeBanner.mp4" controls={false} autoPlay></video>
      </div>

      <section id="cta" className="flex mx-10 md:px-0 md:gap-0 gap-16 md:flex-row flex-col items-center my-16 justify-around">
        <div className="left md:max-w-1/3 flex flex-col gap-10">
          <h2 className="font-extrabold text-3xl">A CUT ABOVE THE REST</h2>
          <p>
            At Pure Finest Inc., caring for life is at the core of everything we
            do. We believe in creating food and drinks that nourish the Body,
            Mind, and spirit and inspire a healthier, more sustainable future.
            By refusing to cut corners, we ensure that every product is crafted
            with the finest premium ingredients, upholding our commitment to
            quality and well-being. From our sourcing practices to the final
            product, we prioritize excellence to deliver brands that truly make
            a difference in every sip and bite.
          </p>
        </div>
        <div className="right">
          <Image src="/cta.jpg" width={500} height={259} alt="Click-To-Action" className="rounded-2xl h-[350px]" />
        </div>
      </section>

      <section id="blog" className="md:ml-[87px] space-y-8">
        <h2 className="font-extrabold text-3xl pl-8 md:pl-0">News & Press Release</h2>
        <div className="grid space-y-10 place-items-center grid-cols-1 md:grid-cols-3">
          {blog.map((blog, index) => (
            <div key={index} className="max-w-[320px] rounded-2xl bg-white shadow-2xl min-h-[430px]">
              <div className="image relative">
                <Image src={blog.image} width={500} height={259} alt="Blog Image" className="rounded-t-2xl h-[250px]" />
                <Image src={blog.banner} className={`absolute shadow-2xl bottom-10 py-3 pr-4 pl-6 ${index == 3 ? 'bg-black' : 'bg-white'} rounded-r-lg`} width={150} height={100} alt="Blog Banner" />
              </div>
              <div className="text px-3 pt-6 flex flex-col gap-10 rounded-b-2xl bg-[#F9F8F6]">
                <p className="font-bold text-lg"> {blog.title} </p>
                <div className="flex justify-between items-center">
                  <Link className="flex font-bold items-center gap-2 border-b-2 px-2 border-b-black w-fit" href={"/"}> Read More <span className="font-black text-2xl">&#x2192;</span> </Link>
                  <p className="font-bold"> {blog.date} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
