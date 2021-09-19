import { useDispatch, useSelector } from "react-redux";
import { Headtag } from "../global";
import { darkValue, setDarkMode } from "../redux/slices/darkSlice";

export default function Home() {
  const dispatch = useDispatch();
  const darkThemeState = useSelector(darkValue);

  const handleDarkMode = () => darkThemeState === "light" ? (
    dispatch(setDarkMode("dark"))
  ) : (
    dispatch(setDarkMode("light"))
  );

  return (
    <div>
      <Headtag title="Omar's Portfolio | Resume" />

      <h1 onClick={() => handleDarkMode()}>Build something crazy</h1>
    </div>
  )
};