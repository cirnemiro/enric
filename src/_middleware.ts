// import { routes } from 'constants/routes'
import { NextRequest, NextResponse } from 'next/server'
// import { jwtDecode } from 'utils/jwtDecode'

const PUBLIC_FILE = /\.(.*)$/
// const PROTECTED_ROUTES = '/route' 

export async function middleware(req: NextRequest) {
 
 const headers = req.headers
 console.log("HEADERS",req.geo,req.geo?.country,"HEADERS");

}
