import './Home.css';
import Searchbar from '../componets/Searchbar';
// import Hero from '../componets/Hero'
import NewInfo from '../componets/NewInfo';

const Home = () => {
  return (
    <div>
      <h1>AutoGuard</h1>
      <h2>Theft stops here</h2>
      <Searchbar />
      {/* <Hero /> */}
      <NewInfo />
    </div>
  )
}

export default Home
