import DarkVeil from "./DarkVeil";

export const Background = () => {
  return (
    <div className="h-[120vh] max-md:w-[101vw] md:h-screen fixed inset-0 -z-10">
      <DarkVeil speed={1.7} hueShift={28} />
    </div>
  );
};
