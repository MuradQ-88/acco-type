import DesktopHero from "@/components/DesktopHero";
import MobileHero from "@/components/MobileHero";
import Image from "next/image";

export default function Home() {
return ( <main className="relative min-h-screen overflow-hidden bg-black text-white">

  {/* Background */}
  <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-black" />

  {/* Grid */}
  <div className="absolute inset-0 opacity-20">
    <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
  </div>
{/* Background Logo */}

<div className="pointer-events-none absolute inset-0 overflow-hidden">

  <div
    className="
      absolute
      left-1/2
      top-1/2
      h-[1400px]
      w-[1400px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-cyan-500/10
      blur-[180px]
    "
  />

  <Image
    src="/logo-new.png"
    alt="Background Logo"
    width={1000}
    height={1000}
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      opacity-[1.22]
      blur-lg
      scale-[1.6]
      object-contain
      select-none
    "
  />

</div>

  {/* Ambient Glow */}
  <div className="absolute left-[-200px] top-[-150px] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-3xl" />
  <div className="absolute right-[-200px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-3xl" />

  {/* Logo */}
  <div className="
absolute
left-4
top-4
z-30
flex
items-center
gap-2
md:left-10
md:top-8
md:gap-4
">

    <Image
      src="/logo-new.png"
      alt="Acco-Type"
      width={70}
      height={70}
      className="object-contain"
    />

    <div>
      <h2 className="
text-xl
font-black
tracking-[0.15em]
sm:text-2xl
md:text-4xl
">
        ACCO-TYPE
      </h2>

      <p className="
text-[10px]
tracking-[0.25em]
text-cyan-400
sm:text-xs
md:text-sm
">
        ENTERPRISE TECHNOLOGIES
      </p>
    </div>

  </div>

  <div
className="
relative
z-10
mx-auto
flex
min-h-screen
max-w-[1800px]
flex-col
px-6
pt-8
lg:flex-row
lg:items-center
lg:justify-between
lg:px-20
"
>

   {/* Left Side Orbs */}

<div className="relative hidden lg:block h-[850px] w-[850px]">
<DesktopHero />

</div>

{/* Right Content */}

<div
  className="
  mx-auto
  max-w-xl
  text-center
  lg:ml-auto
  lg:text-right
  "
>

  {/* Desktop Subtitle */}
  <p className="hidden lg:block mb-4 text-sm tracking-[0.5em] text-cyan-400">
    ACCO-TYPE TECHNOLOGIES
  </p>

  {/* Title */}
  <h1 className="mt-12 leading-[0.9] font-black">

    <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
      FUTURE
    </span>

    <span
      className="
      block
      bg-gradient-to-r
      from-cyan-400
      via-sky-300
      to-white
      bg-clip-text
      text-4xl
      text-transparent
      sm:text-5xl
      md:text-6xl
      xl:text-7xl
      "
    >
      TECHNOLOGY
    </span>

  </h1>

  {/* Description */}
  <p
    className="
    mt-6
    mx-auto
    max-w-xl
    text-sm
    leading-7
    text-gray-300
    sm:text-base
    md:text-lg
    md:leading-8
    lg:ml-auto
    "
  >
    Enterprise-grade IT infrastructure, hosting, networking
    and digital solutions designed to power modern business
    operations across South Africa.
  </p>

  {/* Mobile Icons تحت الوصف */}
  <div className="lg:hidden mt-10 mb-8">
    <MobileHero />
  </div>

  {/* Button */}
  <div
    className="
    mt-8
    flex
    justify-center
    lg:justify-end
    "
  >
    <button className="rounded-2xl border border-white/30 px-8 py-4 font-bold transition hover:bg-white/10">
      Explore Solutions
    </button>
  </div>

</div>



  </div>

</main>
  );
}