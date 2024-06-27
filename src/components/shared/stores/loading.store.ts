export const useLoadingStore = defineStore("LoadingStore", () => {
  const isLoading = ref(false);

  const onSetIsLoading = (value: boolean) => (isLoading.value = value);

  return {
    isLoading,
    onSetIsLoading,
  };
});
