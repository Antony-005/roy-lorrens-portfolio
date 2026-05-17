import { Helmet } from 'react-helmet-async'
import Hero from '@sections/Hero'
import About from '@sections/About'
import Expertise from '@sections/Expertise'
import Experience from '@sections/Experience'
import Podcast from '@sections/Podcast'
import Book from '@sections/Book'
import Leadership from '@sections/Leadership'
import Education from '@sections/Education'
import Testimonials from '@sections/Testimonials'
import Resume from '@sections/Resume'
import Social from '@sections/Social'
import Contact from '@sections/Contact'
import Divider from '@ui/Divider'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Roy Lorrens Odhiambo | Learning Strategist · Podcast Host · Author</title>
        <meta name="description" content="Roy Lorrens Odhiambo — Learning Strategist, Host of AR-EL Podcast, and Author of Chasing Ayana. Empowering individuals and organizations through practical knowledge." />
      </Helmet>

      <Hero />
      <Divider />
      <About />
      <Divider />
      <Expertise />
      <Divider />
      <Experience />
      <Divider />
      <Podcast />
      <Divider />
      <Book />
      <Divider />
      <Leadership />
      <Divider />
      <Education />
      <Divider />
      <Testimonials />
      <Divider />
      <Resume />
      <Divider />
      <Social />
      <Divider />
      <Contact />
    </>
  )
}
