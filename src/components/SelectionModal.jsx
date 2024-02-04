export function SelectionModal({
  bambooStand,
  // setBambooStand,
  blackEdition,
  // setBlackEdition,
  setIsModalOpen,
}) {
  const plans = [
    {
      h3: "Pledge with no reward",
      pledge: "",
      p: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`,
    },
    {
      h3: "Bamboo Stand",
      pledge: "Pledge $25 or more",
      qty: `${ bambooStand }`,
      price: 25,
      p: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
    },
    {
      h3: "Black Edition Stand",
      pledge: "Pledge $75 or more",
      qty: `${ blackEdition }`,
      price: 75,
      p: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.
          `,
    },
    {
      h3: "Mahogany Special Edition",
      pledge: "Pledge $200 or more",
      qty: 0,
      p: `          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.
          Shipping is included.
          `,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setIsModalOpen((prev) => !prev);
  }

  return (
    <section className="modal absolute left-1/2 top-[20%] w-[50vw] -translate-x-1/2 rounded-lg bg-white p-8">
      <div className="mb-4 flex items-center justify-between ">
        <h2 className="text-xl font-semibold">Back this project</h2>
        <button onClick={() => setIsModalOpen((prev) => !prev)}>
          <img
            className="scale-[1.3]"
            src="/images/icon-close-modal.svg"
            alt=""
          />
        </button>
      </div>

      <p className="mb-8 text-[#7a7a7a]">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

      {plans.map((data) => {
        return (
          <div
            key={data.h3}
            className="parent mb-4 rounded-lg border-2 last:opacity-50 [&_*]:last:select-none [&_button]:last:grayscale [&_div]:last:pointer-events-none"
          >
            <div className="relative ml-14 p-6">
              <input
                className="border-1 checked:[.parent]:border-[#3cb4ac]  absolute -left-6 top-8 inline-block scale-[2] outline-none"
                type="radio"
                name="plan"
                id={data.h3}
              />
              <div>
                <div className="mb-4 flex items-center justify-between ">
                  <label
                    htmlFor={data.h3}
                    className="cursor-pointer text-lg font-semibold hover:text-[#3cb4ac]"
                  >
                    {data.h3}
                    <span className="ml-4 text-[#3cb4ac]">{data.pledge}</span>
                  </label>

                  {data.qty >= 0 && (
                    <p className="flex items-center justify-center">
                      <b className="mr-1 text-xl">{data.qty}</b>
                      <span className="text-[#7a7a7a]">left</span>
                    </p>
                  )}
                </div>
              </div>
              <p className="text-[#7a7a7a]">{data.p}</p>
            </div>
            {data.qty > 0 && (
              <div className="flex w-full items-center justify-between border-t-2 p-6">
                <p className="text-[#7a7a7a]">Enter your pledge</p>
                <form onSubmit={handleSubmit}>
                  <input
                    className="mr-4 h-[50px] w-[98.05px] rounded-full border border-[#3cb4ac] p-4 focus:outline-none"
                    min={data.qty}
                    required
                    value={data.price}
                  />
                  <button
                    type="submit"
                    className="rounded-full border border-[#3cb4ac] bg-[#3cb4ac] px-6 py-3 text-white hover:bg-[#147b74] "
                  >
                    Continue
                  </button>
                </form>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
