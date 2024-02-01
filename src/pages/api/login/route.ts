import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("HEYYY");
  
  if (!req.body) {
    return NextResponse.json({ error: `provide something` }, { status: 404 })
  }
  const body = await req.json();

  if (body.email === "clasing@test.com" && body.password === "1234567") {
    return NextResponse.json({ token: `K2OH2FT3W03AQHX565UR40PIEWXXJYJYTRW87GBKZKH3ER3I3L2HFYRPM6PB6TTBJY6TBLZD9IFXD5IRS0BK6MY8WKULWE5XQZEP8T08Z6GYRWXVVBU6PDIZMTCTYHF` }, { status: 200 })
  }else{
    return NextResponse.json({ error: `invalid credentials` }, { status: 403 })
  }

}