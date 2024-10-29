function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data?.hdurl} alt="demo-mars-image" className="bgImage" />
    </div>
  );
}

export default Main;
