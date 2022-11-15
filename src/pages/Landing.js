import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Learnmore from '../components/Learnmore'
import SecI from '../components/SectionI/Token'
import SecII from '../components/SecII/Row01'

const Landing = (props) => {

  const { nfts }= props;

    const title = "Inspiration for your next adventure"
  return (
    <div>
        <div className='mb-[5%]' >
        <Navbar />
        </div>
        <Hero /> 
        <div className='mt-[5%]'>
        <SecI />  
        </div>
        <h1 className='mt-[3%] mb-[3%] text-center text-[48px] font-[700]'>{title}</h1>
        <SecII nfts={nfts}/>
        <div className='mt-[5%]'>
        <Learnmore />
        <Footer />
        </div>
    </div>
  )
}

export default Landing;