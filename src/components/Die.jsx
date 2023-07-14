/* eslint-disable no-undef */
import React from "react";
import classes from "./Die.module.css";

export default function Die(props) {
  const styles = { backgroundColor: props.isHeld ? "#00BAB4" : "white" };

  return (
    <div className={classes.dieFace} style={styles} onClick={props.holdDie}>
      {[...Array(props.value)].map((el, index) => (
        <span key={index} className={classes.dieDot}></span>
      ))}
    </div>
  );
}