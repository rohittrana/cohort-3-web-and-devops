function Pratice() {
  return (
    <>
      <card>
        name:{"rohit"}, age:{23}, image=
        {
          "https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"
        }
        , gender:{"male"}
      </card>
    </>
  );
}
function card({ name, age, image, gender }) {
  return (
    <div>
      <div>
        <div>
          <h1>{name}</h1>
          <p>{age}</p>
          <img src={image} alt="cat" style={{ width: 100, height: 100 }} />
          <b>{gender}</b>
        </div>
      </div>
    </div>
  );
}

export default Pratice;
