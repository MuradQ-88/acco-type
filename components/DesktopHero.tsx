import Image from "next/image";

export default function DesktopHero() {
  return (
    <div className="hidden lg:block">

      <div className="relative h-[850px] w-[1300px]">

        {/* IT Support */}
        <div
          className="group absolute left-[120px] top-[120px]"
          style={{ animation: "float1 8s ease-in-out infinite" }}
        >
          <Image
  src="/icons/it-support.png"
  alt="IT Support"
  width={280}
  height={280}
  className="transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_35px_rgba(34,211,238,0.8)]"
/>

<div
  className="
    absolute
    left-1/2
    top-[260px]
    -translate-x-1/2
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-300
    text-cyan-300
    font-bold
    text-xl
    whitespace-nowrap
  "
>
  IT Support
</div>
        </div>

        {/* Hosting */}
        <div
          className="group absolute left-[500px] top-[90px]"
          style={{ animation: "float2 10s ease-in-out infinite" }}
        >
          <Image
            src="/icons/hosting.png"
            alt="Hosting"
            width={280}
            height={280}
            className="transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]"
          />
          <div
            className="
              absolute
              left-1/2
              top-[260px]
              -translate-x-1/2
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
              text-cyan-300
              font-bold
              text-xl
              whitespace-nowrap
            "
          >
            Hosting
          </div>
        </div>

        {/* Networking */}
        <div
          className="group absolute left-[40px] top-[340px]"
          style={{ animation: "float3 9s ease-in-out infinite" }}
        >
          <Image
            src="/icons/networking.png"
            alt="Networking"
            width={280}
            height={280}
            className="transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_35px_rgba(34,211,238,0.8)]"
          />
          <div
  className="
    absolute
    left-1/2
    top-[260px]
    -translate-x-1/2
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-300
    text-cyan-300
    font-bold
    text-xl
    whitespace-nowrap
  "
>
  Networking
</div>
        </div>

        {/* Web Development */}
        <div
          className="group absolute left-[500px] top-[340px]"
          style={{ animation: "float4 11s ease-in-out infinite" }}
        >
          <Image
            src="/icons/web-development.png"
            alt="Web Development"
            width={280}
            height={280}
            className="transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_35px_rgba(96,165,250,0.8)]"
          />
          <div
  className="
    absolute
    left-1/2
    top-[260px]
    -translate-x-1/2
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-300
    text-cyan-300
    font-bold
    text-xl
    whitespace-nowrap
  "
>
  Web Development
</div>
        </div>

        {/* Cloud Solutions */}
        <div
          className="group absolute left-[130px] top-[550px]"
          style={{ animation: "float5 12s ease-in-out infinite" }}
        >
          <Image
            src="/icons/cloud-based-solutions.png"
            alt="Cloud Solutions"
            width={280}
            height={280}
            className="transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_35px_rgba(34,211,238,0.8)]"
          />
          <div
  className="
    absolute
    left-1/2
    top-[260px]
    -translate-x-1/2
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-300
    text-cyan-300
    font-bold
    text-xl
    whitespace-nowrap
  "
>
  Cloud Solutions
</div>
        </div>

        {/* Hardware Solutions */}
        <div
          className="group absolute left-[520px] top-[550px]"
          style={{ animation: "float6 10s ease-in-out infinite" }}
        >
          <Image
            src="/icons/hardware-solutions.png"
            alt="Hardware Solutions"
            width={280}
            height={280}
            className="transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]"
          />
          <div
  className="
    absolute
    left-1/2
    top-[260px]
    -translate-x-1/2
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-300
    text-cyan-300
    font-bold
    text-xl
    whitespace-nowrap
  "
>
  Hardware Solutions
</div>
        </div>

 {/* Contact Us */}
<a
  href="/contact"
  className="
    group
    absolute
    left-[950px]
    top-[520px]
  "
  style={{ animation: "float7 9s ease-in-out infinite" }}
>
  <Image
    src="/icons/contact-box.png"
    alt="Contact Us"
    width={220}
    height={220}
    className="
      transition-all
      duration-300
      group-hover:scale-110
      drop-shadow-[0_0_45px_rgba(168,85,247,0.9)]
    "
  />
  <div
  className="
    absolute
    left-1/2
    top-[210px]
    -translate-x-1/2
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-300
    text-cyan-300
    font-bold
    text-xl
    whitespace-nowrap
  "
>
  Contact Us
</div>
</a>

      </div>

    </div>
  );
}
