import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import { dbID } from "../../appwrite/appwriteConfig";
import { collectionID } from "../../appwrite/appwriteConfig";
// appwrite
import { databases } from "../../appwrite/appwriteConfig";
import { toast } from "sonner";
import { ID, Query } from "appwrite";
// import {account} from '../../appwrite/appwriteConfig'

function myState(props) {
  const [mode, setMode] = useState("light");
  const userid = JSON.parse(localStorage.getItem("user"))?.userId;
  const [modelState, setModelState] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [loading, setLoading] = useState(false);

  const [notes, setNotes] = useState({
    title: null,
    content: null,
    category: null,
    userId: null,
    createdAt: new Date(),
    // updatedAt: new Date(),
    isTrashed: false,
  });

  const addNote = async (event) => {
    console.log("event", event);
    if (notes.content == null) {
      return toast.error("cannot add an empty note");
    }
    notes.userId = userid;
    setLoading(true);
    const addPromise = databases.createDocument(
      dbID,
      collectionID,
      ID.unique(),
      // notes
      notes
    );
    addPromise.then(
      function (response) {
        toast.success("Note Added");
        getProductData();
        setLoading(false);
        // setModelState(false);
        setModelState(false);
        setTimeout(() => {
          // toggleModel();
        }, 100);
      },
      function (error) {
        //console.log(error);
        toast.error("Something went wrong");
        setLoading(false);
      }
    );
    setNotes("");
  };

  const [note, setNote] = useState([]);
  const [totalNote, setTotalNote] = useState(0);

  const getProductData = async () => {
    setLoading(true);

    const notesData = databases.listDocuments(dbID, collectionID);
    notesData.then(
      function (response) {
        setTotalNote(response.total);
        const noteArray = response.documents.map((doc) => ({
          ...doc,
          id: doc.$id,
        }));
        setNote(noteArray);
        setLoading(false);
      },
      function (error) {
        setLoading(false);
      }
    );
  };
  const moveNoteToTrash = (item) => {
    // setNote(item);
    // const updatedNotes = note.map((item) =>
    // item.id === id ? { ...item, isTrashed: true } : item
    // );
    // setNote(updatedNotes);
    // toast.success('Note moved to trash');
    setLoading(true);
    const updatePromise = databases.updateDocument(
      dbID,
      collectionID,
      item.$id,
      {
        isTrashed: true,
        updatedAt: new Date(),
      }
    );
    console.log("hello??? there?? 222", updatePromise);
    updatePromise.then(
      function (response) {
        toast.success("Note moved to trash");
        getProductData();
        setLoading(false);
      },
      function (error) {
        toast.error("Somethign went wrong");
        setLoading(false);
      }
    );
  };

  const undoMoveFromTrash = (item) => {
    // setNote(item);
    // const updatedNotes = note.map((item) =>
    // item.id === id ? { ...item, isTrashed: true } : item
    // );
    // setNote(updatedNotes);
    // toast.success('Note moved to trash');
    setLoading(true);
    const updatePromise = databases.updateDocument(
      dbID,
      collectionID,
      item.$id,
      {
        isTrashed: false,
        updatedAt: new Date(),
      }
    );
    updatePromise.then(
      function (response) {
        toast.success("Note restored.");
        getProductData();
        setLoading(false);
      },
      function (error) {
        toast.error("Somethign went wrong");
        setLoading(false);
      }
    );
  };
  const handleNoteEditOpen = (item) => {
    // console.log("hello editing", item);
    console.log("ROCK?", item);
    console.log("hello this is handleEdit ", isEdit);
    setNotes(item);
    setIsEdit(true);
  };

  const noteUpdate = (notes) => {
    console.log("ROCK", notes);
    setLoading(true);
    const updatePromise = databases.updateDocument(
      dbID,
      collectionID,
      notes.$id,
      {
        title: notes.title,
        category: notes.category,
        content: notes.content,
        updatedAt: new Date(),
      }
    );
    updatePromise.then(
      function (response) {
        setIsEdit(false);
        toast.success("Note updated.");
        getProductData();
        setLoading(false);
        setNotes("");
      },
      function (error) {
        toast.error("Somethign went wrong");
        setLoading(false);
      }
    );
  };

  const delNote = (noteId) => {
    setLoading(true);
    const delPromise = databases.deleteDocument(dbID, collectionID, noteId);
    delPromise.then(
      function (response) {
        console.log(response); // Success
        toast.success("Note Deleted!");
        getProductData();
        setLoading(false);
      },
      function (error) {
        console.log(error); // Failure
        toast.success("Something went wrong!");
        setLoading(false);
        getProductData();
      }
    );
  };
  useEffect(() => {
    getProductData();
  }, []);

  const [order, setOrder] = useState([]);
  const [totalOrder, seTotalOrder] = useState([]);
  // update OrderStatus
  const editOrderhandle = (item) => {
    setOrder(item);
  };
  const [user, setUser] = useState([]);
  const getUserData = async () => {
    // setLoading(true)
  };

  useEffect(() => {
    // getOrderData();
    getUserData();
  }, []);

  const [searchTitle, setSearchTitle] = useState("");

  const resetFilters = () => {
    setSearchkey("");
  };

  return (
    <MyContext.Provider
      value={{
        note,
        loading,
        setLoading,
        searchTitle,
        setSearchTitle,
        addNote,
        setNotes,
        notes,
        modelState,
        setModelState,
        moveNoteToTrash,
        undoMoveFromTrash,
        noteUpdate,
        handleNoteEditOpen,
        isEdit,
        setIsEdit,
        delNote,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default myState;
