import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "sonner";
import "./ProductCard.scss";
import { FaEdit, FaTrash, FaTrashRestoreAlt } from "react-icons/fa"; // Import icons from react-icons library
import { TbTrashXFilled } from "react-icons/tb";
import EditNote from "./EditNote";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Loader from "../loader/Loader";
function NoteCard({ isTrash }) {
  const userid = JSON.parse(localStorage.getItem("user"))?.userId;
  // const [editNote, setEditNote] = useState(null);
  const [open, setOpen] = useState(false);
  const [delData, setDelData] = useState(null);
  const context = useContext(myContext);
  const {
    mode,
    note,

    moveNoteToTrash,
    undoMoveFromTrash,
    handleNoteEditOpen,
    noteUpdate,
    isEdit,
    setIsEdit,
    loading,
    delNote,
    searchTitle,
    setSearchTitle,
  } = context;
 
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
 
  const addCart = (note) => {
    dispatch(addToCart(note));
    toast.success("add to cart");
  };
  const handleMoveToTrash = (item) => {
    moveNoteToTrash(item);
  };

  const handleUndoMoveFromTrash = (item) => {
    undoMoveFromTrash(item);
  };

  const showDelDialog = (item) => {
    setOpen(true);
    setDelData(item);
  };
  const handlePermanentDel = () => {
     delNote(delData.id);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div>
      {userid && (
        <section className="text-gray-600 body-font featured-note w-full   mt-10 mb-10 pb-5">
          <div className="container px-5 mx-auto">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
              <h1 className="sm:text-2xl text-1xl font-medium title-font mb-2 text-gray-900 rale-font">
                Notes
              </h1>
              <div className="h-1 w-10 bg-slate-900 rounded"></div>
            </div>

            <div className="flex flex-wrap  ">
              {/* {note.filter((obj)=> obj.title.toLowerCase().includes(searchkey)) */}
              {/* {note.filter((obj)=> obj.category.toLowerCase().includes(filterCat)) */}
              {/* product.filter((obj)=>  */}
              {/* {note.map((item, index) => { */}
              {note
                .filter((obj) => obj.userId == userid)
                .filter((obj) => obj.isTrashed == isTrash)
                .filter((obj) => obj.title.toLowerCase().includes(searchTitle))
                .map((item, index) => {
                  const {
                    title,
                    content,
                    category,
                    imageUrl,
                    id,
                    isTrashed,
                    createdAt,
                    updatedAt,
                  } = item;
                  return (
                    <div key={index} className=" w-full md:w-1/4  ">
                      <Card className="m-2 ml-0 relative">
                        <CardHeader>
                          <CardTitle>{title}</CardTitle>
                          <CardDescription>{category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          {/* <p>{content}</p> */}
                          {content.split("\n").map((line, index) => (
                            <p key={index}>{line}</p>
                          ))}
                        </CardContent>
                        {isTrashed ? (
                          <CardFooter>
                            {/* <p>Card Footer</p> */}
                            <div className="bg-slate-800 p-2 rounded cursor-pointer">
                              <TbTrashXFilled
                                onClick={() => showDelDialog(item)}
                                style={{ color: "white", fontSize: "11px" }}
                              />
                            </div>
                            <div className="bg-slate-800 p-2 rounded ml-1 cursor-pointer">
                              <FaTrashRestoreAlt
                                onClick={() => handleUndoMoveFromTrash(item)}
                                style={{ color: "white", fontSize: "10px" }}
                              />
                            </div>

                            <div className="ml-2 text-xs absolute right-2 text-slate-400">
                              {updatedAt
                                ? `Edited ${new Date(updatedAt).toLocaleString(
                                    "default",
                                    { month: "short", day: "2-digit" }
                                  )}`
                                : `Created on ${new Date(
                                    createdAt
                                  ).toLocaleString("default", {
                                    month: "short",
                                    day: "2-digit",
                                  })}`}
                            </div>
                          </CardFooter>
                        ) : (
                          <CardFooter>
                            {/* <p>Card Footer</p> */}
                            <div
                              className="bg-slate-800 p-2 rounded cursor-pointer"
                              onClick={() => handleNoteEditOpen(item)}
                            >
                              <FaEdit
                                style={{ color: "white", fontSize: "10px" }}
                              />
                            </div>
                            <div
                              className="bg-slate-800 p-2 rounded ml-1 cursor-pointer"
                              onClick={() => handleMoveToTrash(item)}
                            >
                              <FaTrash
                                style={{ color: "white", fontSize: "10px" }}
                              />
                            </div>
                            {/* <div className="ml-2 text-xs absolute right-2 text-slate-400">
                              {updatedAt
                                ? `Edited ${new Date(
                                    updatedAt
                                  ).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "2-digit",
                                  })}`
                                : `New ${new Date(createdAt).toLocaleDateString(
                                    "en-GB",
                                    {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "2-digit",
                                    }
                                  )}`}
                            </div> */}
                            <div className="ml-2 text-xs absolute right-2 text-slate-400">
                              {updatedAt
                                ? `Edited ${new Date(updatedAt).toLocaleString(
                                    "default",
                                    { month: "short", day: "2-digit" }
                                  )}`
                                : `Created on ${new Date(
                                    createdAt
                                  ).toLocaleString("default", {
                                    month: "short",
                                    day: "2-digit",
                                  })}`}
                            </div>
                          </CardFooter>
                        )}
                      </Card>
                    </div>
                  );
                })}
            </div>
          </div>
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              {/* <Button variant="outline">Show Dialog</Button> */}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your note.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handlePermanentDel}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      )}
      {isEdit && <EditNote />}
      {loading && <Loader />}
    </div>
  );
}

export default NoteCard;
