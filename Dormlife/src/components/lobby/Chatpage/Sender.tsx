/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import dog from "../../pic/finder_silver_2.jpg"
import cat from "../../pic/finder_silver_1.jpg"
import catp from "../../pic/finder_silver_1p.jpg"
import dogp from "../../pic/finder_silver_2p.jpg"
import mon from "../../pic/finder_silver_3.jpg"
import monp from "../../pic/finder_silver_3p.jpg"
import { propsSender } from "../../type";

const Sender = (props : propsSender) => {
  const {author,message,profilepic} = props
  const AllImage = [dog,cat,mon,dogp,catp,monp]
  return (
    <>
      <div className="chat">
        <div className="chat-avatar">
          <a
            className="avatar"
            href="#"
            data-placement="right"
          >
            <img
              src={AllImage[profilepic]}
              alt=""
              title={author}
            />
          </a>
        </div>
        <div className="chat-body">
          <div className="chat-content">
            <p>
                {message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sender;
