import { FC } from "react";

const App = () => {
  interface buttonProps {
    children: string;
    message: string;
  }
  const AlertButton: FC<buttonProps> = ({ message, children }) => {
    return <button onClick={() => alert(message)}>{children}</button>;
  };
  return (
    <div>
      <AlertButton message="alert Message One">One</AlertButton>
      <AlertButton message="alert Message Two">Two</AlertButton>
    </div>
  );
};

export default App;
