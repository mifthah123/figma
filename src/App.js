import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <div className="wrapper">
          <div
            className=""
            style={{
              width: "100px",
              height: "50px",
              background: "red",
              margin: "auto",
            }}
          ></div>

          <div className="wrapper_two">
            <img src="Connector-start.svg" width={"200px"} />
            <div
              className=""
              style={{
                width: "100px",
                height: "50px",
                background: "red",
              }}
            ></div>
          </div>

          <div style={{ display: "flex" }}>
            <img src="Connector-line.svg" width={"400px"} />
            <img
              src="Connector-line-2.svg"
              width={"400px"}
              style={{ marginLeft: "-3px" }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div
                className=""
                style={{
                  width: "100px",
                  height: "50px",
                  background: "red",
                }}
              ></div>
              <div style={{ display: "flex" }}>
                <div>
                  <img src="Connector-line-left.svg" width={"150px"} />
                  <div
                    className=""
                    style={{
                      width: "100px",
                      height: "50px",
                      background: "red",
                    }}
                  ></div>
                </div>
                <div>
                  <img
                    src="Connector-line-right.svg"
                    width={"150px"}
                    style={{ marginLeft: "-3px" }}
                  />
                  <div
                    className=""
                    style={{
                      width: "100px",
                      height: "50px",
                      background: "red",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div style={{}}>
              {/* Line */}
              <div
                style={{ width: "2px", height: "20px", background: "#ECECEF" }}
              />
              <div
                className=""
                style={{
                  width: "100px",
                  height: "50px",
                  background: "red",
                }}
              ></div>
              <div style={{ display: "flex" }}>
                <img src="Connector-line-left.svg" width={"150px"} />
                <img
                  src="Connector-line-right.svg"
                  width={"150px"}
                  style={{ marginLeft: "-3px" }}
                />
              </div>
              <div
                className=""
                style={{
                  width: "100px",
                  height: "50px",
                  background: "red",
                }}
              ></div>
            </div>
            <div>
              <div
                className=""
                style={{
                  width: "100px",
                  height: "50px",
                  background: "red",
                }}
              ></div>
              <div style={{ display: "flex" }}>
                <img src="Connector-line-left.svg" width={"150px"} />
                <img
                  src="Connector-line-right.svg"
                  width={"150px"}
                  style={{ marginLeft: "-3px" }}
                />
                <div
                  className=""
                  style={{
                    width: "100px",
                    height: "50px",
                    background: "red",
                  }}
                ></div>
              </div>
              <div
                className=""
                style={{
                  width: "100px",
                  height: "50px",
                  background: "red",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
