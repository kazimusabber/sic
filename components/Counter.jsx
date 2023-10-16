import { counterData } from "@/data/data";
import CounterAnimation from "@/utils/CounterUpAnimation";

const Counter = () => {
  return (
    <div className="col-lg-12">
      <div className="counter-wraper pb-4 pb-lg-6 pb-xl-8 d-md-flex">
        {counterData.map((counter) => (
          <div className="counter-up-content" key={counter.id}>
            <div className="counter-up-content-item">
              <div className="counter-percent">
                <CounterAnimation number={counter.number} />
                <span className="percent">+</span>
              </div>
              <h5>{counter.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
