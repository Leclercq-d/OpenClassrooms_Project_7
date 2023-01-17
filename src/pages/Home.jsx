import '../styles/Home.scss';
import HomeBanner from '../components/HomeBanner'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <div className='home'>
    <HomeBanner/>
    <Gallery/>
  </div>
  );
}

export default Home;
