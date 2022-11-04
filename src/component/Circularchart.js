import React from "react";

import SemiCircleProgressBar from "react-progressbar-semicircle";

const Circularchart = () => {
    return(
        <div className="m-3">
            <SemiCircleProgressBar  percentage={76} showPercentValue   />
        </div>
    );
}
export default Circularchart;