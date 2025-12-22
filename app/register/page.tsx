"use client";

import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { Background } from "../page";

const RegisterPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("https://forms.gle/afcDbYxWkpdh6p299");
  }, 3000);

  return (
    <>
      <Background />

      <main className="text-white">
        <div className="h-dvh grid grid-rows-3 text-center">
          <div className="flex justify-center">
            <NavBar className="fixed top-0" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-5 font-medium text-4xl lg:text-5xl">
              Registration
            </h1>
            <p className="md:text-xl">
              You will be redirected to a Google Form...
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
