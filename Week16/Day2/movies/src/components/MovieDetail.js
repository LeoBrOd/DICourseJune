import { connect } from "react-redux";
const MovieDetail = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "50%",
      }}
    >
      <h1>Movie Detail</h1>
      <h2>Title:{props.detail.title}</h2>
      <h2>
        Release Date:{props.detail.releaseDate}
      </h2>
      <h2>Rating:{props.detail.rating}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};
export default connect(mapStateToProps)(
  MovieDetail
);
