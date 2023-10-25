import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultTemplate } from "./components/templates/DefaultTemplate";
import { Router } from "./router/Router";

export default function App() {
  return <Router />;
}
