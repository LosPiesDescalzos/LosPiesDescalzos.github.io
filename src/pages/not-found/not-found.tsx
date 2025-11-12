import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;
