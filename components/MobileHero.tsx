import Image from "next/image";

export default function MobileHero() {
  return (
    <div className="block lg:hidden relative w-full h-[700px]">

      {/* IT Support */}
      <div
        className="absolute left-[8%] top-[8%]"
        style={{ animation: "float1 8s ease-in-out infinite" }}
      >
        <Image
          src="/icons/it-support.png"
          alt="IT Support"
          width={150}
          height={150}
          className="drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]"
        />
      </div>

      {/* Hosting */}
      <div
        className="absolute right-[8%] top-[8%]"
        style={{ animation: "float2 10s ease-in-out infinite" }}
      >
        <Image
          src="/icons/hosting.png"
          alt="Hosting"
          width={150}
          height={150}
          className="drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
        />
      </div>

      {/* Networking */}
      <div
        className="absolute left-[5%] top-[32%]"
        style={{ animation: "float3 9s ease-in-out infinite" }}
      >
        <Image
          src="/icons/networking.png"
          alt="Networking"
          width={150}
          height={150}
          className="drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]"
        />
      </div>

      {/* Web Development */}
      <div
        className="absolute right-[5%] top-[32%]"
        style={{ animation: "float4 11s ease-in-out infinite" }}
      >
        <Image
          src="/icons/web-development.png"
          alt="Web Development"
          width={150}
          height={150}
          className="drop-shadow-[0_0_25px_rgba(96,165,250,0.8)]"
        />
      </div>

      {/* Contact Us - Center */}
      <a
        href="/contact"
        className="absolute left-1/2 top-[50%] -translate-x-1/2"
        style={{ animation: "float7 9s ease-in-out infinite" }}
      >
        <Image
          src="/icons/contact-box.png"
          alt="Contact Us"
          width={140}
          height={140}
          className="drop-shadow-[0_0_35px_rgba(168,85,247,0.9)]"
        />
      </a>

      {/* Cloud */}
      <div
        className="absolute left-[8%] top-[62%]"
        style={{ animation: "float5 12s ease-in-out infinite" }}
      >
        <Image
          src="/icons/cloud-based-solutions.png"
          alt="Cloud"
          width={150}
          height={150}
          className="drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]"
        />
      </div>

      {/* Hardware */}
      <div
        className="absolute right-[8%] top-[62%]"
        style={{ animation: "float6 10s ease-in-out infinite" }}
      >
        <Image
          src="/icons/hardware-solutions.png"
          alt="Hardware"
          width={150}
          height={150}
          className="drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
        />
      </div>

    </div>
  );
}