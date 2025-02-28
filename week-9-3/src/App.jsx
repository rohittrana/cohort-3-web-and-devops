// function App() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         backgroundColor: "#dfe6e9",
//         height: "100vh",
//         padding: 20,
//       }}
//     >
//       <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
//         <Card />
//       </div>
//       <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
//         <PostComponent />
//       </div>
//       <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
//         <ThirdComponent />
//       </div>
//     </div>
//   );
// }

// function Card() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         margin: 30,
//         height: 200,
//         width: 200,
//         backgroundColor: "#95a5a6",
//         padding: "10px",
//         borderRadius: "10px",
//       }}
//     >
//       <img
//         src="https://media.istockphoto.com/id/465257035/photo/small-orange-kitten-lie-on-the-bed.jpg?s=612x612&w=0&k=20&c=p3Br3Jby5H-MOk9tSt0lEloX3JpM2bdEZ_b7egqxDV4="
//         alt="cat image"
//         style={{ borderRadius: "50%", height: 40, width: 40 }}
//       />
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ipsum
//         sequi possimus dolorum est odio facilis eaque exercitationem vitae
//         adipisci.
//       </p>
//     </div>
//   );
// }

// function PostComponent() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         height: 300,
//         width: 250,
//         backgroundColor: "white",
//         borderRadius: 10,
//         border: "1px solid gray",
//         padding: 20,
//         margin: 10,
//         boxShadow: "0 0 5px rgba(0,0,0,0.1)",
//       }}
//     >
//       <img
//         src="https://media.istockphoto.com/id/465257035/photo/small-orange-kitten-lie-on-the-bed.jpg?s=612x612&w=0&k=20&c=p3Br3Jby5H-MOk9tSt0lEloX3JpM2bdEZ_b7egqxDV4="
//         alt="cat image"
//         style={{ width: 40, height: 40, borderRadius: "50%" }}
//       />
//       <div style={{ fontSize: 14, marginLeft: 10 }}>
//         <b>RohitRana</b>
//         <div>23,1000</div>
//         <div>12m</div>
//       </div>
//       <div style={{ fontSize: 14, marginLeft: 10 }}>
//         <p>what to know to win big? check out how these folks won $5999</p>
//       </div>
//     </div>
//   );
// }

// function ThirdComponent() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         margin: 30,
//         height: 200,
//         width: 200,
//         backgroundColor: "#bdc3c7",
//         padding: "10px",
//         borderRadius: "10px",
//       }}
//     >
//       <div>
//         <h1>Treding now</h1>
//       </div>
//       <div>
//         <i>Lorem ipsum dolor sit amet.</i>
//         <hr />
//       </div>

//       <div>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
//           pariatur.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;
import Logic from './Logic';
import Pratice from './pratice';
import Prop from './Prop'
function App() {
  return (
    <>
    <Logic></Logic>
      <Prop></Prop>
      <Pratice></Pratice>
    </>
  );
}
export default App;
