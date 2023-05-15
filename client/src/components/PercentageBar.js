import React, { useState, useEffect } from "react";

export const PercentageBar = ({ array }) => {
    const [percentageArray, setPercentageArray] = useState([]);

    const percentageArrayCal = (array) => {
        let sum = 0;
        let percentageArray = [];
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        for (let i = 0; i < array.length; i++) {
            percentageArray.push((array[i] / sum) * 100).toFixed(0);
        }
        return percentageArray;
    };

    useEffect(() => {
        setPercentageArray(percentageArrayCal(array));
    }, []);

    console.log(percentageArray);
    return (
        <div>
            {percentageArray &&
                percentageArray.map((item, index) => {
                    return (
                        <div key={index} className="percentage-bar">
                            <div>{5 - index}</div>
                            <div className="bar">
                                <div
                                    style={{
                                        width: `${item}%`,
                                        backgroundColor: "orange",
                                        color: "orange",
                                        height: "100%",
                                    }}
                                ></div>
                            </div>
                            <div>{item}%</div>
                        </div>
                    );
                })}
        </div>
    );
};
