import bgImage19 from "@/assets/img/bg/19.jpg";
const CounterUp = () => {
  const items = [
    {
      title: "Years of Experience",
      num: 15,
      letter: null,
      sym: "+",
    },
    {
      title: "Active States",
      num: 40,
      letter: null,
      sym: "+",
    },
    {
      title: "Emergency Support",
      num: null,
      letter: "24/7",
      sym: null,
    },
    {
      title: "Trained Staffs",
      num: 100,
      letter: null,
      sym: "%",
    },
  ];
  return (
    <div
      className="ltn__counterup-area bg-image bg-overlay-theme-black-80 pt-115 pb-70"
      data-bs-bg={bgImage19.src}
    >
      <div className="container">
        <div className="row">
          {/* Title render jsx start*/}
          <div className="col-lg-4 col-md-12">
            <div className="section-title-area ltn__section-title-2">
              <h6 className="section-subtitle white-color">{"//"} activity</h6>
              <h1 className="section-title white-color">
                Watch Our Journey<span>.</span>
              </h1>
            </div>
          </div>
          {/* Title render jsx end*/}
          {items?.map(({ title, num, letter, sym }, idx) => (
            <div
              key={idx}
              className="col-lg-2 col-md-3 col-sm-6 align-self-center"
            >
              <div className="ltn__counterup-item-3 text-color-white">
                <div className="counter-icon"> {"//"} </div>
                <h1> {/* only render counter span if num exists */}
                  {num != null && (<span className="counter">{num}</span>)}
                  {letter ? (
                    <span className="counterUp-letter">{letter}</span>
                  ) : (
                    ""
                  )}
                  <span className="counterUp-icon">{sym}</span>{" "}
                </h1>
                <h6>{title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterUp;
