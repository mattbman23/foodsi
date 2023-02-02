export const Banner = () => {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5 text-secondary">
      <div>
        <h2 className="mt-5 md:mt-8">
          Welcome to my{" "}
          <span className="underline underline-offset-2 decoration-4 decoration-[#171c22]">
            unique food
          </span>
          {""} blog
        </h2>
      </div>
      <p className="max-w-xs py-2 mt-6 font-extrabold md:mt-2">
        You can never go wrong with{" "}
        <span className="underline underline-offset-2 decoration-4 decoration-[#171c22]">
          {" "}
          gummies
        </span>{" "}
        .
      </p>
    </div>
  );
};
