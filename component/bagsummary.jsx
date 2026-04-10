import { useSelector } from "react-redux";

const Bagsummary = () => {
  const summary = {
    totalItem: 0,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  };
  const items = useSelector((store) => store.cartslice);
  items.map(
    (item) => (
      (summary.totalItem += 1),
      (summary.totalMRP += item.original_price),
      (summary.totalDiscount +=
        (item.discount_percentage * item.original_price) / 100)
    ),
  );

  return (
    <>
      <div class="bag-details-container">
        <div class="price-header">
          PRICE DETAILS ({summary.totalItem} Items){" "}
        </div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP</span>
          <span class="price-item-value">₹{summary.totalMRP}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount on MRP</span>
          <span class="price-item-value priceDetail-base-discount">
            -₹{summary.totalDiscount}
          </span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Convenience Fee</span>
          <span class="price-item-value">₹99</span>
        </div>
        <hr />
        <div class="price-footer">
          <span class="price-item-tag">Total Amount</span>
          <span class="price-item-value">
            ₹{summary.totalMRP - summary.totalDiscount}
          </span>
        </div>
      </div>
      <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default Bagsummary;
