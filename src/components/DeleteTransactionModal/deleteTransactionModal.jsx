import Button from "../button/button";

// eslint-disable-next-line react/prop-types
const DeleteTransactionModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col gap-3 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirm</h2>
        <p>Are you sure you want to permanently delete this transaction?</p>
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            className="px-4 py-2 hover:bg-amber-200"
            onClick={onConfirm}
            title="Confirm"
          />
          <Button
            onClick={onCancel}
            type="button"
            title="Cancel"
            className="bg-red-400 hover:bg-red-500 text-white"
          />
        </div>
      </div>
    </div>
  );
};
export default DeleteTransactionModal;
