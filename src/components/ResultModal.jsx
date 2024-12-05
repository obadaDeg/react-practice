import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, onReset },
  ref
) {
  const userLost = timeRemaining <= 0;
  const formattedTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1e3)) * 100);

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  function handleOverlayClick(e) {
    if (e.target === dialog.current) {
      dialog.current.close();
      onReset();
    }
  }

  return (
    <dialog ref={dialog} className="result-modal" onClick={handleOverlayClick}>
      <div className="div-content">
        {userLost && <h2>You {userLost ? "Lost" : "Win"}</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>
          The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </div>
    </dialog>
  );
});

export default ResultModal;
