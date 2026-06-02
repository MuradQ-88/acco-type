import Image from "next/image";

export default function MobileHero() {
  return (
    <div className="block lg:hidden">

      <div className="relative mx-auto h-[520px] w-full max-w-[430px]">

        {/* Row 1 */}

        <div className="absolute left-[10%] top-[170px]">
          <Image
            src="/icons/it-support.png"
            alt="IT Support"
            width={78}
            height={78}
          />
        </div>

        <div className="absolute left-1/2 top-[170px] -translate-x-1/2">
          <Image
            src="/icons/hosting.png"
            alt="Hosting"
            width={78}
            height={78}
          />
        </div>

        <div className="absolute right-[10%] top-[170px]">
          <Image
            src="/icons/networking.png"
            alt="Networking"
            width={78}
            height={78}
          />
        </div>

        {/* Row 2 */}

        <div className="absolute left-[10%] top-[290px]">
          <Image
            src="/icons/web-development.png"
            alt="Web Development"
            width={78}
            height={78}
          />
        </div>

        <div className="absolute left-1/2 top-[290px] -translate-x-1/2">
          <Image
            src="/icons/cloud-based-solutions.png"
            alt="Cloud Solutions"
            width={78}
            height={78}
          />
        </div>

        <div className="absolute right-[10%] top-[290px]">
          <Image
            src="/icons/hardware-solutions.png"
            alt="Hardware Solutions"
            width={78}
            height={78}
          />
        </div>

        {/* Contact */}

        <div className="absolute left-1/2 top-[415px] -translate-x-1/2">
          <Image
            src="/icons/contact-box.png"
            alt="Contact"
            width={52}
            height={52}
          />
        </div>

      </div>

    </div>
  );
}