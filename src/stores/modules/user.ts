import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref();

  const getUser = () => {};
  //   const doubleCount = computed(() => count.value * 2);
  //   function increment() {
  //     count.value++;
  //   }
  //   return { count, doubleCount, increment };
});
