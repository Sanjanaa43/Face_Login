import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let faceio;
  useEffect(() => {
    faceio = new faceIO("fioa3a31");
  }, []);

  const handleEnroll = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuthenticate = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Facial Authentication with FaceIO</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button onClick={handleEnroll}>Enroll</button>
        <button onClick={handleAuthenticate}>Authenticate</button>
      </div>
    </section>
  );
}

// Export the App component as default
export default App;
