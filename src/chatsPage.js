import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        style={{ fontFamily: ["Poppins", "monospace"], height: "100%" }}
        projectId={"8026c407-ecc0-4c2e-aef1-0ef676a897c6"}
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
      />
    </div>
  );
};

export default ChatsPage;
