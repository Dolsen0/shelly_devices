import React, { useState } from "react";
import ReactSlider from 'react-slider';

export default function LightSlider(){
    const [value, setValue] = useState(50);
    return(
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            min={0}
            max={100}
            value={value}
            onChange={setValue}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
    )
}
