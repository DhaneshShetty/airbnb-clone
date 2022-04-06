import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import FullSizeCard from '../components/FullSizeCard'
import FooterLinks from '../components/FooterLinks'

export default function Home({exploreData,thingsToDo}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className="max-w-screen-2xl mx-auto py-8">
        <h1 className="text-4xl text-black font-sans font-semibold px-8 py-4">Inspiration for your next trip</h1>
        <div className="flex overflow-auto">
        {exploreData?.map((item) =>(
          <SmallCard img={item.img} place={item.title} distance={item.dist}/>
        ))}   
        </div> 
        <h1 className="text-4xl text-black font-sans font-semibold px-8 py-4">Discover Airbnb Experiences</h1>
        <div className='flex flex-col md:flex-row'>
          {thingsToDo?.map((item)=>(
             <LargeCard img={item.img} title={item.title} buttonText={item.buttonText}/>
          )
          )}         
        </div> 
        <FullSizeCard img="https://a0.muscache.com/im/pictures/83f0dc6f-9290-46f6-9db5-339d525b44d1.jpg?im_w=1920" title="Questions about hosting?" buttonText="Ask a Superhost"/>   
      </main>
      <footer className='bg-gray-300 w-full px-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 place-items-center py-10'>
          <FooterLinks heading="Support" links={["Help Center","Safety Information","Cancellation options","Our COVID-19 Response","Supporting people with disabilities","Report a neighbourhood concern"]}/>
          <FooterLinks heading="Community" links={["Help Center","Safety Information","Cancellation options","Our COVID-19 Response","Supporting people with disabilities","Report a neighbourhood concern"]}/>
          <FooterLinks heading="Hosting" links={["Help Center","Safety Information","Cancellation options","Our COVID-19 Response","Supporting people with disabilities","Report a neighbourhood concern"]}/>
          <FooterLinks heading="About" links={['Help Center','Safety Information','Cancellation options','Our COVID-19 Response','Supporting people with disabilities','Report a neighbourhood concern']}/>
        </div>
      </footer>
      </div>    
  )
}

export function getStaticProps(){
  const exploreData=[
    {'img':'https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320','title':'Lonavala','dist':'66 kilometers away'},
    {'img':'https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=320','title':'Alibag','dist':'36 kilometers away'},
    {'img':'https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=320','title':'Calangute','dist':'396 kilometers away'},
    {'img':'https://a0.muscache.com/im/pictures/85bff6ba-f4d0-4094-926e-a4fbc21bab4e.jpg?im_w=320','title':'Karjat','dist':'53 kilometers away'},
  ]
  const thingsToDo=[
    {'img':'https://a0.muscache.com/im/pictures/35612883-8e4c-440a-a768-ca7f268bd294.jpg?im_w=720','title':'Things to do on your trip','buttonText':'Experiences'},
    {'img':'https://a0.muscache.com/im/pictures/aec597d9-9c5c-4746-965c-d3e1643299f7.jpg?im_w=720','title':'Things to do from home','buttonText':'Online Experiences'}
  ]
  //https://a0.muscache.com/im/pictures/aa630fb7-eeb3-4fc1-aa69-456c0eb83d8b.jpg?im_w=1440
  return {
    props:{
      exploreData,
      thingsToDo
    }

  }
}
