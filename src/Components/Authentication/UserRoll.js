import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"

const UserRoll = () => {
  const [card, setCard] = useState([])
  const [loading, setLoading] = useState(false)
  const ProductData = async (value) => {
    try {
      setLoading(true)
      await axios
        .get(
          `https://primeautomationapiapi.primeautomaticdoor.com/user`
          // ` https://prime-automation-server-production.up.railway.app/product`
        )
        .then(function (res) {
          setLoading(false)
          setCard(res?.data)

          console.log(res?.data)
        })
        .catch(function (error) {
          toast.error(error)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      toast.error(err)
    }
  }
  useEffect(() => {
    ProductData()
  }, [card])

  return (
    <div>
      <div class="bg-gray-50 min-h-screen">
        <nav></nav>
        <div>
          <div class="p-4">
            <div class="bg-white p-4 rounded-md">
              <div>
                <h2 class="mb-4 text-xl font-bold text-gray-700">
                  All User
                </h2>
                <div>
                  <div>
                    <div class="grid grid-cols-5 text-left  justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div className="mr-2">
                        <span>Name</span>
                      </div>
                      <div className="ml-3">
                        <span>Email</span>
                      </div>
                      <div className="ml-3">
                        <span>Role</span>
                      </div>
                      <div className="ml-3">
                        <span>Time</span>
                      </div>
                      <div className="ml-3">
                        <span>Edit</span>
                      </div>
                    </div>
                    <div>

                    {card?.map((person) => (
                     
                      <div  key={person._id} class="grid grid-cols-5 text-left justify-between border-t text-sm font-normal mt-4 space-x-4">
                        <div class="px-2 flex">
                          <span>{person?.firstName} &nbsp; {person?.lastName}</span>
                        </div>
                        <div>
                          <span>{person?.email}</span>
                        </div>
                        <div class="px-2">
                          <span>Admin</span>
                        </div>
                        <div class="px-2">
                          <span>28/12/2021</span>
                        </div>
                        <div class="px-2">
                          <select>
                            <option>Admin</option>
                            <option>User</option>
                          </select>
                        </div>
                      </div>

                      
                    
))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoll;
