import style from "./service.module.css";
export default function ContentTitle({ children }) {
  return <div className={style.title}>{children}</div>;
}
