import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import BlogSection from "./BlogSection"


const BlogAll = () => {
  const [card, setCard] = useState([])
  const [loading, setLoading] = useState(false)
  console.log("Card", card)

  const ProductData = async (value) => {
    try {
      setLoading(true)
      await axios
        .get(
          `https://primeautomationapiapi.primeautomaticdoor.com/blog`
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
  }, [])
  const [items, setItems] = useState(card)
  const [active, setActive] = useState(card)

  useEffect(() => {
    setItems(card)
  }, [card])
  console.log("Product--->jony", card)

  // const slice = items
  //   ?.filter((car) => car?.status === "Active")
  //   ?.slice(0, onOfElement)
  return (
    <div>
      <br />

      <br />
      <br />
      <br />
      <div className="ml-auto mr-auto m-1">
        <p className="text-3xl font-bold text-[#f04f25]">Our Blogs</p>
      </div>

      <div className="grid flex md:grid-cols-4 sm:grid-cols-2 gap-6 container ml-auto mr-auto m-2 pl-2 pr-2">
        {card.map((item) => (
          <BlogSection key={item.id} item={item}></BlogSection>
        ))}
      
        <br />
      </div>
      <Link to="/contract">
        <button class="mt-4 bg-[#d82121] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Show All
        </button>
      </Link>

      <br />
      <br />
    </div>
  )
}

export default BlogAll
