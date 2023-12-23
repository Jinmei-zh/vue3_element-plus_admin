import router from "./router/index.js";
import { userStore, configStore, editorStore } from "@/stores";
import { getToken } from "@/utils/auth"; // get token from cookie

const whiteList = ["/login", "/share"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (whiteList.includes(to.path)) {
    next();
    return;
  }

  if (hasToken) {
    if (to.name === "login") {
      next({ name: "home" });
      return;
    }

    // if (to.name == "design" && to.query.pdocuct_id !== "0") {
    //   editorStore().activeIndex = 2
    // }

    const useUserStore = userStore();
    const hasGetUserInfo = useUserStore.info?.name;
    if (!hasGetUserInfo) {
      // 获取用户信息
      try {
        // get user info
        await useUserStore.getInfo();
        // 全局系统配置
        await configStore().initConfig();
      } catch (error) {
        // remove token and go to login page to re-login
        // await useUserStore.resetToken()
        // ElMessage.error(error || "Has Error")
        next(`/login?redirect=${to.path}`);
        return;
      }
    }
  } else if (whiteList.indexOf(to.path) == -1) {
    next(`/login?redirect=${to.path}`);
    return;
  }
  next();
});

router.afterEach(() => {});
