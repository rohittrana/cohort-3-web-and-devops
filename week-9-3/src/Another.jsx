function Another() {
  return (
    <div>
      <div>
        <PostComponent></PostComponent>
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
  );
}
function PostComponent() {
  return (
    <div
      style={{
        display: "flex",
        width: 250,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        padding: 20,
        margin: 10,
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src="https://media.istockphoto.com/id/465257035/photo/small-orange-kitten-lie-on-the-bed.jpg?s=612x612&w=0&k=20&c=p3Br3Jby5H-MOk9tSt0lEloX3JpM2bdEZ_b7egqxDV4="
          alt="cat image "
          style={{ width: 40, height: 40, borderRadius: 40 }}
        />
      </div>
      <div style={{ fontSize: 14, margin: 10 }}>
        <b>RohitRana</b>
        <div>23,1000</div>
        <div>12m</div>
      </div>
      <div style={{ fontSize: 14 }}>
        <p>what to know to win big? check ou how these folks won $5999</p>
      </div>
    </div>
  );
}

function Card() {
  <div>
    <div>
      <img
        src="https://media.istockphoto.com/id/465257035/photo/small-orange-kitten-lie-on-the-bed.jpg?s=612x612&w=0&k=20&c=p3Br3Jby5H-MOk9tSt0lEloX3JpM2bdEZ_b7egqxDV4="
        alt="cat image"
        style={{ borderRadius: 40, height: 10, width: 10 }}
      />
    </div>
  </div>;
}
export default Another;
