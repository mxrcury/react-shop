import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";

const SortPopUp = React.memo(() => {
  const [isPopUpOn, setPopUpOn] = useState(false);
  const [active, setActive] = useState(0);
  const [sortList, setSortList] = useState(['Popular',"Price", "from A-Z"]);
  const popUpRef = useRef();
  const activeLabel = sortList[active]

  const togglePopUp = () => {
    setPopUpOn(!isPopUpOn);
  };
  const handleOutsideClick = (e) => {
    !e.path.includes(popUpRef.current) && setPopUpOn(false);
  };
  const onSelectItem = (index)=>{
    setActive(index)
    setPopUpOn(false)
  }
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="sort" ref={popUpRef}>
      <div className="sort__label">
        <svg
          className={isPopUpOn ? 'rotate' : undefined} 
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={togglePopUp}>{active === null ? sortList[0] : activeLabel}</span>
      </div>
      {isPopUpOn && (
        <div className="sort__popup">
          <ul>
            {sortList.map((el, index) => (
              <li
              key={index}
                onClick={() =>onSelectItem(index)}
                className={active === index ? "active" : null}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
})

export default SortPopUp;
