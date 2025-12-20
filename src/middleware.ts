import { clerkMiddleware, createRouteMatcher , auth} from '@clerk/nextjs/server'
import { routeAccessMap } from './app/(dashboard)/Settings'
import { NextResponse } from 'next/server';

const MatcherRole = Object.entries(routeAccessMap).map(
  ([route, allowedRoles]) => ({
    Matcher: createRouteMatcher([`/${route}(.*)`]),
    allowedRoles,
  })
)
console.log(MatcherRole)

export default clerkMiddleware(async (auth, req) => {
  const { userId , sessionClaims }= await (auth());

  const role =(sessionClaims?.metaData as {role ? : string })?.role

   for (const { Matcher, allowedRoles } of MatcherRole) {
      
    if( Matcher(req) && !allowedRoles.includes(role!)){
      console.log(Matcher(req))
      if(role){
      return NextResponse.redirect(new URL(`/${role}`,req.url))
      }
      else return NextResponse.redirect(new URL(`/sign-in`,req.url))

   }
  
  }

});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
} 
