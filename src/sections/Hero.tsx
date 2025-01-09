import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, Vector3 } from '@react-three/fiber'
import { Leva } from 'leva'
import { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'
import CanvasLoader from '../components/CanvasLoader'
import HackerRoom from '../components/HackerRoom'
import HeroCamera from '../components/HeroCamera'
import ReactLogo from '../components/ReactLogo'
import Ring from '../components/Reing'
import { calculateSizes } from '../constants'

export default function Hero() {
  const isSmall = useMediaQuery({
    maxWidth: 480,
  })
  const isMobile = useMediaQuery({
    maxWidth: 768,
  })
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1024,
  })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='hero_tag font-gotham text-gray_gradient'>
          Building Products
        </p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        <Leva />
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition as Vector3}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              {!isMobile && (
                <>
                  {/* <Target position={sizes.targetPosition as Vector3} /> */}
                  <ReactLogo />
                  {/* <Cube position={sizes.cubePosition as Vector3} /> */}
                  <Ring position={sizes.reactLogoPosition} />
                </>
              )}
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href='#about' className='w-fit'>
          <Button
            title={"Let's work together"}
            isBeam
            containerClass='sm:w-fit w-full sm:min-w-96'
          />
        </a>
      </div>
    </section>
  )
}
