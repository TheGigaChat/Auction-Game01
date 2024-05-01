import React from "react";
import Description from "./Description";

function ClosedContainer({ containerNum, setContainerNum, setEnd }) {
  //useEffect to change the navigation of the button Start
  return (
    <section className="container" id="page3">
      <section>
        <Description containerNum={containerNum} setEnd={setEnd} />
        <a href="#container1Default" className="button">
          Start
        </a>
      </section>
    </section>
  );
}

export default ClosedContainer;
