import {
  pBadge1,
  pBadge2,
  pBadge3,
  totalCountElement,
} from "./assets/js/selectors";
// count
let pCount1 = 0;
let pCount2 = 0;
let pCount3 = 0;

const getTotal = () => {
  const total = pCount1 + pCount2 + pCount3;

  return total;
};

const updateTotal = () => {
  totalCountElement.textContent = getTotal();
};

const updateProductCount = (selector, count) => {
  selector.textContent = count || "zero";
};

// app init
function init() {
  updateProductCount(pBadge1, pCount1);
  updateProductCount(pBadge2, pCount2);
  updateProductCount(pBadge3, pCount3);
}

init();
