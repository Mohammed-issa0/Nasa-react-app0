function Footer(props) {
  const { handleClick, data, downloadImage } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <div className="btns">
        <button>
          <a download={data.hdurl} href={data.hdurl} style={{ color: "white" }}>
            <i className="bx bx-download"></i>
          </a>
        </button>
        <button onClick={handleClick}>
          <i className="bx bxs-info-circle"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
