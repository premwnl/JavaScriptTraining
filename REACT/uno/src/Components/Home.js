import React, { useState } from "react";
import "../Styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ setUserName }) => {
  const [name, setName] = useState({ value: "", hasValue: true });
  const [time, setTime] = useState({ value: "", hasValue: true });
  const navigate = useNavigate();
  const startGame = () => {
    if (!name.value || (time.value < 5 && time.value) || time.value > 30) {
      if (!name.value) setName({ value: "", hasValue: false });
      if (time.value < 5 || time.value > 30)
        setTime({ value: "", hasValue: false });
    } else {
      setUserName(name.value.replaceAll(" ", "").toUpperCase(), time.value);
      navigate("./game");
    }
  };
  return (
    <>
      <div className="width_full height_vh d_flex justifyContent_center alignItems_center modal">
        <div className="d_flex justifyContent_center alignItems_center modalContainer flex_col">
          <h1 className=" padding_twenty colorAqua">U N O</h1>
          <div className="modalInput  d_flex padding_ten">
            <label htmlFor="name" className="colorWhite  padding_ten_top ">
              <h2 className="colorAqua">PLAYER 1</h2>
            </label>
            <input
              id="name"
              type="text"
              value={name.value}
              onChange={(e) =>
                setName({ value: e.target.value, hasValue: true })
              }
              className="colorAqua margin_inline_ten"
              placeholder="--NAME--"
            />
          </div>
          <h5 className="helper">
            {!name.hasValue && "Please Enter Valid Name"}&nbsp;
          </h5>
          <div className="modalInput  d_flex padding_ten">
            <label htmlFor="computer" className="colorWhite  padding_ten_top">
              <h2 className="colorAqua">PLAYER 2</h2>
            </label>
            <input
              id="computer"
              type="text"
              className="colorAqua margin_inline_ten"
              defaultValue="COMPUTER"
              disabled
            />
          </div>
          <h5>&nbsp;</h5>
          <div className="modalInput  d_flex padding_ten">
            <label htmlFor="time" className="colorWhite  padding_ten_top">
              <h2 className="colorAqua">PLAY TIME</h2>
            </label>
            <input
              id="time"
              type="number"
              value={time.value}
              className="colorAqua margin_inline_ten"
              onChange={(e) =>
                setTime({ value: e.target.value, hasValue: true })
              }
              placeholder="--DEFAULT : 10 MIN--"
              onKeyDown={(e) =>
                (e.keyCode === 69 || e.keyCode === 190) && e.preventDefault()
              }
            />
          </div>

          <h5 className="helper">
            {!time.hasValue && "Please Enter TimeRange 5 - 30 Min"}&nbsp;
          </h5>
          <div className="modalInput  d_flex padding_ten">
            <button className=" play_button colorAqua" onClick={startGame}>
              PLAY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
