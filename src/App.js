import React from "react";
import FileList from "./components/FileList";
import { dataList } from "./DataItems";
function App() {
  return <FileList dataList={dataList} />;
}

export default App;
