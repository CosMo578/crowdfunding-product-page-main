export function SuccessModal() {
  return (
    <div className="grid h-screen w-[100vw] place-items-center items-center bg-[#7a7a7a67]">
      <div className="w-[40vw] rounded-lg bg-white p-10 text-center">
        <img
          className="static mx-auto mb-10 h-auto w-[100px]"
          src="./images/icon-check.svg"
          alt=""
        />
        <h2 className="mb-4 text-2xl font-semibold">
          Thanks for your support!
        </h2>
        <p className="mb-6 text-[#7a7a7a]">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="rounded-full bg-[#3cb4ac] px-8 py-3 text-lg font-medium text-white">
          Got it!
        </button>
      </div>
    </div>
  );
}
