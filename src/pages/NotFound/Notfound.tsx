import { PiSmileySadLight } from "react-icons/pi";

export const NotFound = () => {
  return (
    <main>
      <section className="bg-[--white] -mt-7">
        <div className="flex justify-center text-center">
          <div className="h-screen w-full max-w-[65rem] mt-20 mb-20 md:mt-[10rem] md:mb-[20rem] p-4 rounded-4xl">
            <h3 className="text-[8rem] md:text-[11rem] text-[--third] flex justify-center">
              <PiSmileySadLight />
            </h3>
            <h2 className="text-[--third] text-[8rem] md:text-[11rem]">404</h2>
            <p className="text-[--third] text-3xl md:text-5xl">
              Page Not Found
            </p>
            <p className="text-[--third] text-xl md:text-3xl mt-3">
              The page you are looking for doesn't exist or an error occurred.
            </p>
            <p className="text-[--third] text-xl md:text-3xl">
              Go back, or head over to imperio.com to choose a new direction.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
