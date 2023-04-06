import { Offer, ReviewObject } from './index';

export type InitialState = {
  city: string;
  sortType: string | null;
  offers: Offer[];
  offerToShow: Offer;
  offersNearby: Offer[];
  offerReviews: ReviewObject[];
  hoveredOffer: Offer;
}