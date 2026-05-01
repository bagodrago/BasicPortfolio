import ScrollLink from "./ScrollLink";

const Hero = () => {
  return (
    <section id="/" className="hero">
      {/* TODO: Scale correctly with screen */}
      {/*Background Layer*/}
      <div
        className="my-bg"
        style={{backgroundImage: "url('/marble-bg.jpg')"}}
      />

      {/*Hero Content*/}
      <div className="hero-content flex-row m-10 space-x-25 2xl:max-w-390">

        {/*Photo*/}
        {/* TODO: Put photo image in a mask */}
        <img
          src='/2023.png'
          alt="A picture of my handsome face. Trust me, I'm very handsome."
          className='max-w-sm rounded-lg shadow-2xl'
        />

        {/*Text*/}
        <div className="text-white text-left space-y-10 w-230">
          <h1 className="font-bold text-5xl 2xl:text-6xl">
            Let's make your <span className="text-accent italic">dream</span> projects a <span className="text-accent underline">reality</span>!
          </h1>

          <p className="text-xl 2xl:text-2xl">
            Developing <b>quality products</b> for your customers requires developers with an <b>eye for detail</b> and a <b>passion for their work</b>! Don't settle for less!
          </p>

          {/*Explore Button*/}
          <button className="btn btn-xl rounded-xl hero__btn">
            <ScrollLink href="about">
              See what I have to offer!
            </ScrollLink>
          </button>
        </div>
      </div>
      
    </section>
  )
}

export default Hero