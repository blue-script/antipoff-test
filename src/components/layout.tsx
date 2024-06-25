import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'
import {Outlet} from 'react-router-dom'

type Props = ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, Props>(({ className, ...rest }, ref) => {

  return (
    <div className={className} ref={ref} {...rest}>
      {/*<Header />*/}
      <main>
        <Outlet />
      </main>
    </div>
  )
})