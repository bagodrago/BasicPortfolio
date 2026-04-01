import Link from "next/link";

const Hero = () => {
  // TODO: Adjust alignment for lg+
  return (
    <section id="/" className="hero min-h-screen flex-1 relative overflow-hidden">
      {/*Background Layer*/}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110 saturate-90 brightness-80"
        style={{backgroundImage: "url('/marble-bg.jpg')"}}
      />

      {/*Hero Content*/}
      <div className="hero-content flex-row m-10 space-x-10">

        {/*Photo*/}
        {/* TODO: Put photo image in a mask */}
        <img
          src='/2023.png'
          alt="A picture of my handsome face. Trust me, I'm very handsome."
          className='max-w-sm rounded-lg shadow-2xl'
        />

        {/*Text*/}
        <div className="text-white text-right space-y-10">
          <h1 className="text-5xl font-bold">
            Let's make your <span className="text-accent italic">dream</span> projects a <span className="text-accent underline">reality</span>!
          </h1>

          <p className="text-xl">
            Developing <b>quality products</b> for your customers requires developers with an <b>eye for detail</b> and a <b>passion for their work</b>! Don't settle for less!
          </p>

          {/*Explore Button*/}
          <div className="btn bg-base-100 hover:bg-primary hover:text-primary-content text-xs md:text-sm">
            <Link href="#about" replace>
              See what I have to offer!
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero