import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import FeaturedPoster from "../components/FeaturedPoster.jsx";
import MediaGrid from "../components/MediaGrid.jsx";
import Modal from "../components/Modal.jsx";

export default function Home() {
  const [modalItem, setModalItem] = useState(null);

  return (
    <>
      <div className="pt-16 pb-8 px-6 max-w-6xl mx-auto" />

      {/* <PageHeader /> */}
      <FeaturedPoster onOpen={setModalItem} />
      {/* Thin rule between sections */}
      <div className="mx-6 border-t border-white/5" />

      <MediaGrid onOpen={setModalItem} />

      {/* Modal */}
      {modalItem && <Modal item={modalItem} onClose={() => setModalItem(null)} />}
    </>
  );
}
