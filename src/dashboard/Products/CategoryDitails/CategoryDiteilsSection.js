
import { AiOutlineFolderView } from "react-icons/ai";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import CategoryImage from "./CategoryImage";



const CategoryDiteilsSection = ({ item }) => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  console.log("Item-----", item);
  return (
    // border-t-neutral-900
    <div className="rounded-2xl shadow  mt-6 ml-auto mr-auto  container text-left border border-slate-300  single-card ">
      <div class="overflow-hidden  relative group">
        <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300   absolute  to-transparent bg-gradient-to-t inset-x-0 bottom-2 pt-30 text-white flex justify-between ml-4 mr-4 mb-2">
          <div className="flex">
            <span className="bg-[#d82121] rounded-full p-1 text-white cursor-pointer">
              <AiOutlineFolderView
                className="text-white font-bold text-xl"
                onClick={() => {
                  onClick("displayBasic");
                }}
              ></AiOutlineFolderView>
            </span>
          </div>
          <div className="flex">
            {/* <span className="bg-[#d82121] rounded-full p-1"></span> */}
          </div>
        </div>
        <CategoryImage item={item}></CategoryImage>
      </div>
      <p className="flex  ml-2 -mt-1 text-white"></p>
      <p className=" ml-3 text-sm text-gray-500 mt-2">
        {" "}
        {/* <span className=""> ৳</span> {item?.price} */}
      </p>
      <p className="ml-3 text-sm">
        <p>{item?.productName}</p>
        <p>{item?.category}</p>
        {" "}
        {/* <span className=""> Discount:</span> {item?.discount} */}
      </p>
      <p className="flex ml-3 text-sm">
    
      </p>

      <br />
      <div>
        <Dialog
          className="text-l"
          blockScroll
          header="Product Detail"
          visible={displayBasic}
          style={{ width: "60vw" }}
          onHide={() => onHide("displayBasic")}
          id="fname"
          maximizable
        >
          {/* <CategoryImage item={item} /> */}
        </Dialog>
      </div>
    </div>
  );
};

export default CategoryDiteilsSection;
