import Logo from "../assets/game-logo.png";
export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Tic Tac Toe" />
      <h1>Tic Tac Toe</h1>
    </header>
  );
}
