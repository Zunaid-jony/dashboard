import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { SplitButton } from "primereact/splitbutton"
import React, { useEffect, useRef, useState } from "react"

import { Navigate } from "react-router-dom"
import { toast } from "react-toastify"
import { CommonButton } from "../Button/Button"

export const Table = ({
  isSelectable = true,
  rows = 25,
  emptyMessage = "",
  tableHeaderName = "",
  isTopbarShow = true,
  tableColumns,
  extraTableAction,
  data,
  setData,
  selectedData,
  setSelectedData,
  loading = true,
  deleteSelected,
  showCreateModal = false,
  setShowCreateModal,
  dataKey,
  actionButton,
  importExportBtn,
  dialog,
  multiItem = true,
  deleteBtn = false,
  showDeleteModal = false,
  setShowDeleteModal,
  newBtn = true,
  newBtnRoute,
  newMlcRoute,
  newScRoute,
  newSMScRoute,
  exportBtn,
  exportFunc,
  ref,
  searchShow = true,
  pageShow,
  sortable,
  isColor,
  actionButtonWidth = 8,
  body,
  autoLayout = true,
  exportFileName,
  showTableHeader = true,
  actionHeader,
  lcBtn,
  importBtn,
  conditionBased,
  conditionMatched,
  isRowSelectable,
  sticky,
  backBtn,
  permission,
  onSelectionChange,
  inputFiled,
  ...rest
}) => {
  /**@isSelectable => select box on the left=> ex: true / false */
  /**@rows => total rows you want=> ex: 10 */
  /**@emptyMessage => if no data found message */
  /**@tableHeaderName => Table Header Name/ table name */
  /**@isTopbarShow => topbar buttons => new /delete/ export/ import => true / false*/
  /**@tableColumns => tableColumns you want*/
  /**@data / @setData => state for table data*/
  /**@loading / @setLoading => loading state=> true / false*/
  /** @selectedData / @setSelectedData => state for selected data */
  /** @deleteSelected => delete method */
  /** @showModal / @setShowModal => state for modal */
  /** @deleteSelected => delete method */
  /** @dataKey => unique id of the field */
  /** @actionButton => Action button of the field */
  /** @dialog => method for dialog box*/
  /** @deleteBtn => delete button in topbar => true / false*/
  /** @showCreateModal / @setShowCreateModal => Modal open close state => true / false*/
  /** @newBtn => if you want newBtn => true / false => if @newBtn false send @tableHeaderName */
  /** @newBtnRoute => if you don't want newBtn with route pass your route*/
  /** @exportBtn => If you want export button show up*/
  /** @searchShow => If you want to show search button*/
  /** @sortable => If you want to show shorting*/

  const [search, setSearch] = useState("")
  const [tableData, setTableData] = useState([])

  const dt = useRef(null)
  // console.log(dt);

  const date = new Date().toISOString()
  const route = window.location.href.split("/").pop()

  const tableHeader = (
    <div className={`${searchShow && "table-header"} font-bold `}>
      {tableHeaderName}
      {searchShow && (
        <div>
          <span className="p-input-icon-right">
            <i className="pi pi-search" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="px-4 py-2  shadow bg-white rounded-full text-lg"
            />
          </span>
        </div>
      )}
    </div>
  )

  const save = () => {
    // history.push(newMlcRoute);
  }

  const leftToolbar = (
    <React.Fragment>
      <div className="table-header font-bold">
        <div className="flex gap-2 items-center">
          {newBtn && permission?.canAdd ? (
            <CommonButton
              label="New"
              icon="pi pi-plus"
              className="p-button-success "
              type="button"
              onClick={() => {
                if (newBtnRoute) return Navigate(newBtnRoute)
                setShowCreateModal(true)
              }}
            />
          ) : (
            <></>
          )}
          {backBtn && (
            <div className="flex p-justify-end pb-2">
              <CommonButton
                className="p-mr-2 p-button-raised bg-gray-200 shadow-none text-gray-600 p-button-sm"
                title="Back"
                type="reset"
                disabled={false}
                label="Back"
                icon="pi pi-arrow-left"
                color="p-button-raised p-button-success"
              ></CommonButton>
            </div>
          )}

          {deleteBtn && permission?.canDelete && (
            <CommonButton
              label="Delete"
              icon="pi pi-trash"
              className="p-button-danger !p-button-sm"
              onClick={() => setShowCreateModal(true)}
              disabled={!selectedData || !selectedData.length}
            />
          )}
          {lcBtn && permission?.canAdd && (
            <div className="flex gap-2">
              <SplitButton
                className="p-button-success p-button-sm"
                label="Export LC"
                icon=""
                onClick={save}
              ></SplitButton>
            </div>
          )}
          {importBtn && (
            <div className="flex gap-2">
              <CommonButton
                label="Import"
                icon="pi pi-download
                            "
                className="p-button-seccess p-button-sm"
                onClick={() => {
                  setShowCreateModal(true)
                }}
              />
            </div>
          )}
        </div>

        <div>
          <span className="p-input-icon-right ">
            <i className="pi pi-search" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="px-4 py-2  shadow bg-white rounded-full text-lg "
            />
          </span>
        </div>
      </div>
    </React.Fragment>
  )

  useEffect(() => {
    if (typeof data === "undefined" || data === null) {
      return setTableData([])
    }
    setTableData(data)
  }, [data])

  return (
    <div className={`p-grid table table2 ${sticky && "sticky"}`}>
      <div className="p-col-12">
        <div className="card">
          <DataTable
            className="p-datatable-gridlines p-datatable-striped p-datatable-sm p-datatable-customers "
            // ref={dt}
            value={data}
            paginator={pageShow || true}
            rows={25}
            dataKey={dataKey}
            rowHover
            selection={selectedData}
            onSelectionChange={(e) => {
              if (onSelectionChange) return onSelectionChange(e)
              setSelectedData?.(e.value)
            }}
            globalFilter={search}
            emptyMessage={emptyMessage}
            loading={loading}
            header={
              showTableHeader
                ? newBtn || !tableHeaderName
                  ? leftToolbar
                  : tableHeader
                : null
            }
            rowsPerPageOptions={[25, 50, 75]}
            paginatorTemplate={
              pageShow &&
              "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            }
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} items"
            resizableColumns
            columnResizeMode="expand"
            showGridlines
            stripedRows
            autoLayout={autoLayout}
            responsiveLayout="scroll"
            selectionMode="checkbox"
            isDataSelectable={isRowSelectable}
            selectionAutoFocus={false}
            {...rest}
          >
            {isSelectable && (
              <Column
                selectionMode="multiple"
                selectionAutoFocus={false}
                headerStyle={{
                  width: "4em",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#0000FF !important",
                }}
                bodyStyle={{
                  width: "4em",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                ref={dt}
              ></Column>
            )}
            {tableColumns?.map((col, i) => (
              <Column
                key={i}
                field={col.field}
                header={col.header}
                sortable={sortable}
                body={col.sortableBody}
                style={{ minWidth: col.minWidth }}
                onRowClick={null}
              ></Column>
            ))}
            {actionButton && (
              <Column
                body={actionButton}
                header={actionHeader || "Action"}
                headerStyle={{
                  textAlign: "center",
                  width: `${actionButtonWidth}rem`,
                }}
              ></Column>
            )}
            {extraTableAction?.map((col, i) => (
              <Column
                key={i}
                body={col.body}
                header={col.header}
                headerStyle={{ textAlign: "center" }}
              ></Column>
            ))}
          </DataTable>
        </div>
      </div>
    </div>
  )
}
