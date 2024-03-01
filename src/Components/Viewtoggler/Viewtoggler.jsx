import React from 'react'

function Viewtoggler() {
  return (
    <>
      <button type="button" name="list" onClick={togglePageView}>
        List of Programmers
      </button>
      <button type="button" name="form" onClick={togglePageView}>
        Form for planning tasks
      </button>
    </>
  );
}

export default Viewtoggler