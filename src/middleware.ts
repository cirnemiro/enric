import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  console.log("middleware GEO",req.geo);
  // console.log(req.headers.get("cf-ipcountry"));
  // console.log("HEADERS",req.headers);
  
  
}
 
