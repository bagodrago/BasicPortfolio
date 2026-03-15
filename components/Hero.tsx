

const Hero = () => {
  return (
    <section className="hero min-h-screen pt-17 flex-1 relative overflow-hidden">
      {/*Background Image*/}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110 saturate-90 brightness-80"
        style={{backgroundImage: "url('/marble-bg.jpg')"}}
      />

      <div className='hero-overlay'/>

      <div className="hero-content text-neutral-content text-center">
        <div className='max-w-md'>
          <h1>TEST</h1>
        </div>
      </div>
      
    </section>
  )
}

export default Hero