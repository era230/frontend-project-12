import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>Hello!
      <Link to={`/login`}>Авторизация</Link>
    </div>
  )
}

export default HomePage;