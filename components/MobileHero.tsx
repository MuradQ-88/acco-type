import Image from "next/image";

export default function MobileHero() {
  return (
    <div className="block lg:hidden relative w-full">

      {/* Background Logo */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">

        <Image
          src="/logo-new.png"
          alt="Background Logo"
          width={950}
          height={950}
          className="
            opacity-15
            object-contain
            mt-20
            scale-125
          "
        />

      </div>

      {/* Services */}
      <div className="relative z-20 pt-16 px-4">

        {/* Row 1 */}
        <div className="grid grid-cols-3 gap-4 text-center">

          <ServiceIcon
            icon="/icons/it-support.png"
            title="IT SUPPORT"
          />

          <ServiceIcon
            icon="/icons/hosting.png"
            title="HOSTING"
          />

          <ServiceIcon
            icon="/icons/networking.png"
            title="NETWORKING"
          />

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-4 mt-10 text-center">

          <ServiceIcon
            icon="/icons/web-development.png"
            title="WEB DEVELOPMENT"
          />

          <ServiceIcon
            icon="/icons/cloud-based-solutions.png"
            title="CLOUD SOLUTIONS"
          />

          <ServiceIcon
            icon="/icons/hardware-solutions.png"
            title="HARDWARE"
          />

        </div>

        {/* Contact */}
        <div className="flex justify-center mt-12">

          <a href="/contact">

            <div className="flex flex-col items-center">

              <Image
                src="/icons/contact-box.png"
                alt="Contact Us"
                width={70}
                height={70}
                className="
                  drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]
                "
              />

              <span
                className="
                  mt-2
                  text-sm
                  font-bold
                  text-white
                "
              >
                CONTACT US
              </span>

            </div>

          </a>

        </div>

      </div>

    </div>
  );
}

function ServiceIcon({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center">

      <Image
        src={icon}
        alt={title}
        width={110}
        height={110}
        className="
          drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]
        "
      />

      <span
        className="
          mt-2
          text-[11px]
          font-bold
          text-white
          leading-tight
        "
      >
        {title}
      </span>

    </div>
  );
}