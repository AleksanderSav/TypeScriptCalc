import { useContext } from "react";

export interface IOrder {
  width: number;
  height: number;
  count: number;
  area: number;
}

interface IOrderConstructor {
  new (width: number, height: number, count: number): IOrder;
}

class TestOrder implements IOrder {
  width: number;
  height: number;
  count: number;
  area: number;

  constructor(width: number, height: number, count: number) {
    this.width = width;
    this.height = height;
    this.count = count;
    this.area = parseFloat((width * height).toFixed(3));
  }
}

export function calc(width: number, height: number, count: number): IOrder {
  return new TestOrder(width, height, count);
}

interface IcreateOrderFN {
  (
    width: number,
    height: number,
    count: number,
    ctr?: IOrderConstructor
  ): IOrder;
}

export const getOrderFN: IcreateOrderFN = (
  width,
  height,
  count,
  ctr = TestOrder
) => {
  return new ctr(width, height, count);
};

const test = getOrderFN(3, 4, 1, TestOrder);
console.log(test);

//////////////////////////////////
interface Iprices {
  bannerPrice: number;
  prolkeika: number;
  luvers: number;
}
const prices: Iprices = {
  bannerPrice: 1000,
  prolkeika: 50,
  luvers: 15
};

interface IbannerConstructor {
  new (
    bannerWidth: number,
    bannerHeight: number,
    bannerCount: number,
    bannerText: string,
    prices: Iprices
  ): IbannerOrder;
}

interface IbannerOrder {
  bannerWidth: number;
  bannerHeight: number;
  bannerCount: number;
  bannerArea: number;
  bannerText: string;
  printOnlyCost: number;
  prices: Iprices;
  perimeter: number;
  bannerMethod(text: string): void;
}

interface IbannerFn {
  (
    width: number,
    height: number,
    count: number,
    text: string,
    prices: Iprices,
    constructor: IbannerConstructor
  ): BannerOrder;
}

class BannerOrder implements IbannerOrder {
  bannerWidth: number;
  bannerHeight: number;
  bannerCount: number;
  bannerArea: number;
  bannerText: string;
  printOnlyCost: number;
  prices: Iprices;
  perimeter: number;
  bannerMethod(text?) {
    console.log(text);
  }
  constructor(
    bannerWidth: number,
    bannerHeight: number,
    bannerCount: number,
    banneText: string,
    prices: Iprices
  ) {
    this.bannerWidth = bannerWidth;
    this.bannerHeight = bannerHeight;
    this.bannerCount = bannerCount;
    this.bannerText = banneText;
    this.bannerArea = this.bannerWidth * this.bannerHeight;
    this.prices = prices;
    this.printOnlyCost = this.bannerArea * this.prices.bannerPrice;
    this.perimeter = (this.bannerWidth + this.bannerHeight) * 2;
  }
}

const bannerFn: IbannerFn = (
  width,
  height,
  count,
  text,
  prices,
  constructor
) => {
  return new constructor(width, height, count, text, prices);
};

const testBanner = bannerFn(1, 3, 1, "test", prices, BannerOrder);
console.log(testBanner);
