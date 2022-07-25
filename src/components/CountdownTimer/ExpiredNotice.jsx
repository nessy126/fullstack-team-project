import Modal from "components/Modal";

const ExpiredNotice = () => {
  return (
    <Modal>
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    </Modal>
  );

  // return (
  //   <div className="expired-notice">
  //     <span>Expired!!!</span>
  //     <p>Please select a future date and time.</p>
  //   </div>
  // );
};

export default ExpiredNotice;
