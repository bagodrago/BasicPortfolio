import ProjectCard from './ProjectCard';

const Projects = () => {
    // TODO: Choose better background
  return (
    <section id="projects" className="projects">
      
      {/*Text*/}
      <div className='my-10 mx-10 lg:mx-50 relative'>
        <h2 className='text-5xl font-semibold'>
          My Projects
        </h2>
        <p  className='mt-3'>
          Come see what I've been working on...!
        </p>
      </div>

      {/*Project Cards*/}
      <div className='project__deck'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>

      {/*Gradient Layer*/}
      <div className='project__gradient'/>

      {/* TODO: Include button functionality with state to toggle height and gradient */}
      {/*Divider*/}
      <div className='divider absolute bottom-5 left-10 right-10 z-10 h-12 items-center'>
        <button className='btn mb-5'>
          Show all projects
        </button>
      </div>

    </section>
  )
}

export default Projects