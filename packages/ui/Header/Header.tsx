import { Menu } from "./components";

export default function Header() {
  return (
    <div className="items-baseline justify-between border-b-2 border-black px-20 pb-7 pt-16 sm:flex">
      <h1 className="text-6xl">Jhon Salazar</h1>
      <Menu />
    </div>
  );
}
