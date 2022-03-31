/**
 * @file WaiverTabRenderer.js
 * @author Devin Arena, Logan Bahr
 * @description Renders a set of waivers in a group of tabs.
 * @since 3/30/2022
 **/

import { Box, Paper, Tab, Tabs, TabPanel } from "@mui/material";
import { useEffect, useState } from "react";
import WaiverRenderer from "./WaiverRenderer";

const WaiverTabRenderer = (props) => {
  const [tab, setTab] = useState(0);

  // one waiver -> no need for tabs
  if (props.waivers.length === 1) {
    if (props.signedWaivers) {
      return <WaiverRenderer image={props.signedWaivers[0]} />;
    }
    return (
      <WaiverRenderer image={props.waiverData[props.waivers[0]].imagePath} />
    );
  }

  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tabs
        value={tab}
        variant="fullWidth"
        onChange={(_e, index) => setTab(index)}
      >
        {props.waivers.map((value, idx) => {
          return (
            <Tab key={idx} label={props.waiverData[value].metadata.name} />
          );
        })}
      </Tabs>
      {props.signedWaivers ? (
        <WaiverRenderer image={props.signedWaivers[tab]} />
      ) : (
        <WaiverRenderer
          image={props.waiverData[props.waivers[tab]].imagePath}
        />
      )}
    </Paper>
  );
};

export default WaiverTabRenderer;
