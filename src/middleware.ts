import { clerkMiddleware, createRouteMatcher , auth} from '@clerk/nextjs/server'
import { routeAccessMap } from './app/(dashboard)/Settings'
import { NextResponse } from 'next/server';
 const MatcherRole = Object.keys(routeAccessMap).map((route , soure) => ({
   Matcher: createRouteMatcher([soure ? `/${route}` : `/${route}`]),
   allowedRoles: routeAccessMap[route],
   
 }));

export default clerkMiddleware(async (auth, req) => {
  const {sessionClaims }= await (auth());
  if(sessionClaims){
  const role = (sessionClaims?.metaData as {role ? : string | undefined}).role
 
   for (const { Matcher, allowedRoles } of MatcherRole) {
    if( Matcher(req) && !allowedRoles.includes(role!)){
     
      return NextResponse.redirect(new URL(`/${role}`,req.url))

   }
  
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
