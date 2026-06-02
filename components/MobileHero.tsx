import Image from "next/image";

export default function MobileHero() {
  return (
    <div className="block lg:hidden">
      <div className="relative mx-auto h-[260px] w-full max-w-[430px]">

        {/* الصف الأول */}

        <div className="absolute left-[8%] top-[20px]">
          <Image
            src="/icons/it-support.png"
            alt="IT Support"
            width={90}
            height={90}
          />
        </div>

        <div className="absolute left-1/2 top-[20px] -translate-x-1/2">
          <Image
            src="/icons/hosting.png"
            alt="Hosting"
            width={90}
            height={90}
          />
        </div>

        <div className="absolute right-[8%] top-[20px]">
          <Image
            src="/icons/networking.png"
            alt="Networking"
            width={90}
            height={90}
          />
        </div>

        {/* الصف الثاني */}

        <div className="absolute left-[8%] top-[115px]">
          <Image
            src="/icons/web-development.png"
            alt="Web Development"
            width={90}
            height={90}
          />
        </div>

        <div className="absolute left-1/2 top-[115px] -translate-x-1/2">
          <Image
            src="/icons/cloud-based-solutions.png"
            alt="Cloud Solutions"
            width={90}
            height={90}
          />
        </div>

        <div className="absolute right-[8%] top-[115px]">
          <Image
            src="/icons/hardware-solutions.png"
            alt="Hardware Solutions"
            width={90}
            height={90}
          />
        </div>

        {/* Contact */}

        <div className="absolute left-1/2 top-[215px] -translate-x-1/2">
          <Image
            src="/icons/contact-box.png"
            alt="Contact"
            width={58}
            height={58}
          />
        </div>

      </div>
    </div>
  );
}