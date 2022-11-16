interface IbannerConstructor {
  (
    bannerWidth: number,
    bannerHeight: number,
    bannerCount: number
  ): IbannerOrder;
}

interface IbannerOrder {
  bannerWidth: number;
  bannerHeight: number;
  bannerCount: number;
  bannerArea: number;
  bannerMethod?(text: string): void;
}

interface IbannerFn {
  (width: number, height: number, count: number, constructor: any): any;
}

class BannerOrder implements IbannerOrder {
  bannerWidth;
  bannerHeight;
  bannerCount;
  bannerArea;
  constructor(bannerWidth, bannerHeight, bannerCount) {
    this.bannerWidth = bannerWidth;
    this.bannerHeight = bannerHeight;
    this.bannerCount = bannerCount;
    this.bannerArea = this.bannerWidth * this.bannerHeight;
  }
}

const banner: IbannerFn = (width, height, count, BannerOrder) => {
  return new BannerOrder(width, height, count);
};

const testBanner = new BannerOrder(1, 8, 1);
console.log(testBanner);
