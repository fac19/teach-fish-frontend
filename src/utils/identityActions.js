import netlifyIdentity from "netlify-identity-widget";

export function loginUser() {
  console.log(netlifyIdentity);
  if (netlifyIdentity && netlifyIdentity.currentUser()) {
    const {
      app_metadata,
      created_at,
      confirmed_at,
      email,
      id,
      user_metadata,
    } = netlifyIdentity.currentUser();

    // token
    console.log(netlifyIdentity.currentUser().token.access_token);

    localStorage.setItem(
      "token",
      JSON.stringify({
        ...app_metadata,
        created_at,
        confirmed_at,
        email,
        id,
        ...user_metadata,
      }),
    );
  }
}

export function logoutUser() {
  localStorage.removeItem("token");
}
