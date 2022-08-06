import { Link } from "react-router-dom";

export function HomeLayout() {
  return (
    <div>
      Welcome to Orca. <Link to={"/suit/login/testcase"}>Click here</Link>
    </div>
  );
}
