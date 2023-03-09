import React from "react"
import { SpeedDial } from "primereact/speeddial"
import { Tooltip } from "primereact/tooltip"
import { Toast } from "primereact/toast"

import { BiShareAlt } from "react-icons/bi"
import { useRef } from "react"
import "./SpeedDialDemo.css"

function OurTeam() {
  const toast = useRef(null)

  const items = [
   
    {
      label: "Facebook",
      icon: "pi pi-facebook",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Update",
          detail: "Data Updated",
        })
      },
    },
    {
      label: "Twitter",
      icon: "pi pi-twitter",
      command: () => {
        toast.current.show({
          severity: "error",
          summary: "Delete",
          detail: "Data Deleted",
        })
      },
    },
    {
      label: "Linkedin",
      icon: "pi pi-linkedin",
      command: () => {
        window.location.hash = "/fileupload"
      },
    },
    
  ]
  return (
    <div className="bg-white ">
      <Toast ref={toast} />
      <div className="container ml-auto mr-auto ">
        <div className="grid md:grid-cols-3 gap-4  ml-auto mr-auto text-left pt-10 p-2 m">
          <div>
            <p className="text-xl text-[#f04f25]">
              Our Team Members{" "}
              <span
                style={{ borderBottom: "5px solid #61dafb", width: "10px" }}
              ></span>
            </p>
            <p className="text-4xl font-bold text-[#032e42]">
              Our Creative Team
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm">
              Aliquam sodales justo sit amet urna auctor scelerisquinterdum leo
              anet tempus enim esent egetis hendrerit vel nibh vitae ornar sem
              velit aliquam facilisivitae finibus risus feslin is hendrerit vel
              nibh vitae ornar uspendisse consequat quis sem.
            </p>
          </div>
        </div>
        {/* img section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 mb-12 ">
          <div className="bg-white shadow-xl text-left overflow-hidden">
            <img
              src="http://bizix.premiumthemes.in/wp-content/uploads/2020/02/team6.jpg"
              alt=""
            />

            <div className="  relative group">
              <div
                style={{ marginRight: "0" }}
                className="rounded-xl z-0 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out  absolute  to-transparent bg-gradient-to-t inset-x-0 bottom-2 pt-30 text-white justify-items-end text-right mb-16 mr-0 justify-between"
              >
                <div className="flex  justify-between mr-6">
                  <span className="hover-none bg-blue-300"></span>
                  {/* <div className="bg-[#868383]   text-right p-2 rounded-t-full overflow-hidden"> */}
                </div>
              </div>

              <div className="ml-6 mt-2 mb-2">
                <div className="flex justify-between">
                  {" "}
                  <p>Andrew Wills</p>
                </div>

                <div className="">
                  <p className="text-xl font-bold">Web Developer</p>
                  <div>
                    <div
                      className="speeddial-tooltip-demo mt-2 mr-1 "
                      style={{ position: "relative", height: "0px" }}
                    >
                      <SpeedDial
                        model={items}
                        direction="up"
                        className="speeddial-right"
                        buttonClassName="p-button-danger bg[##f04f25]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl text-left overflow-hidden">
            <img
              src="http://bizix.premiumthemes.in/wp-content/uploads/2020/02/team6.jpg"
              alt=""
            />

            <div className="  relative group">
              <div
                style={{ marginRight: "0" }}
                className="rounded-xl z-0 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out  absolute  to-transparent bg-gradient-to-t inset-x-0 bottom-2 pt-30 text-white justify-items-end text-right mb-16 mr-0 justify-between"
              >
                <div className="flex  justify-between mr-6">
                  <span className="hover-none bg-blue-300"></span>
                  {/* <div className="bg-[#868383]   text-right p-2 rounded-t-full overflow-hidden"> */}
                </div>
                {/* <p className="text-xl font-bold">Web Developer</p> */}
              </div>

              <div className="ml-6 mt-2 mb-2">
                <div className="flex justify-between">
                  {" "}
                  <p>Andrew Wills</p>
                </div>

                <div className="">
                  <p className="text-xl font-bold">Web Developer</p>
                  <div>
                    <div
                      className="speeddial-tooltip-demo mt-2 mr-1 "
                      style={{ position: "relative", height: "0px" }}
                    >
                      <SpeedDial
                        model={items}
                        direction="up"
                        className="speeddial-right"
                        buttonClassName="p-button-danger bg[##f04f25]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl text-left overflow-hidden">
            <img
              src="http://bizix.premiumthemes.in/wp-content/uploads/2020/02/team6.jpg"
              alt=""
            />

            <div className="  relative group">
              <div
                style={{ marginRight: "0" }}
                className="rounded-xl z-0 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out  absolute  to-transparent bg-gradient-to-t inset-x-0 bottom-2 pt-30 text-white justify-items-end text-right mb-16 mr-0 justify-between"
              >
                <div className="flex  justify-between mr-6">
                  <span className="hover-none bg-blue-300"></span>
                  {/* <div className="bg-[#868383]   text-right p-2 rounded-t-full overflow-hidden"> */}
                </div>
              </div>

              <div className="ml-6 mt-2 mb-2">
                <div className="flex justify-between">
                  {" "}
                  <p>Andrew Wills</p>
                </div>

                <div className="">
                  <p className="text-xl font-bold">Web Developer</p>
                  <div>
                    <div
                      className="speeddial-tooltip-demo mt-2 mr-1 "
                      style={{ position: "relative", height: "0px" }}
                    >
                      <SpeedDial
                        model={items}
                        direction="up"
                        className="speeddial-right"
                        buttonClassName="p-button-danger bg[##f04f25]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl text-left overflow-hidden">
            <img
              src="http://bizix.premiumthemes.in/wp-content/uploads/2020/02/team6.jpg"
              alt=""
            />

            <div className="  relative group">
              <div
                style={{ marginRight: "0" }}
                className="rounded-xl z-0 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out  absolute  to-transparent bg-gradient-to-t inset-x-0 bottom-2 pt-30 text-white justify-items-end text-right mb-16 mr-0 justify-between"
              >
                <div className="flex  justify-between mr-6">
                  <span className="hover-none bg-blue-300"></span>
                  {/* <div className="bg-[#868383]   text-right p-2 rounded-t-full overflow-hidden"> */}
                </div>
              </div>

              <div className="ml-6 mt-2 mb-2">
                <div className="flex justify-between">
                  {" "}
                  <p>Andrew Wills</p>
                </div>

                <div className="">
                  <p className="text-xl font-bold">Web Developer</p>
                  <div>
                    <div
                      className="speeddial-tooltip-demo mt-2 mr-1 "
                      style={{ position: "relative", height: "0px" }}
                    >
                      <SpeedDial
                        model={items}
                        direction="up"
                        className="speeddial-right"
                        buttonClassName="p-button-danger bg[##f04f25]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default OurTeam
