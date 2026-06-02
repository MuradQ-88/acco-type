import Image from "next/image";

export default function MobileHero() {
  return (
    <div className="block lg:hidden w-full mt-10">

      {/* Row 1 */}
      <div className="flex justify-around items-center mb-8">

        <Image
          src="/icons/it-support.png"
          alt="IT Support"
          width={82}
          height={82}
        />

        <Image
          src="/icons/hosting.png"
          alt="Hosting"
          width={82}
          height={82}
        />

        <Image
          src="/icons/networking.png"
          alt="Networking"
          width={82}
          height={82}
        />

      </div>

      {/* Row 2 */}
      <div className="flex justify-around items-center mb-8">

        <Image
          src="/icons/web-development.png"
          alt="Web Development"
          width={82}
          height={82}
        />

        <Image
          src="/icons/cloud-based-solutions.png"
          alt="Cloud Solutions"
          width={82}
          height={82}
        />

        <Image
          src="/icons/hardware-solutions.png"
          alt="Hardware Solutions"
          width={82}
          height={82}
        />

      </div>

      {/* Contact */}
      <div className="flex justify-center">

        <Image
          src="/icons/contact-box.png"
          alt="Contact"
          width={50}
          height={50}
        />

      </div>

    </div>
  );
}