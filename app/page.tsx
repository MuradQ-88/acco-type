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
justify-center
px-6
pt-32
lg:flex-row
lg:items-center
lg:justify-between
lg:px-20
"
>

   {/* Left Side Orbs */}

<div className="relative h-[450px] w-full md:h-[650px] lg:h-[850px] lg:w-[850px]">

{/* IT Support */}

<div
  className="
    group
    absolute
    left-[10%]
    top-[15%]

    md:left-[120px]
    md:top-[120px]
  "
  style={{ animation: "float1 8s ease-in-out infinite" }}
>
  <Image
    src="/icons/it-support.png"
    alt="IT Support"
    width={180}
    height={180}
    className="
      w-[120px]
      sm:w-[160px]
      md:w-[200px]
      lg:w-[280px]
      h-auto
      transition-all
      duration-300
      group-hover:scale-110
      drop-shadow-[0_0_35px_rgba(34,211,238,0.8)]
    "
  />

  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      rounded-xl
      bg-black/75
      backdrop-blur-md
      px-4
      py-2
      text-sm
      font-semibold
      text-white
      opacity-0
      scale-90
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:scale-100
      pointer-events-none
    "
  >
    IT Support
  </div>
</div>

{/* Hosting */}

<div
  className="
    group
    absolute
    left-[60%]
    top-[10%]

    md:left-[500px]
    md:top-[90px]
  "
  style={{ animation: "float2 10s ease-in-out infinite" }}
>
  <Image
    src="/icons/hosting.png"
    alt="Hosting"
    width={180}
    height={180}
    className="
      w-[120px]
      sm:w-[160px]
      md:w-[200px]
      lg:w-[280px]
      h-auto
      transition-all
      duration-300
      group-hover:scale-110
      drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]
    "
  />

  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      rounded-xl
      bg-black/75
      backdrop-blur-md
      px-4
      py-2
      text-sm
      font-semibold
      text-white
      opacity-0
      scale-90
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:scale-100
      pointer-events-none
    "
  >
    Hosting
  </div>
</div>

{/* Networking */}

<div
  className="
    group
    absolute
    left-[5%]
    top-[40%]

    md:left-[40px]
    md:top-[340px]
  "
  style={{ animation: "float3 9s ease-in-out infinite" }}
>
  <Image
    src="/icons/networking.png"
    alt="Networking"
    width={180}
    height={180}
    className="
      w-[120px]
      sm:w-[160px]
      md:w-[200px]
      lg:w-[280px]
      h-auto
      transition-all
      duration-300
      group-hover:scale-110
      drop-shadow-[0_0_35px_rgba(34,211,238,0.8)]
    "
  />

  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      rounded-xl
      bg-black/75
      backdrop-blur-md
      px-4
      py-2
      text-sm
      font-semibold
      text-white
      opacity-0
      scale-90
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:scale-100
      pointer-events-none
    "
  >
    Networking
  </div>
</div>

{/* Web Development */}

<div
  className="
    group
    absolute
    left-[60%]
    top-[40%]

    md:left-[500px]
    md:top-[340px]
  "
  style={{ animation: "float4 11s ease-in-out infinite" }}
>
  <Image
    src="/icons/web-development.png"
    alt="Web Development"
    width={180}
    height={180}
    className="
      w-[120px]
      sm:w-[160px]
      md:w-[200px]
      lg:w-[280px]
      h-auto
      transition-all
      duration-300
      group-hover:scale-110
      drop-shadow-[0_0_35px_rgba(96,165,250,0.8)]
    "
  />

  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      rounded-xl
      bg-black/75
      backdrop-blur-md
      px-4
      py-2
      text-sm
      font-semibold
      text-white
      opacity-0
      scale-90
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:scale-100
      pointer-events-none
    "
  >
    Web Development
  </div>
</div>

{/* Cloud Based Solutions */}

<div
  className="
    group
    absolute
    left-[15%]
    top-[70%]

    md:left-[130px]
    md:top-[620px]
  "
  style={{ animation: "float5 12s ease-in-out infinite" }}
>
  <Image
    src="/icons/cloud-based-solutions.png"
    alt="Cloud Based Solutions"
    width={180}
    height={180}
    className="
      w-[120px]
      sm:w-[160px]
      md:w-[200px]
      lg:w-[280px]
      h-auto
      transition-all
      duration-300
      group-hover:scale-110
      drop-shadow-[0_0_35px_rgba(34,211,238,0.8)]
    "
  />

  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      rounded-xl
      bg-black/75
      backdrop-blur-md
      px-4
      py-2
      text-sm
      font-semibold
      text-white
      opacity-0
      scale-90
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:scale-100
      pointer-events-none
    "
  >
    Cloud Solutions
  </div>
</div>

{/* Hardware Solutions */}

<div
  className="
    group
    absolute
    left-[60%]
    top-[70%]

    md:left-[520px]
    md:top-[620px]
  "
  style={{ animation: "float6 10s ease-in-out infinite" }}
>
  <Image
    src="/icons/hardware-solutions.png"
    alt="Hardware Solutions"
    width={180}
    height={180}
    className="
      w-[120px]
      sm:w-[160px]
      md:w-[200px]
      lg:w-[280px]
      h-auto
      transition-all
      duration-300
      group-hover:scale-110
      drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]
    "
  />

  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      rounded-xl
      bg-black/75
      backdrop-blur-md
      px-4
      py-2
      text-sm
      font-semibold
      text-white
      opacity-0
      scale-90
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:scale-100
      pointer-events-none
    "
  >
    Hardware Solutions
  </div>
  {/* Contact Us Mobile */}

<a
  href="/contact"
  className="
    block
    lg:hidden

    group
    absolute

    left-[60%]
    top-[70%]
  "
  style={{ animation: "float7 9s ease-in-out infinite" }}
>
  <Image
    src="/icons/contact-box.png"
    alt="Contact Us"
    width={180}
    height={180}
    className="
      w-[120px]
      sm:w-[140px]
      h-auto

      transition-all
      duration-300

      drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]
    "
  />
</a>
</div>

</div>

{/* Right Content */}

<div
className="
mx-auto
mt-10
max-w-xl
text-center
lg:ml-auto
lg:mt-0
lg:text-right
"
>
      <p className="mb-4 text-sm tracking-[0.5em] text-cyan-400">
        ACCO-TYPE TECHNOLOGIES
      </p>

      <h1 className="leading-[0.9] font-black">

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

     <div
className="
mt-8
flex
flex-col
gap-4
sm:flex-row
sm:justify-center
lg:justify-end
items-center
"
>

{/* Contact Us Desktop */}

<a
  href="/contact"
  className="
    hidden
    lg:block

    group
    absolute

    right-[420px]
    top-[690px]

    z-20
  "
  style={{ animation: "float7 9s ease-in-out infinite" }}
>
  <Image
    src="/icons/contact-box.png"
    alt="Contact Us"
    width={190}
    height={190}
    className="
      w-[190px]
      h-auto

      transition-all
      duration-300

      group-hover:scale-110

      drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]
    "
  />

  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2

      rounded-xl
      bg-black/75
      backdrop-blur-md

      px-4
      py-2

      text-sm
      font-semibold
      text-white

      opacity-0
      scale-90

      transition-all
      duration-300

      group-hover:opacity-100
      group-hover:scale-100

      pointer-events-none
      whitespace-nowrap
    "
  >
    Contact Us
  </div>
</a>
  <button className="rounded-2xl border border-white/30 px-8 py-4 font-bold transition hover:bg-white/10">
    Explore Solutions
  </button>

</div>

    </div>

  </div>

</main>
  );
}