import { border } from "@chakra-ui/react";

function Pagination({ total, current, changePage }) {
    // fix code here
    let pages = new Array(total).fill(0).map((a, i) => (
      <button
        data-testid="page-btn"
        onClick={() => changePage(i + 1)}
        disabled={current === i + 1}
        key={i + 1}
        style={{
            fontSize:"16px",
            borderRadius:"5px",
            width:"70px",
            padding:"5px",
            margin:"10px",
            border: "1px solid gray"
        }}
      >
        {i + 1}
      </button>
    ));
    return <div>{pages}</div>;
  }

  export default Pagination;