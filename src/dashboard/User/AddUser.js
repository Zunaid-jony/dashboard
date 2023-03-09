import React from "react"
import { Table } from "../../Components/Table/Table"
import AddUser2 from "./AddUser2"

const AddUser = () => {
  const dummyData = [
    {
      name: "jony",
      shortName: "jony-mia",
      role: "employe",
    },
  ]
  const tableColumns = [
    {
      field: "name",
      header: "Name",
      sortableBody: (machine) => <div>{machine.name}</div>,
    },
    {
      field: "shortName",
      header: "Short Name",
      sortableBody: (machine) => <div className="">{machine.shortName}</div>,
    },
    {
      field: "role",
      header: "Role",
      sortableBody: (machine) => <div>{machine?.role}</div>,
    },
  ]
  return (
    <div className="">
      <AddUser2></AddUser2>
      {/* <Table
        isSelectable={false}
        rows={15}
        emptyMessage="No data found"
        isTopbarShow
        importExportBtn={false}
        tableColumns={tableColumns}
        data={dummyData}
        dataKey="buyerBrandID"
        loading={false}
        showCreateModal={showForm}
        setShowCreateModal={setShowForm}
      /> */}
    </div>
  )
}

export default AddUser
