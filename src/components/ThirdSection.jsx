export function ThirdSection({ pricing }) {
  return (
    <section className="rounded-lg bg-white p-10">
      <h2 className="mb-6 text-lg font-semibold">About this project</h2>
      <p className="mb-8 text-[#7a7a7a]">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
        <br />
        <br />
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      <div>
        {pricing.map((item) => {
          return (
            <div
              key={item.h3}
              className="mb-4 rounded-lg border-2 p-8 last:opacity-50 [&_button]:last:grayscale [&_div]:last:pointer-events-none [&_*]:last:select-none"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-md font-semibold">{item.h3}</h3>
                <p className="font-medium text-[#3cb4ac]">{item.pledge}</p>
              </div>

              <p className="mb-4 text-[#7a7a7a]">{item.p}</p>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1">
                  <b className="text-3xl">{item.qty}</b>
                  <span className="text-[#7a7a7a]">left</span>
                </p>

                <button className="rounded-full bg-[#3cb4ac] px-6 py-4 text-base font-semibold text-white hover:bg-[#147b74]">
                  {item.btn}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
