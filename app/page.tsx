"use client";

import DarkVeil from "@/components/DarkVeil";
import DecryptedText from "@/components/DecryptedText";
import LogoLoop from "@/components/LogoLoop";
import NavBar from "@/components/NavBar";
import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Background = () => {
  return (
    <div className="h-[120vh] max-md:w-[101vw] md:h-screen fixed inset-0 -z-10">
      <DarkVeil speed={1.7} hueShift={28} />
    </div>
  );
};

const imageLogos = [
  {
    src: "tkmit_logo.png",
    alt: "TKM Institute of Technology",
    href: "https://tkmit.ac.in/",
  },
  { src: "ieee_logo.png", alt: "IEEE", href: "https://ieee.org/" },
  {
    src: "ieee_sb_tkmit_logo.png",
    alt: "IEEE SB TKMIT",
    href: "https://tkmit.ac.in/activities/ieee/",
  },
  { src: "ieee_cs_logo.png", alt: "IEEE SB TKMIT CS Society" },
  { src: "ieee_embs_logo.png", alt: "IEEE SB TKMIT EMBS" },
];

export default function Home() {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDetails(true), 2_500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Background />

      <main className="text-white">
        {/* Landing */}
        <section className="relative max-md:h-dvh h-screen flex flex-col">
          <NavBar />

          <div
            className="flex flex-col grow justify-center items-center text-center
              md:w-[80%] md:mx-auto"
          >
            <TextType
              text={[" BIOCOM '26"]}
              initialDelay={500}
              typingSpeed={120}
              showCursor={true}
              cursorBlinkDuration={0.6}
              cursorCharacter="●"
              className="text-6xl md:text-8xl"
            />

            <div
              className={`mt-5 flex gap-2 lg:gap-4 transition-opacity duration-600
                  ${showDetails ? "opacity-100" : "opacity-0"}`}
            >
              <Link href="#learn-more">
                <Button
                  variant="outline"
                  className="bg-transparent rounded-full lg:text-lg lg:px-5 lg:py-5"
                >
                  LEARN MORE
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  variant="outline"
                  className="bg-transparent rounded-full lg:text-lg lg:px-5 lg:py-5"
                >
                  REGISTER NOW
                </Button>
              </Link>
            </div>
          </div>

          <div className="justify-end w-[80%] mx-auto pb-6">
            <div className="grid grid-cols-2 md:flex md:justify-between md:text-xl">
              <h2>February 26 & 27</h2>
              <h2 className="max-md:text-right">TKM Institute of Technology</h2>
            </div>
          </div>
        </section>

        {/* Learn more */}
        <section
          id="learn-more"
          className="flex flex-col justify-center md:w-[80%] md:mx-auto"
        >
          <div
            className="h-screen flex flex-col justify-center text-center
              text-4xl md:text-5xl lg:text-6xl"
          >
            <DecryptedText
              text="Bridging healthcare and"
              animateOn="view"
              speed={90}
              sequential
              useOriginalCharsOnly
            />
            <DecryptedText
              text="computation for a smarter future."
              animateOn="view"
              speed={70}
              sequential
              useOriginalCharsOnly
            />
          </div>

          {/* Events */}
          <h2 className="text-center md:mb-15 font-medium text-4xl lg:text-6xl">
            Events
          </h2>
          <div className="min-h-screen flex flex-col md:gap-15 justify-center">
            <div
              className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2
                md:gap-7 md:text-right"
            >
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  Biomedical Signal <br /> &amp; Image Processing
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Explore advanced techniques for acquiring, analyzing, and
                  interpreting biomedical signals and images to aid in
                  diagnosis, monitoring, and research. It delves into modern
                  computational methods, AI-driven analysis, and real-world
                  healthcare applications that bridge engineering innovation
                  with medical insight.
                </p>
              </div>
              <Image
                src="/biomedical_signal_image_processing.png"
                alt="Biomedical signal and image processing poster"
                width={500}
                height={500}
                className="rounded-2xl max-md:row-start-1 max-md:scale-85"
              />
            </div>

            <div className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2 md:gap-7">
              <Image
                src="/bioinformatics_data_analysis.png"
                alt="Bioinformatics and data analysis poster"
                width={500}
                height={500}
                className="rounded-2xl md:ml-auto max-md:row-start-1 max-md:scale-85"
              />
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  Bioinformatics <br /> &amp; Data Analysis
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Computational approaches to understanding biological data,
                  integrating concepts from computer science, statistics, and
                  molecular biology. It highlights innovations in genome
                  analysis, pattern recognition, and big data analytics that
                  drive modern biomedical research and personalized medicine.
                </p>
              </div>
            </div>

            <div
              className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2
                md:gap-7 md:text-right"
            >
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  Internet of <br /> Medical Things
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Examine the integration of smart devices, sensors, and
                  networks in modern healthcare. It explores how connected
                  medical technologies enable real-time monitoring, data-driven
                  decision-making, and improved patient outcomes through
                  seamless communication between devices, systems, and
                  healthcare providers.
                </p>
              </div>
              <Image
                src="/internet_of_medical_things.png"
                alt="Internet of medical things poster"
                width={500}
                height={500}
                className="rounded-2xl max-md:row-start-1 max-md:scale-85"
              />
            </div>

            <div className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2 md:gap-7">
              <Image
                src="/ai_in_healthcare.png"
                alt="AI in healthcare poster"
                width={500}
                height={500}
                className="rounded-2xl md:ml-auto max-md:row-start-1 max-md:scale-85"
              />
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  AI in Healthcare
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Dive into the transformative role of artificial intelligence
                  in modern medicine. It explores how machine learning, deep
                  learning, and predictive analytics are revolutionizing
                  diagnostics, treatment planning, and patient care — driving
                  efficiency, accuracy, and innovation across the healthcare
                  ecosystem.
                </p>
              </div>
            </div>

            <div
              className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2
                md:gap-7 md:text-right"
            >
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  Interdisciplinary <br /> Biomedical <br /> Innovations
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Highlighting the convergence of engineering, computing, life
                  sciences, and medicine to drive next-generation healthcare
                  solutions. It showcases collaborative approaches that
                  translate cross-disciplinary research into impactful
                  biomedical technologies, fostering innovation at the
                  intersection of multiple scientific domains.
                </p>
              </div>
              <Image
                src="/interdisciplinary-bm-innovations.png"
                alt="Internet of medical things poster"
                width={500}
                height={500}
                className="rounded-2xl max-md:row-start-1 max-md:scale-85"
              />
            </div>

            <div className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2 md:gap-7">
              <Image
                src="/ai-ml-in-healthcare.png"
                alt="AI in healthcare poster"
                width={500}
                height={500}
                className="rounded-2xl md:ml-auto max-md:row-start-1 max-md:scale-85"
              />
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  AI & ML in <br /> Healthcare
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Exploring the application of artificial intelligence and
                  machine learning in transforming healthcare delivery. It
                  covers intelligent systems for diagnostics, clinical decision
                  support, medical imaging, and predictive analytics,
                  highlighting how data-driven models are enhancing accuracy,
                  efficiency, and personalized patient care.
                </p>
              </div>
            </div>

            <div
              className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2
                md:gap-7 md:text-right"
            >
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  Data Science &amp; <br /> Health Analytics
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Focusing on leveraging data-driven methodologies to extract
                  meaningful insights from healthcare data. It explores
                  statistical analysis, predictive modeling, and visualization
                  techniques that support evidence-based decision-making,
                  improve population health outcomes, and optimize healthcare
                  systems.
                </p>
              </div>
              <Image
                src="/data-science-health-analytics.png"
                alt="Internet of medical things poster"
                width={500}
                height={500}
                className="rounded-2xl max-md:row-start-1 max-md:scale-85"
              />
            </div>

            <div className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2 md:gap-7">
              <Image
                src="/iomt-smart-healthcare-systems.png"
                alt="AI in healthcare poster"
                width={500}
                height={500}
                className="rounded-2xl md:ml-auto max-md:row-start-1 max-md:scale-85"
              />
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  IoMT &amp; Smart Healthcare Systems
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Exploring the design and deployment of intelligent, connected
                  healthcare infrastructures powered by the Internet of Medical
                  Things. It highlights how smart sensors, secure networks, and
                  real-time data integration enable efficient clinical
                  workflows, remote patient monitoring, and resilient,
                  technology-driven healthcare systems.
                </p>
              </div>
            </div>

            <div
              className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2
                md:gap-7 md:text-right"
            >
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  Human-Computer Interaction (HCI) &amp; Assistive Technologies
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Focusing on designing intuitive, accessible, and user-centered
                  technologies that enhance human interaction with digital
                  systems. It explores assistive solutions, adaptive interfaces,
                  and inclusive design approaches that empower individuals with
                  diverse abilities and improve quality of life through
                  technology.
                </p>
              </div>
              <Image
                src="/hci-assistive-technologies.png"
                alt="Internet of medical things poster"
                width={500}
                height={500}
                className="rounded-2xl max-md:row-start-1 max-md:scale-85"
              />
            </div>

            <div className="grid max-md:grid-rows-[auto_auto] md:grid-cols-2 md:gap-7">
              <Image
                src="/ethical-ai.png"
                alt="AI in healthcare poster"
                width={500}
                height={500}
                className="rounded-2xl md:ml-auto max-md:row-start-1 max-md:scale-85"
              />
              <div>
                <h3
                  className="text-4xl lg:text-5xl max-md:text-center
                    font-medium mb-5"
                >
                  Ethical Al, Responsible Computing & Healthcare Informatics
                </h3>
                <p className="max-md:hidden lg:text-lg">
                  Addressing the critical ethical, social, and governance
                  challenges arising from the use of advanced computing in
                  healthcare. It explores responsible AI design, data privacy,
                  fairness, transparency, and regulatory considerations,
                  emphasizing the development of trustworthy, human-centered
                  technologies for sustainable and ethical healthcare
                  innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Date and time info */}
          <div className="h-screen flex flex-col justify-center text-center">
            <div className="grow" />

            <TextType
              text={["February 26 & 27", "at TKM Institute of Technology"]}
              startOnVisible
              initialDelay={500}
              typingSpeed={50}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="●"
              cursorBlinkDuration={0.6}
              className="text-4xl md:text-6xl w-[90%] mx-auto"
            />

            <div className="grow" />
          </div>

          {/* "Register" call to action */}
          <div className="h-screen flex flex-col">
            <div className="grow" />

            <div className="flex flex-col items-center gap-5">
              <h2 className="text-center text-4xl lg:text-6xl">
                Reserve Your Place
              </h2>
              <Link href="/register">
                <Button
                  variant="outline"
                  className="bg-transparent rounded-full lg:text-xl lg:px-5 lg:py-5"
                >
                  REGISTER NOW {"->"}
                </Button>
              </Link>
            </div>

            <div className="grow" />

            <div className="mb-7">
              <h3 className="mb-5 font-bold text-xl md:text-2xl text-center">
                In Association With
              </h3>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  overflow: "hidden",
                }}
              >
                <LogoLoop
                  logos={imageLogos}
                  speed={120}
                  direction="left"
                  logoHeight={70}
                  gap={40}
                  pauseOnHover
                  fadeOut
                  fadeOutColor="#000"
                  ariaLabel="Organizers"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
