import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.spinner}>
      <ThreeDots color="#6D7A8D" height={100} width={100} />
    </div>
  );
};
export default Loader;
