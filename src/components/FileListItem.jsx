import FileIcon from "./FileIcon";
import FileName from "./FileName";
import CommitMsg from "./CommitMsg";
import Time from "./Time";

const FileListItem = (props) => {
  return (
    <div className="file-list-item">
      <FileIcon fileicon={props.icon} />
      <FileName filename={props.filename} />
      <CommitMsg commitmessage={props.commitmessage} />
      <Time time={props.time} />
    </div>
  );
};

export default FileListItem;
