import { useState } from 'react'
import { myProjects } from '../constants'

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  const projectsCount = myProjects.length
  const currentProject = myProjects[selectedProjectIndex]

  function handleNavigation(direction: 'prev' | 'next') {
    setSelectedProjectIndex((curr) => {
      if (direction === 'prev') {
        return curr === 0 ? projectsCount - 1 : curr - 1
      } else {
        return curr === projectsCount - 1 ? 0 : curr + 1
      }
    })
  }

  return (
    <section className='c-space my-20'>
      <p className='heat-text'>My Work</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
          <div className='absolute top-0 right-0'>
            <img
              src={currentProject.spotlight}
              alt='spotlight'
              className='w-full h-96 object-cover rounded-xl'
            />
          </div>
          <div
            className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg'
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt='logo'
              className='w-10 h-10 shadow-sm'
            />
          </div>
          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText'>
              {currentProject.title}
            </p>
            <p className='animatedText'>{currentProject.desc}</p>
            <p className='animatedText'>{currentProject.subdesc}</p>
          </div>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3'>
              {currentProject.tags.map((tag, index) => (
                <div key={index} className='tech-logo'>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className='flex items-center gap-2 cursor-pointer text-white-600'
              href={currentProject.href}
              target='_blank'
              rel='noreferrer'
            >
              <p>check Live site</p>
              <img
                src='/assets/arrow-up.png'
                className='w-3 h-3 '
                alt='arrow'
              />
            </a>
          </div>
          <div className='flex justify-between items-center mt-7'>
            <button
              className='arrow-btn'
              onClick={() => handleNavigation('prev')}
            >
              <img
                src='/assets/left-arrow.png'
                alt='left-arrow'
                className='w-4 h-4'
              />
            </button>
            <button
              className='arrow-btn'
              onClick={() => handleNavigation('next')}
            >
              <img
                src='/assets/right-arrow.png'
                alt='left-arrow'
                className='w-4 h-4'
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
