import { Carousel } from "./carousel"


export const HeroCarouselSection = () => {
     
    
     const carouselSlides = [
    {
      id: 1,
      title: "",
      subtitle:" ",
      cta: "t.hero.cta1",
      image: "/african-woman-holding-continent.png",
      mobileImage: "/african-woman-holding-continent.png",
    },
    {
      id: 2,
      title:"",
      subtitle: "",
      cta:" t.hero.cta1",
      image: "/amanicraftsslid.jpg",
      mobileImage: "/amanicraftsslid.jpg",
    },
    {
      id: 3,
      title:"",
      subtitle: "",
      cta:" t.hero.cta1",
      image: "/amanicraftsslid.jpg",
      mobileImage: "/amanicrafts7.jpg",
    },
   
  ]
  return (
    <>
        <section className="relative h-[75vh] flex flex-col items-center justify-center">
        <Carousel slides={carouselSlides} />
      </section></>
  )
}
