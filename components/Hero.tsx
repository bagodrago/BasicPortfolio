

const Hero = () => {
  // TODO: Adjust alignment for lg+
  return (
    <section id="/" className="hero min-h-screen flex-1 relative overflow-hidden">
      {/*Background Image*/}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110 saturate-90 brightness-80"
        style={{backgroundImage: "url('/marble-bg.jpg')"}}
      />

      <div className='hero-overlay'/>

      <div className="hero-content flex-row m-10 space-x-10">
        <img
          src='/2023.png'
          alt="A picture of my handsome face. Trust me, I'm very handsome."
          className='max-w-sm rounded-lg shadow-2xl'
        />

        <div className="text-white text-right space-y-10">
          <h1 className="text-5xl font-bold">
            Let's make your <span className="text-accent italic">dream</span> projects a <span className="text-accent underline">reality</span>!
          </h1>

          <p className="text-xl">
            Developing quality products for your customers requires developers with an eye for detail and a passion for their work! Don't settle for less!
          </p>

          <div className="btn bg-base-100"> // TODO: Implement button
            See what I have to offer!
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero