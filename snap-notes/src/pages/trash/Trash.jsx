import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import NoteCard from "../../components/notes/NoteCard";
import AddNote from "../../components/addNote/AddNote";

function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="  w-full shrink-0 items-center px-4 md:px-6">
          <NoteCard isTrash={true} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
