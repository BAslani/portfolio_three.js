import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react'

export default function About() {
  const [hasCopied, setHasCopied] = useState(false)
  function handleCopy() {
    navigator.clipboard.writeText('behzadaslani80@gmail.com')
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  // const shieldRing = { lat: 90, lng: 0 }

  return (
    <section id='about' className='c-space my-20'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid1.png'
              alt='grid-1'
              className='w-full sm:h-[276px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>Hi, I am Behzad</p>
              <p className='grid-subtext'>
                With 2 years of experience, I have honed my skills in fronend
                development.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid2.png'
              alt='grid-2'
              className='w-fullsm:w-[276px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>
                I specialize in JavaScript/TypeScript with a focus on React
                ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                globeImageUrl={
                  '//unpkg.com/three-globe/example/img/earth-night.jpg'
                }
                // ringsData={[shieldRing]}
                height={326}
                width={326}
                // ringAltitude={0.2}
                // ringColor={() => 'lightblue'}
                // ringMaxRadius={180}
                // ringPropagationSpeed={20}
                // ringRepeatPeriod={1400}
                backgroundColor='rgba(0,0,0,0)'
                showAtmosphere
                // globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                // bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                labelsData={[
                  {
                    lat: 35.6942,
                    lng: 51.4213,
                    text: 'I am here!',
                    color: 'white',
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className='grid-headtext'>
                I work remotely, across most timezones.
              </p>
              <p className='grid-subtext'>
                I'm based in Iran, with remote work available.
              </p>
              <Button title='Contact Me' isBeam containerClass='w-full mt-10' />
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid3.png'
              alt='grid-3'
              className='w-full sm:h-[266px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>My passion for coding</p>
              <p className='grid-subtext'>
                I love solving problems and building thing throug code.
              </p>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img
              src='/assets/grid4.png'
              alt='grid-4'
              className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
            />
            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Contact me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img
                  src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt='copy'
                />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient'>
                  behzadaslani80@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
