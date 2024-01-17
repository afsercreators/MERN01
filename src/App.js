import { useState } from "react";

function App() {
  const [nodeTitle, setNodeTitle] = useState("");
  const [nodeList, setNodeList] = useState([]);
  const [ediableObj, setEdiableObj] = useState();
  const [ediMode, setEdiMode] = useState(false);

  const createHandar = () => {
    if (!nodeTitle) {
      return alert("Empty Fild!!");
    }
    const newNodes = {
      id: Date.now() + "",
      titleName: nodeTitle,
    };
    setNodeList([...nodeList, newNodes]);
    setNodeTitle("");
  };

  const removeHandaler = (id) => {
    const finalFilter = nodeList.filter((item) => item.id !== id);
    setNodeList(finalFilter);
  };

  const editHandaler = (id) => {
    const ediableObj = nodeList.find((item) => item.id === id);
    setEdiableObj(ediableObj);
    setNodeTitle(ediableObj.titleName);
    setEdiMode(true);
  };

  const updateHandaler = () => {
    if (!nodeTitle) {
      return alert("Empty Fild!!");
    }
    const newNodeList = nodeList.map((item) => {
      if (item.id === ediableObj.id) {
        item.titleName = nodeTitle;
      }
      return item;
    });
    setNodeList(newNodeList);
    setEdiMode(false);
    setNodeTitle("");
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "50px" }}>
        <input
          type="text"
          value={nodeTitle}
          onChange={(e) => setNodeTitle(e.target.value)}
        />
        <button onClick={ediMode ? updateHandaler : createHandar}>
          Add Now
        </button>
        <div style={{ textAlign: "center", margin: "50px" }}>
          <ul>
            {nodeList.map((item) => (
              <li key={item.id} style={{ margin: "10px" }}>
                {item.titleName}{" "}
                <button onClick={() => editHandaler(item.id)}>Edit</button>
                <button onClick={() => removeHandaler(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
