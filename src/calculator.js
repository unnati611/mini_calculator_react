import * as React from "react";
import "./App.css";
import Input from "./input";
import Btns from "./Btns";
import { useState } from "react";

export default function Calculator() {
  const [updatedbtnvalue, Setupdatedbtnvalue] = useState("");
  const [symbolvalue, setsymbolvalue] = useState("");
  const [oldvalue, setoldvalue] = useState("");

  const equalto = () => {
    const Nupdatedbtnvalue = Number(updatedbtnvalue);
    const Noldvalue = Number(oldvalue);
    if (symbolvalue === "+") {
      const ans = Noldvalue + Nupdatedbtnvalue;
      Setupdatedbtnvalue(ans);
    } else if (symbolvalue === "-") {
      const ans = Noldvalue - Nupdatedbtnvalue;
      Setupdatedbtnvalue(ans);
    } else if (symbolvalue === "*") {
      const ans = Noldvalue * Nupdatedbtnvalue;
      Setupdatedbtnvalue(ans);
    } else if (symbolvalue === "/") {
      const ans = Noldvalue / Nupdatedbtnvalue;
      Setupdatedbtnvalue(ans);
    }
  };
  function onvalueupdate(value) {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setsymbolvalue(value);
      setoldvalue(updatedbtnvalue);
      Setupdatedbtnvalue("");
    } else if (value === "=") {
      equalto();
      setsymbolvalue(value);
    } else if (value === "reset") {
      setsymbolvalue("");
      setoldvalue("");
      Setupdatedbtnvalue("");
    } else if (value === "del") {
      if (symbolvalue === "=") {
        return;
      }
      Setupdatedbtnvalue(updatedbtnvalue.slice(0, updatedbtnvalue.length - 1));
    } else {
      Setupdatedbtnvalue(updatedbtnvalue + value);
    }
  }
  return (
    <div className="main">
      <div className="calculator">
        <Input inputValue={updatedbtnvalue}></Input>
        <Btns btnValue={onvalueupdate}></Btns>
      </div>
    </div>
  );
}
