import s from "./ContainerPublic.module.scss";

const ContainerPublic = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default ContainerPublic;
