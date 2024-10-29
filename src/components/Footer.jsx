function Footer(props) {
  const { handleClick, data } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleClick}>
        <i className="bx bxs-info-circle"></i>
      </button>
    </footer>
  );
}

export default Footer;
