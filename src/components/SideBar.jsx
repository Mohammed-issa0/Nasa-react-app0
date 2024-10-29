import "../index.css";
function SideBar(props) {
  const { handleClick, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleClick} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleClick}>
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
