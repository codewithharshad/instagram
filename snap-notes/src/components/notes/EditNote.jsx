import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify"; // Other imports...
import Loader from "../loader/Loader";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  //   DialogPrimitiveClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function EditNote() {
  const context = useContext(myContext);
  const {
    notes,
    setNotes,
    addNote,
    modelState,
    isEdit,
    setIsEdit,
    noteUpdate,
    loading,
  } = context;
  const handleEdit = () => {
    noteUpdate(notes);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        if (isEdit == true) {
          setIsEdit(false);
        }
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  return (
    <>
      {loading && <Loader />}
      <section className="text-gray-600 body-font featured-note w-full mt-10 mb-10 pb-5">
        <div className="container px-5 mx-auto">
          <div>
            <Dialog open={isEdit} onOpenChange={(open) => setIsEdit(open)}>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit</DialogTitle>
                  <DialogDescription>{"Edit your note :)"}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      defaultValue={notes.title}
                      placeholder="Enter title"
                      className="col-span-2 h-8 py-6"
                      onChange={(e) =>
                        setNotes({ ...notes, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      defaultValue={notes.category}
                      placeholder="Enter category"
                      className="col-span-2 h-8 py-6"
                      onChange={(e) =>
                        setNotes({ ...notes, category: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center gap-2">
                    <Label htmlFor="content">Content:</Label>
                    <Textarea
                      id="content"
                      className="col-span-3 border h-40"
                      placeholder="Enter your note here"
                      cols="40"
                      defaultValue={notes.content}
                      onChange={(e) =>
                        setNotes({ ...notes, content: e.target.value })
                      }
                    />
                  </div>
                  {/* <div className="grid gap-2">
            
            </div> */}
                </div>
                <DialogFooter>
                  {/* <Button type="submit">Save changes</Button> */}
                  <Button onClick={() => handleEdit()}>Submit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditNote;
