import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import BookImage from "@/public/images/book-img.png";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            {/* <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div> */}

            <div
              className="relative f-b-zar -mt-40 h-60 w-full"
              aria-hidden="true"
            >
              <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['سکون'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['سکون'] after:[text-shadow:0_1px_0_white]"></div>
              {/* Glow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
                aria-hidden="true"
              >
                <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
              </div>
            </div>

            <h1
              className="mb-6 f-b-zar border-y text-6xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              سکون ښار
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 f-b-zar text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
                dir="rtl"
              >
                سکون ښار یو خیالي او ارماني ښار دی چې نوم یې د دې ځانګړتیاوې په
                ډاګه کوي. "سکون" ارامتیا، هوساینه او خوشحالي ته اشاره کوي، او
                "ښار" معنی ښار یا یو ځای دی. دا ښيي چې سکون ښار یو داسې ځای دی
                چېرته چې ارامي، هوساینه او د ژوند په هر اړخ کې خوښي واکمنه وي.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative f-b-zar inline-flex items-center">
                      همدا اوس يی واخلۍ{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white f-b-zar text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    نور معلومات
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex justify-center items-center">
            <Image
              className="box-content rounded-full border-2 border-gray-50"
              src={"/images/book-img.svg"}
              width={600}
              height={32}
              alt="Book Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
