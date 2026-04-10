import Bagitems from "../component/bagitems";
import Bagsummary from "../component/bagsummary";
import Footer from "../component/footer";
import Header from "../component/header";

const Bag = () => {
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <Bagitems></Bagitems>
          </div>

          <div className="bag-summary">
            <Bagsummary></Bagsummary>
          </div>
        </div>
      </main>
    </>
  );
};
export default Bag;
