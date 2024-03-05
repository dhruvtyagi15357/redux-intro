import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/index'

const Home = () => {
    const amount = useSelector((state) => state.amount);
    const dispatch = useDispatch()
    const actions = bindActionCreators(actionCreators, dispatch)


  return (
    <div className="container m-5 d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: "28rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center ">Bank info</h5>
          <p className="card-text text-md-center ">{amount}</p>
          <div className="d-flex justify-content-center ">
            <button
              name="deposit"
              id="deposit"
              className="btn btn-primary mx-2"
              onClick={() => {actions.deposit(100)}}>
              Deposit (+100)
            </button>

            <button
              name="buy"
              id="buy"
              className="btn btn-primary mx-2"
              onClick={() => {actions.withdraw(100)}}>
              Buy (-100)
            </button>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
