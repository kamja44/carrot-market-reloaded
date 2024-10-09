import { accessToken } from "@/lib/auth/accessToken";
import { getUserEmail, getUserProfile } from "@/lib/auth/github";
import db from "@/lib/db";
import userLogin from "@/lib/userLogin";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }
  const { error, access_token } = await accessToken(code);
  if (error) {
    return new Response(null, {
      status: 400,
    });
  }
  const { id, avatar_url, login } = await getUserProfile(access_token);
  const user = await db.user.findUnique({
    where: {
      github_id: id + "",
    },
    select: {
      id: true,
    },
  });

  if (user) {
    await userLogin(user);
  }

  const existsUsername = await db.user.findUnique({
    where: {
      username: login,
    },
    select: {
      id: true,
    },
  });

  const { email, primary, verified, visibility } = await getUserEmail(
    access_token
  );
  const existsUserEmail = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  const newuser = await db.user.create({
    data: {
      username: existsUsername ? `${login}-gh` : login,
      github_id: id + "",
      avatar: avatar_url,
      email: existsUserEmail ? null : email,
    },
    select: {
      id: true,
    },
  });
  await userLogin(newuser);
}
