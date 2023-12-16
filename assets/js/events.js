import {
  product1,
  product2,
  product3,
  pDecrementBtn1,
  pDecrementBtn2,
  pDecrementBtn3,
  pIncrementBtn1,
  pIncrementBtn2,
  pIncrementBtn3,
  pDeleteBtn1,
  pDeleteBtn2,
  pDeleteBtn3,
} from "./selectors";

// Product 1 Events.
pDecrementBtn1.addEventListener("click", () => {
  if (pCount1) {
    pCount1 = pCount1 - 1;
    updateProductCount(pBadge1, pCount1);
    updateTotal();
  }
});

pIncrementBtn1.addEventListener("click", () => {
  pCount1 = pCount1 + 1;
  updateProductCount(pBadge1, pCount1);
  updateTotal();
});

pDeleteBtn1.addEventListener("click", () => {
  product1.remove();
  pCount1 = 0;
  updateTotal();
});

// Product 2 Events.
pDecrementBtn2.addEventListener("click", () => {
  if (pCount2) {
    pCount2 = pCount2 - 1;
    updateProductCount(pBadge2, pCount2);
    updateTotal();
  }
});

pIncrementBtn2.addEventListener("click", () => {
  pCount2 = pCount2 + 1;
  updateProductCount(pBadge2, pCount2);
  updateTotal();
});

pDeleteBtn2.addEventListener("click", () => {
  product2.remove();
  pCount2 = 0;
  updateTotal();
});

// Product 3 Events.
pDecrementBtn3.addEventListener("click", () => {
  if (pCount3) {
    pCount3 = pCount3 - 1;
    updateProductCount(pBadge3, pCount3);
    updateTotal();
  }
});

pIncrementBtn3.addEventListener("click", () => {
  pCount3 = pCount3 + 1;
  updateProductCount(pBadge3, pCount3);
  updateTotal();
});

pDeleteBtn3.addEventListener("click", () => {
  product3.remove();
  pCount3 = 0;
  updateTotal();
});
