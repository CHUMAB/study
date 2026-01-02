import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//import my_user_model from "../../../database/models";
//import db_connect from "../../../database/db-connection";

const db = db_connect();

export async function POST(req) {
  // Ensure JWT secret exists
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: 'Server misconfiguration: JWT_SECRET missing' },
      { status: 500 }
    );
  }

  // Parse JSON body properly (req.body doesn't exist in App Router)
  const { user_name, user_password } = await req.json();

  if (!user_name || !user_password) {
    return NextResponse.json({ authenticated: false, reason: 'Invalid credentials - user_name or user_password is blank' }, { status: 401 });

  } else {
    // what to query our database for
    const user_query         = { username: user_name };
    const user_query_results =  await my_user_model.find(user_query);
    const user               = user_query_results[0];
    
    // if the first result matches our passed in user_name, then it must match
    if ( user?.username === user_name) {
      
      // Verify credentials (for demo, it always matches)
      const ok = await bcrypt.compare(user_password, user?.password);
      
      if (!ok) {
        return NextResponse.json({  authenticated: false, error: 'Invalid Credentials - Error #2' }, { status: 401 });
      } else {
        // Create JWT token
        const token = jwt.sign({ id: user.user_id, role: user.role }, secret, { expiresIn: '1h' });

        // Return response and set HttpOnly cookie
        const res = NextResponse.json({ 
            authenticated: true, 
            account: { 
              user_id: user.user_id, 
              username: user.username, 
              name: user.name
            } 
          }, 
          { status: 200 }
        );

        res.cookies.set('token', token, {
          httpOnly: true,
          secure: true,        // change to false for local http:// testing
          sameSite: 'lax',
          path: '/',
          maxAge: 60 * 60,     // 1 hour
        });

        return res;
      }

    } else {
        return NextResponse.json({  authenticated: false, reason: 'Invalid Credentials - Error #3' }, { status: 401 });
    }
  }
}

// Optional: reject non-POST requests
export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}