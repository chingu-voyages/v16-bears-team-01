import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, Row, Col, Form } from "react-bootstrap";
import HeaderSection from "../Site/Header";
import { BetEntry } from "./BetEntry";
import { BetListing } from "./BetListing";

// TODO <BetEntry />

export const Bets = () => (
  <>
    <HeaderSection />
    <BetListing />
  </>
);
