/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickSwithShow = () => {
    setFaceShow(!faceShow);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShow || setFaceShow(true);
      } else {
        faceShow && setFaceShow(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1>Hello</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwithShow}>ON / OFF</button>
      <p>{num}</p>
      {faceShow && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
