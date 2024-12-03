export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path.includes("index.html")) {
    return navigateTo({
      path: "/",
      replace: true,
    });
  }
});
