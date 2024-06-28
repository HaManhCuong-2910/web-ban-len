import Vue3Toastify, {
  updateGlobalOptions,
  type ToastContainerOptions,
  toast,
} from "vue3-toastify";
import type { ETypeNotification } from "~/src/components/shared/domain/models/notificaion/notificaion.model";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 1000,
    rtl: true,
    dangerouslyHTMLString: false,
  } as ToastContainerOptions);

  const notification = (type: ETypeNotification, message: string) => {
    const { isMobile } = useDevice();
    updateGlobalOptions();
    const customId = "prevent-duplicate";
    toast(message, {
      toastId: customId,
      theme: "colored",
      position: isMobile ? "top-right" : "bottom-right",
      type,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
    });
  };

  return {
    provide: {
      notify: (type: ETypeNotification, message: string) => {
        return notification(type, message);
      },
    },
  };
});
