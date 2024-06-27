import { vMaska, Mask } from "maska";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("maska", vMaska);

  const handleMask = (value: string, mask: string) => {
    const maskObject = new Mask({ mask });
    return maskObject.masked(value);
  };

  return {
    provide: {
      mask: handleMask,
    },
  };
});
