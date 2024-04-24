import React from "react";

const CoatingTable = () => {
  return (
    <section
      className="position-relative overflow-hidden bg-smoke space-top space-extra-bottom shape-mockup-wrap"
      data-aos="fade-in"
    >
      <h2 className="sec-title text-center">Coating Comparison</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 coating-table-container mt-5">
            <table className="coating-table">
              {/* <caption>Comparison of Coatings, Sealants, and Waxes</caption> */}
              <thead>
                <tr>
                  <th></th>
                  <th className="category">Coatings</th>
                  <th className="category">Sealants</th>
                  <th className="category">Waxes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Durability</th>
                  <td>High</td>
                  <td>Intermediate</td>
                  <td>Average</td>
                </tr>
                <tr>
                  <th scope="row">Longevity (dependent on quality)</th>
                  <td>High - 12-24 months</td>
                  <td>Intermediate - 6 to 12 months</td>
                  <td>Low - 1 to 4 months</td>
                </tr>
                <tr>
                  <th scope="row">Maintenance</th>
                  <td>Safe & Regular Washing</td>
                  <td>Safe & Regular Washing</td>
                  <td>Safe & Regular Washing</td>
                </tr>
                <tr>
                  <th scope="row">Application Level</th>
                  <td>Professional/Advanced</td>
                  <td>Easy</td>
                  <td>Easy</td>
                </tr>
                <tr>
                  <th scope="row">Removal Difficulty</th>
                  <td>Professional/Advanced</td>
                  <td>Intermediate</td>
                  <td>Easy</td>
                </tr>
                <tr>
                  <th scope="row">Cost</th>
                  <td>High</td>
                  <td>Moderate</td>
                  <td>Low</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 mt-5">
            <div className="row">
              <table class="striped-table">
                <tr>
                  <th>Parameters</th>
                  <th>Teflon Coating</th>
                  <th>Ceramic Coating</th>
                </tr>
                <tr>
                  <td>Paint Protection Category</td>
                  <td>Synthetic Wax</td>
                  <td>Ceramic Clear Coat</td>
                </tr>
                <tr>
                  <td>Origin</td>
                  <td>United Kingdom</td>
                  <td>USA</td>
                </tr>
                <tr>
                  <td>Main Component</td>
                  <td>PTFE</td>
                  <td>SIC</td>
                </tr>
                <tr>
                  <td>Coating Film Thickness</td>
                  <td>0.02 microns</td>
                  <td>2 microns</td>
                </tr>
                <tr>
                  <td>Durability</td>
                  <td>5-6 months</td>
                  <td>Everlasting</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-mockup jump">
        <img src="/resource/road_shape_1.png" alt="shape" />
      </div>
    </section>
  );
};

export default CoatingTable;
