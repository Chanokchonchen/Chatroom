import React from "react";
import SuggestItem from "./SuggestItem";
import { propsSuggestItem } from "./type";
function DormSuggest() {
  const suggestLists : propsSuggestItem[] = [{
    link:"#",
    src:"https://pix10.agoda.net/hotelImages/122/1220420/1220420_18051110480065351844.jpg?s=1024x768"
  },{
    link:"#",
    src:"https://pix10.agoda.net/hotelImages/460/4602558/4602558_18030706410062590812.jpg?s=1024x768"
  }]
  return (
    <div style={{ display: "inline-block" }}>
      <div
        className="overflow-auto  bg-light"
        style={{ textAlign: "center", maxWidth: "800px", maxHeight: "250px" }}
      >
      {suggestLists.map((item,index) => {
        return <SuggestItem {...item} key={index} />
      })}
      </div>
    </div>
  );
}
export default DormSuggest;
