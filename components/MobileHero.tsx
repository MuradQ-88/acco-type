import Image from "next/image";

export default function MobileHero() {
  return (
    <div className="block lg:hidden">
      <div className="relative mx-auto h-[70px] w-full max-w-[430px]">

        {/* الصف الأول */}

        <div className="absolute left-[8%] top-[95px]">
          <Image
            src="/icons/it-support.png"
            alt="IT Support"
            width={110}
            height={110}
          />
        </div>

        <div className="absolute left-1/2 top-[95px] -translate-x-1/2">
          <Image
            src="/icons/hosting.png"
            alt="Hosting"
            width={110}
            height={110}
          />
        </div>

        <div className="absolute right-[8%] top-[95px]">
          <Image
            src="/icons/networking.png"
            alt="Networking"
            width={110}
            height={110}
          />
        </div>

        {/* الصف الثاني */}

        <div className="absolute left-[8%] top-[220px]">
          <Image
            src="/icons/web-development.png"
            alt="Web Development"
            width={110}
            height={110}
          />
        </div>

        <div className="absolute left-1/2 top-[220px] -translate-x-1/2">
          <Image
            src="/icons/cloud-based-solutions.png"
            alt="Cloud Solutions"
            width={110}
            height={110}
          />
        </div>

        <div className="absolute right-[8%] top-[220px]">
          <Image
            src="/icons/hardware-solutions.png"
            alt="Hardware Solutions"
            width={110}
            height={110}
          />
        </div>

        {/* Contact */}

        <div className="absolute left-1/2 top-[360px] -translate-x-1/2">
          <Image
            src="/icons/contact-box.png"
            alt="Contact"
            width={80}
            height={80}
          />
        </div>

      </div>
    </div>
  );
}