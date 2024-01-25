import { ModeToggle } from "./ui/mode-toggle";

const Header = () => {
  return (
    <div className="flex text-center justify-between">
      <h1 className="font-bold text-3xl text-primary">Movisis Ecommerce</h1>
      <ModeToggle />
    </div>
  );
};

export default Header;
