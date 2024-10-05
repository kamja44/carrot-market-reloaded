interface IGithubUserProfile {
  id: number;
  avatar_url: string;
  login: string;
}

export async function getUserProfile(
  access_token: string
): Promise<IGithubUserProfile> {
  const userProfileResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-cache",
  });
  return await userProfileResponse.json();
}

interface IGithubUserEmail {
  email: string;
  primary: boolean;
  verified: boolean;
  visibility: string | null;
}

export async function getUserEmail(
  access_token: string
): Promise<IGithubUserEmail> {
  const userEmailResponse = await fetch("https://api.github.com/user/emails", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-cache",
  });
  if (!userEmailResponse.ok) {
    throw new Error("Failed to fetch user Email");
  }

  const emails = await userEmailResponse.json();

  const primaryEmail = emails.find(
    (email: IGithubUserEmail) => email.primary && email.verified
  );
  return primaryEmail;
}
