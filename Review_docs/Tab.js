import React from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import TableBaseline from "./TableBaseline";
import TableDraft from "./TableDraft";
import TableArchived from "./TableArchived";
import DraftTable from "./DraftTable";
import BaselineTable from "./BaselineTable";

const { TabPane } = Tabs;

export default function Tab() {
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        padding: 30,
        fontSize: "15px",
        fontFamily: "Segoe UI,Segoe,Tahoma,Helvetica,Arial,sans-serif",
      }}
    >
      <Tabs>
        <TabPane tab="Baselines" key="1">
          <BaselineTable />
        </TabPane>
        <TabPane tab="Working Draft" key="2">
          <DraftTable />
        </TabPane>
        <TabPane tab="Archived" key="3">
          <TableArchived />
        </TabPane>
      </Tabs>
    </div>
  );
}
