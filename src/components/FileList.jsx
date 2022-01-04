import FileListItem from "./FileListItem";

const FileList = (props) => {
  return (
    <div className="file-list">
      {props.dataList.map((alllist) => (
        <FileListItem
          key={alllist.id}
          icon={alllist.icon}
          filename={alllist.filename}
          commitmessage={alllist.commitmessage}
          time={alllist.time}
        />
      ))}
    </div>
  );
};

export default FileList;
