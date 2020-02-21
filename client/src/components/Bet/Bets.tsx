import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, Row, Col, Form } from "react-bootstrap";
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
