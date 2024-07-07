// result popUp window.
import { forwardRef, useRef, useImperativeHandle } from "react";

const ResultRef = forwardRef(function Result({ result, timer }, ref) {
    //exposing callable method inside your function
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The timer was <strong>{timer}</strong>
      </p>
      <p>
        You stopped at <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultRef;
