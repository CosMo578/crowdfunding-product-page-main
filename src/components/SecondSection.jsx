export function SecondSection() {
  return (
    <section className="mb-8 rounded-lg bg-white p-10">
      <div className="flex items-center justify-between">
        <p className="justify-self-start">
          <b className="block text-3xl"> $89,914 </b>
          <span className="text-[#7a7a7a]">of $100,000 backed</span>
        </p>

        <p className="border-x-[1px] px-[10%]">
          <b className="block text-3xl">5,007</b>
          <span className="text-[#7a7a7a]">total backers</span>
        </p>

        <p>
          <b className="block text-3xl">56</b>
          <span className="text-[#7a7a7a]">days left</span>
        </p>
      </div>
      <input
        className="mt-6 w-full bg-[#3cb4ac] outline-none"
        type="range"
        value="70"
      />
    </section>
  );
}
