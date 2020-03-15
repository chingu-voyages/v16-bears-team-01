import React from "react";
import { HeaderSection, Footer } from "../Site";
import { BetEntry } from "./BetEntry";
import { BetListing } from "./BetListing";


export const Bets = () => (
  <>
    <HeaderSection />
    <BetListing />
    <Footer />
  </>
);
// TODO <BetEntry />
