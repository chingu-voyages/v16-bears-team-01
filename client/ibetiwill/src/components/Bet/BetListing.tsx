import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Button } from "react-bootstrap";

import HeaderSection from "../Site/Header";
import { getDayDdMonth, timeAgo } from '../../common/utils/DatetimeUtils';
import { oddsOn, oddsAgainst } from '../../common/utils/BetUtils';
//import { BetEntry } from "./BetEntry";
//import { DELETE_JOURNAL } from "../../api/bet_entry_mutation";
import { Bet } from '../../common/types';
import { data } from '../../data/bets';
import './BetListing.css';

export const BetListing = () => {
  //TODO: exchange props, respectively State in App with following:
  const [betEvent, setBetEvent] = useState(''); //TODO set to null
  const [bets, setBets] = useState<Bet[]>(data);

  //const { loading, error, data } = useQuery(betQuery);
  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error : </p>;
  //and then ... data.bets.bap( ..=> ..)

  return (
    <>
    <div className="BetsContainer">
      <div className="DisplayList">
        {data.length > 0 
          ? data.map(bet => (
                <div 
                  key={bet.id}
                  className="DisplayRow"
                >
                  <div className="Text">{bet.event}</div>
                  <div className="Text">{`by ${bet.user}`}</div>
                  <div className="Text">{`${getDayDdMonth(bet.createdOn)} (${timeAgo(bet.createdOn)})`}</div>
                    <Button
                      onClick={() => {}}
                      title="bet on the creator"
                    >
                      {`ON (odds: ${oddsOn(bet)})`}
                    </Button>
                    <Button
                      onClick={() => {}}
                      title="bet against the creator"
                    >
                      {`AGAINST (odds: ${oddsAgainst(bet)})`}
                    </Button>
                </div>
              ))
                : <div className="Text">"No Bets placed..."</div>
          }
        </div>
      </div>
    </>
  );
};
//fb
  //      <div className="Tools">
  //        <TextInput
  //          value={betEvent}
  //          placeHolder="Place a bet:"
  //          changeHandler={(e: InputEvent)  => {
  //            setBetEvent(e.target.value);
  //          }}
  //        />
  //        <Button
  //          onClick={() => {
  //            if (betEvent !== '') {
  //              setBets([{
  //                event: betEvent,
  //                createdOn: new Date(),
  //                user: user,
  //                on: [],
  //                against: [],
  //                visibility: 'global',
  //              }, ...bets]);  
  //              setBetEvent('');
  //            }
  //          }}
  //          title="Are you sure? - Release your Bet to the wild"
  //        >
  //          I bet!
  //        </Button>
  //        <Button
  //          onClick={() => {
  //            setBets([]);
  //            setBetEvent('');
  //          }}
  //          title="clear bets"
  //        >
  //          reset 
  //        </Button>
  //      </div>



//overstand
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
