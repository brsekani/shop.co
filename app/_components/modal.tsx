import React from "react";

type ModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({ setShowModal }) => {
  // if (!show) return null;

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Leave a Review</h2>

        <form>
          <label className="block mb-2 font-medium">Your Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="John Doe"
          />

          <label className="block mb-2 font-medium">Your Review</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows={4}
            placeholder="Write something..."
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={hideModal}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
