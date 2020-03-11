import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Button, Modal } from "react-bootstrap";

import { HeaderSection } from "../Site/Header";
import { getDayDdMonth, timeAgo } from '../../common/utils/DatetimeUtils';
import { InputEvent } from '../../common/types'
//import { BetEntry } from "./BetEntry";
//import { DELETE_JOURNAL } from "../../api/bet_entry_mutation";
import './BetListing.css';

export const BetListing = () => {
  //TODO: exchange props, respectively State in App with following:
  const [betText, setBetText] = useState(''); //TODO set to null
  //bet Entry Modal
  const [entryShow, setEntryShow] = useState(false);
  const handleEntryClose = () => setEntryShow(false);
  const handleEntryShow = () => setEntryShow(true);
  return (
    <>
      <Button 
        className="Add"
        onClick={() => {
          setEntryShow(!entryShow);
        }}
      >
        new bet 
      </Button>
      <div className="DisplayList">
        <div className="Text">"No Bets placed..."</div>
      </div>

      <Modal show={entryShow} onHide={handleEntryClose}>
        <Modal.Header closeButton>
          <Modal.Title>new bet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Tools">
          <input
            type="text"
            value={betText}
            placeholder="Place a bet:"
            onChange={(e: InputEvent)  => {
              setBetText(e.target.value);
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};


//overstand (apollo-graphql)
//TODO ori from overstand graphql app:
//export BetListing = (..) => {
//  return (
//    <>
//      <div className="container">
//        <div className="row">
//          {data.bets.map((bet: betType) => (
//            <div className="col-md-4" key={bet.id}>
//              <div className="card">
//                <div className="card-header">
//                  <h5 className="mb-0">{bet.title}</h5>
//                </div>
//                <div className="card-body">
//                  <p className="card-text">{bet.body.substring(0,240)}</p>
//                </div>
//                <div className="card-header">
//                  <div className="row">
//                    <div className="col">
//                      <a href="#">Edit</a>
//                    </div>
//                    <div className="col">
//                      <a
//                        className="text-danger"
//                        href={`/bet/${bet.id}`}
//                        onClick={handleDelete}
//                      >
//                        Delete
//                      </a>
//                    </div>
//                  </div>
//                </div>
//              </div>
//
//              <div className="mb-3"></div>
//            </div>
//          ))}
//        </div>
//      </div>
//    </>
//  );
//};
