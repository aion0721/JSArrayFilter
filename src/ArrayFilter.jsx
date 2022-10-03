import { useState } from "react";
export const ArrayFilter = () => {
  const [originalData, setOriginalData] = useState("");
  const [targetData, setTargetData] = useState("");
  const [result, setResult] = useState("");

  const onClickButton = () => {
    console.log("originalData");
    console.log(originalData);
    console.log("targetData");
    console.log(targetData);
    const originalArray = originalData.split(",");
    const targetArray = targetData.split(",");
    console.log(originalArray);
    console.log(targetArray);
    const res = originalArray.filter((i) => targetArray.indexOf(i) == -1);
    const resWithLiner = res.map(function (value, index) {
      console.log(value, index, res);
      if (index === 0) {
        return value + "\t";
      }
      if (index === res.length) {
        return value;
      }
      if ((index + 1) % 5 == 0) {
        return value + "\n";
      } else {
        return value + "\t";
      }
    });
    setResult(resWithLiner.join(""));
  };
  return (
    <>
      <textarea
        type="text"
        value={originalData}
        onChange={(e) => setOriginalData(e.target.value)}
      ></textarea>
      <br />
      <textarea
        type="text"
        value={targetData}
        onChange={(e) => setTargetData(e.target.value)}
      ></textarea>
      <br />
      <button type="button" onClick={onClickButton}>
        Proceed
      </button>
      <br />
      <textarea
        type="text"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      ></textarea>
    </>
  );
};
