import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const state = reactive({
    sidebar: {
      opened: true,
      withoutAnimation: false
    },
    device: 'desktop',
    size: 'medium'
  });
  const toggleSideBar = () => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      state.sidebar.opened = true
    } else {
      state.sidebar.opened = false
    }
  }
  function closeSideBar(withoutAnimation:boolean){
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  }
  function toggleDevice( device:string){
    state.device = device
  }
  function setSize(size:string) {
    state.size = size
  }

  return { ...toRefs(state),toggleSideBar, closeSideBar, toggleDevice, setSize};
});
