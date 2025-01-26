import HomeHeader from '@/components/homePage/HomeHeader';
import HomeHero from '@/components/homePage/HomeHero';
import HomeAbout from '@/components/homePage/HomeAbout';
import FoodCategory from '@/components/homePage/FoodCategory';
import BlogPosts from '@/components/homePage/BlogPosts';
import MeetOurChef from '@/components/homePage/MeetOurChefs';
import Testemonials from '@/components/homePage/Testemonials';
import ResturantActiveProcess from '@/components/homePage/ResturantActiveProcess';
import FromOurMenu from '@/components/homePage/FromOurMenu';
import Experience from '@/components/homePage/Experience';
import HomeFooter from '@/components/homePage/HomeFooter'


const Home = () => {
  return (
    <main className='bg-[#0D0D0D]'>
      <HomeHeader/>
      <HomeHero/>
      <HomeAbout/>
      <FoodCategory/>
      <Experience/>
      <FromOurMenu/>
      <MeetOurChef/>
      <Testemonials/>
      <ResturantActiveProcess/>
      <BlogPosts/>
      <HomeFooter/>
    </main>
  )
}

export default Home;