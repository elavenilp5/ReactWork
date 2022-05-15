import React from "react"
import "antd/dist/antd.css"
import { Tabs } from "antd"
import TableBaseline from "./TableBaseline"
import TableDraft from "./TableDraft"
import TableArchived from "./TableArchived"

const { TabPane } = Tabs

export default function Tab() {
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        padding: 30,

        // marginTop: 80,
      }}
    >
      <Tabs>
        <TabPane tab="Baselines" key="1">
          <TableBaseline />
        </TabPane>
        <TabPane tab="Working Draft" key="2">
          <TableDraft />
        </TabPane>
        <TabPane tab="Archived" key="3">
          <TableArchived />
        </TabPane>
      </Tabs>
    </div>
  )
}
