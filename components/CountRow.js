import React from "react";
import CountUp from "react-countup";

const CountRow = () => {
  return (
    <>
      <section className="section-row section-stats parallax-repeat dark text-center">
        <div className="container">
          <div className="section-stats__row">
            <div className="stats-item col-rs col-xs-6 col-md-3">
              <div data-counter="" className="h1 stats-item__counter">
                <CountUp end={2230} />
              </div>
              <div className="divider-decor">
                <div className="div" />
                <div className="div" />
              </div>
              <h4 className="stats-item__title">
                <span>Happy</span>
                <span>Customers</span>
              </h4>
            </div>
            <div className="stats-item col-rs col-xs-6 col-md-3">
              <div data-counter="" className="h1 stats-item__counter">
                <CountUp end={749} />
              </div>
              <div className="divider-decor">
                <div className="div" />
                <div className="div" />
              </div>
              <h4 className="stats-item__title">
                <span>Teflon</span>
                <span>Coating</span>
              </h4>
            </div>
            <div className="stats-item col-rs col-xs-6 col-md-3">
              <div data-counter="" className="h1 stats-item__counter">
                <CountUp end={100} />%
              </div>
              <div className="divider-decor">
                <div className="div" />
                <div className="div" />
              </div>
              <h4 className="stats-item__title">
                <span>Customer</span>
                <span>Satisfaction</span>
              </h4>
            </div>
            <div className="stats-item col-rs col-xs-6 col-md-3">
              <div data-counter="" className="h1 stats-item__counter">
                <CountUp end={1549} />
              </div>
              <div className="divider-decor">
                <div className="div" />
                <div className="div" />
              </div>
              <h4 className="stats-item__title">
                <span>Car</span>
                <span>Polish</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountRow;
