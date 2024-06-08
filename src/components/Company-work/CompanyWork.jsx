import Illustartion from "../../assets/illustartion.svg";
import './CompanyWork.css'

const CompanyWork = () => {
  return (
    <>
      <section className="CompanyWork">
        <div className="company-content">
          <h1>Why work with Teens</h1>
          <p>
            Teenagers are the smarter generations, more clued in to your
            customer mindset, not spoilt by years of experience hence being cost
            effective delivery of high quality of work.
          </p>
        </div>
        <div className="company-main">
          <img src={Illustartion} alt="" />
          <div className="comapany-main-right">
            <h2>Innovation</h2>
            <p>
              No longer worry about using the same old ideas. Get innovative
              thinking, processes and style of working. Helps companies grow
              rapidly with timely project delivery.
            </p>
            <h2>Cost effective</h2>
            <p>
              Get your work done significantly lower cost, save as much as 50%
              on cost .
            </p>
            <p>* Help the next generation the way someone helped you</p>
            <div className="main-buttons">
              <button className="begin">Let's Begin</button>
              <button>Talk With Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyWork;
