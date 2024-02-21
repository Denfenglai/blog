// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  {
    text: "Yunzai-Bot\u7D22\u5F15\u5E93",
    icon: "book",
    link: "https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index"
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/": [
    "",
    {
      text: "\u6587\u7AE0",
      icon: "book",
      prefix: "posts/",
      children: "structure"
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://blog.dengfenglai.cloud/",
  author: {
    name: "\u7B49\u98CE\u6765",
    url: "https://dengfenglai.cloud/"
  },
  iconAssets: "iconfont",
  // 指定图标选项
  // iconAssets: "fontawesome-with-brands",
  logo: "/logo.png",
  repo: "Denfenglai/blog",
  docsDir: "src",
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebar_default,
  footer: "DengFengLai",
  // 显示脚页
  displayFooter: true,
  blog: {
    intro: "/intro.html",
    medias: {
      Baidu: "https://mr.baidu.com/r/19wFkMt0Gt2?f=cp&u=4d151be3e49afc29",
      BiliBili: "https://b23.tv/8sOJIMw",
      Discord: "https://discord.gg/VxqGvm5FKE",
      //      Email: "http://3139373986@qq.com",
      Gitee: "https://gitee.com/DengFengLai-F",
      GitHub: "https://github.com/Denfenglai",
      //      Gmail: "http://dengfenglai547@gmail.com",
      QQ: "http://qq.dengfenglai.cloud/"
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"]
    }
  },
  // page meta
  metaLocales: {
    editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
  },
  plugins: {
    blog: true,
    /** 启动评论服务 */
    comment: {
      provider: "Waline",
      serverURL: "https://waline-two-vert.vercel.app/"
    },
    components: {
      // 组件
      components: [
        "BiliBili"
      ]
    },
    copyCode: {
      showInMobile: true
    },
    //在移动端启用复制代码
    mdEnhance: {
      hint: true,
      VPCard: true,
      //启用卡片
      figure: true,
      // 启用 figure
      imgLazyload: true,
      // 启用图片懒加载
      imgMark: true,
      // 启用图片标记
      imgSize: true,
      // 启用图片大小
      codetabs: true,
      // 多行代码块
      mark: true,
      //标记        
      align: true,
      attrs: true,
      demo: true,
      include: true,
      playground: {
        presets: ["ts", "vue"]
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true
    }
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "\u7B49\u98CE\u6765\u7684\u535A\u5BA2",
  description: "\u7B49\u98CE\u6765\u7684\u535A\u5BA2",
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9kZmwvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvZGZsL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL2RmbC9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJcdTdCNDlcdTk4Q0VcdTY3NjVcdTc2ODRcdTUzNUFcdTVCQTJcIixcbiAgZGVzY3JpcHRpb246IFwiXHU3QjQ5XHU5OENFXHU2NzY1XHU3Njg0XHU1MzVBXHU1QkEyXCIsXG5cbiAgdGhlbWUsXG5cbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXG4gIC8vIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9kZmwvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvZGZsL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvZGZsL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcblxuY29uc3QgTVJfSE9QRV9BVkFUQVIgPVxuICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjI0NzggLjc4MTMzIC0yLjU0Nzk3IC42MzYyMiA5MTAuMzUgMjgxLjU4KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGlkPVwiYVwiIHgxPVwiMzcuODI3XCIgeDI9XCIxNTkuOTg4XCIgeTE9XCIyNzIuOTE2XCIgeTI9XCIyNzQuNjNcIj48c3RvcCBvZmZzZXQ9XCIuNzVcIiBzdG9wLWNvbG9yPVwiI2UzMzkzOVwiLz48c3RvcCBvZmZzZXQ9XCIuOTk4XCIgc3RvcC1jb2xvcj1cIiNmZmZcIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjEzODE0IC44MDc5NyAyLjU1NTk5IC0uNjAzMiAzNC4wODcgNDk0LjM2OSlcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBpZD1cImJcIiB4MT1cIjM3LjgyN1wiIHgyPVwiMTU5Ljk4OFwiIHkxPVwiMjcyLjkxNlwiIHkyPVwiMjc0LjYzXCI+PHN0b3Agb2Zmc2V0PVwiLjgxNVwiIHN0b3AtY29sb3I9XCIjZTMzOTM5XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2ZmZlwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPVwiTTEzNS42MzcgNTg4LjA2N2MtNDguODkxLTIwMS4zMzQgNzQuNjA1LTQwNC4xNjIgMjc1LjgzNy00NTMuMDI4IDIwMS4yMzMtNDguODY2IDQwMy45OTggNzQuNzM0IDQ1Mi44ODkgMjc2LjA2OCA0OC44OTIgMjAxLjMzNS03NC42MDYgNDA0LjE2Mi0yNzUuODM4IDQ1My4wMjktMjAxLjIzMyA0OC44NjYtNDAzLjk5Ny03NC43MzQtNDUyLjg4OC0yNzYuMDY5WlwiIGZpbGw9XCIjZmRlNjhhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMFwiLz48cGF0aCBkPVwiTTU5Ni4wNzYgMTk3LjA0NGMtMy4zNDItNTYuMDkgNTYuODk3LTc3LjgzMSA4OS4wMTctNTEuMzYxbS00MTAuNjUgMTI4LjgxOWMtMjIuNzUzLTUxLjM3Ny04Ni4yNTYtNDMuMDctMTAyLjY1OS00LjgxNlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjExXCIvPjxwYXRoIGQ9XCJNODMzLjU2OCAyODguMDJjLjA1IDE4LjA0Ni0xMi41ODQgMzAuNjk5LTIxLjM0NiAzMi4yMTEtOC43NjIgMS41MTItMTcuMDMxLTEuMDk5LTE4LjU4NC0xLjM0MSAwIDAtNjEuMzYzLTYuMTAzLTEwNS42MjcgNi45MjEtNDQuMjY1IDEzLjAyNi04Ny4wNCA0Ny4zODctOTQuNjM3IDUxLjg5Mi02LjYyNyAzLjkyOC0yOS4xMTIgNy42OTctNDQuNDYyLTEyLjkzOC0xNS4zNTEtMjAuNjM2LjAyNC00MS41MjYuMDI0LTQxLjUyNnMxMi42ODUtMTguMjc5IDQwLjc3MS0zNS4xMjNjMjguMDg4LTE2Ljg0NCAyNC42MjQtMTMuMjI2IDUyLjMyNi0yNS42OTYgMTUuMjQ3LTYuODY1IDQzLjMxOS0xNC4xODYgNjcuNDI5LTE3LjA2OSAyNS4xOTMtMy4wMTEgNDYuMzQ4LTEuMzg0IDU3LjY3My43NjkgMjIuMTY1IDQuMjEyIDI4LjYzMiA1LjkzIDM5LjE2OSA5LjIyOSAxMi40NTEgMy44OTggMjcuMjE0IDE0LjUxNiAyNy4yNjQgMzIuNjcxWlwiIGZpbGw9XCIjZmZmXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI4XCIvPjxwYXRoIGQ9XCJNNTU4LjM1MSAzNDUuNjMyYy0zLjQ1OC0xNC4yMzcgNS4yMTQtMjguNTY2IDE5LjM2Ny0zMi4wMDMgMTQuMTU0LTMuNDM3IDI4LjQzIDUuMzIgMzEuODg3IDE5LjU1NyAzLjQ1OCAxNC4yMzgtNS4yMTIgMjguNTY3LTE5LjM2NyAzMi4wMDQtMTQuMTUyIDMuNDM3LTI4LjQzLTUuMzE5LTMxLjg4Ny0xOS41NThaXCIgZmlsbD1cIiM2ZDVlNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjYuMjY4XCIvPjxwYXRoIGQ9XCJNMjIwLjI0OSA0ODMuNDE2YzQ2LjgxLTExLjY4OSA5MS4zMjMtLjQ2NyA5OS40MiAyNS4wNjQgOC4wOTggMjUuNTMyLTIzLjI4NiA1NS43MDYtNzAuMDk3IDY3LjM5My00Ni44MTEgMTEuNjg5LTkxLjMyMy40NjctOTkuNDItMjUuMDY0LTguMDk3LTI1LjUzMiAyMy4yODYtNTUuNzA2IDcwLjA5Ny02Ny4zOTNaXCIgZmlsbD1cInVybCgjYSlcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgb3BhY2l0eT1cIi4yNjFcIi8+PHBhdGggZD1cIk03MzkuOSAzNTcuMjI2Yy00Ni45NTkgMTEuMDgyLTgxLjM2NyA0MS40NjktNzYuODUzIDY3Ljg3MSA0LjUxNCAyNi40MDIgNDYuMjQxIDM4LjgyMSA5My4xOTggMjcuNzM4IDQ2Ljk1OC0xMS4wODEgODEuMzY2LTQxLjQ2NyA3Ni44NTMtNjcuODY5LTQuNTE0LTI2LjQwMy00Ni4yNDEtMzguODIxLTkzLjE5OC0yNy43NFpcIiBmaWxsPVwidXJsKCNiKVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBvcGFjaXR5PVwiLjI2MVwiLz48cGF0aCBkPVwiTTQwMC45MzQgMzk4LjkxN2MtLjU5OSAxOC4wMzQtMTMuNjgxIDMwLjIxOC0yMi40OTQgMzEuNDA5LTguODEyIDEuMTkyLTE2Ljk4Mi0xLjcxNi0xOC41MjYtMi4wMTQgMCAwLTYxLjEwOS04LjMzNC0xMDUuODE5IDMuMDctNDQuNzA5IDExLjQwNC04OC42OTYgNDQuMTgxLTk2LjQ1MiA0OC40MDYtNi43NjMgMy42ODMtMjkuMzcyIDYuNjMyLTQzLjk3Mi0xNC41NDYtMTQuNi0yMS4xOCAxLjUxOS00MS40OTQgMS41MTktNDEuNDk0czEzLjMzNS0xNy44MDMgNDIuMDEzLTMzLjYxMmMyOC42NzctMTUuODA5IDI1LjA4NS0xMi4zMTkgNTMuMjIyLTIzLjc3MiAxNS40ODQtNi4zMDQgNDMuODAzLTEyLjU5OCA2OC4wMDUtMTQuNiAyNS4yODgtMi4wOTMgNDYuMzczLjMwNSA1Ny42MTYgMi44NjcgMjIgNS4wMTYgMjguNDAxIDYuOTY4IDM4LjgxMyAxMC42NDkgMTIuMzA0IDQuMzQ4IDI2LjY3NyAxNS40OTYgMjYuMDc1IDMzLjYzN1pcIiBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiOFwiLz48cGF0aCBkPVwiTTEyOS4wNSA0NDUuNTQ2Yy0zLjQ1OC0xNC4yMzkgNS4yMTMtMjguNTY2IDE5LjM2Ny0zMi4wMDMgMTQuMTUzLTMuNDM3IDI4LjQyOSA1LjMxOCAzMS44ODcgMTkuNTU3IDMuNDU4IDE0LjIzOC01LjIxMyAyOC41NjYtMTkuMzY3IDMyLjAwMy0xNC4xNTMgMy40MzctMjguNDMtNS4zMTgtMzEuODg3LTE5LjU1N1pcIiBmaWxsPVwiIzZkNWU1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjNmQ1ZTU2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiNi4yNjhcIi8+PHBhdGggZD1cIk00MjQuMzgxIDY5Ni4zODZzNjQuNDI3IDEzLjY0NiAxMDEuOTk2IDUuNzU3QzY0MC42NTMgNjc4LjE0NiA2OTAuOCA1MjEuODk0IDY5MC44IDUyMS44OTRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMVwiLz48cGF0aCBkPVwiTTc5Ni4wNCA2NjYuNzc0cy0xMC43MzQtNDQuMTY1LTQxLjQwNS0xMS4zNDhjLTkuNjgxIDEwLjM1OS0xMC40MzggNDAuNjA0LTI4LjIxNyA4MS44OS0xNS45NDIgMzcuMDItMzkuNTY0IDYwLjcyOC00Mi45MzggNzYuMDYzLTMuMzc0IDE1LjMzNS40NTEgMzUuOTkyIDI2LjM1MiA0MS41MzcgMjUuOTAyIDUuNTQ1IDQxLjk2Ny0yMy4zODEgNDEuOTY3LTIzLjM4MWw0NC4yNDEtMTY0Ljc2MVpcIiBmaWxsPVwiI2ZkZTY4YVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTBcIi8+PHBhdGggZD1cIk03OTMuMzM3IDY2NC43MzRjLTM3LjA3NSAxNjAuMDQ1LTUxLjczIDE2My4xNDUtNDAuMzQzIDE4NC44NDUgMTEuMzg3IDIxLjcwMSA1MS40MTcgMzMuNzE2IDcxLjg3Ni03LjMxMyA2LjczNC0xMy41MDUtMS4zMS00My4zMTctMS41MTEtNzguMDc3LS4zMDctNTMuMDYgMTYuODY1LTg2LjExMSAxMC40MDMtOTguMS0xNS4zMzItMjguNDUyLTM5LjM3Ny01Ljg3NS00MC40MjUtMS4zNTVaXCIgZmlsbD1cIiNmZGU2OGFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEwXCIvPjwvc3ZnPic7XG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vYmxvZy5kZW5nZmVuZ2xhaS5jbG91ZC9cIixcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIlx1N0I0OVx1OThDRVx1Njc2NVwiLFxuICAgIHVybDogXCJodHRwczovL2RlbmdmZW5nbGFpLmNsb3VkL1wiLFxuICB9LFxuXG4gICAgaWNvbkFzc2V0czogXCJpY29uZm9udFwiLCAvLyBcdTYzMDdcdTVCOUFcdTU2RkVcdTY4MDdcdTkwMDlcdTk4NzlcbiAgLy8gaWNvbkFzc2V0czogXCJmb250YXdlc29tZS13aXRoLWJyYW5kc1wiLFxuXG4gIGxvZ286IFwiL2xvZ28ucG5nXCIsXG5cbiAgcmVwbzogXCJEZW5mZW5nbGFpL2Jsb2dcIixcblxuICBkb2NzRGlyOiBcInNyY1wiLFxuXG4gIC8vIG5hdmJhclxuICBuYXZiYXIsXG5cbiAgLy8gc2lkZWJhclxuICBzaWRlYmFyLFxuXG4gIGZvb3RlcjogXCJEZW5nRmVuZ0xhaVwiLFxuICBcbiAgLy8gXHU2NjNFXHU3OTNBXHU4MTFBXHU5ODc1XG4gIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgYmxvZzoge1xuICAgIGludHJvOiBcIi9pbnRyby5odG1sXCIsXG4gICAgbWVkaWFzOiB7XG4gICAgICBCYWlkdTogXCJodHRwczovL21yLmJhaWR1LmNvbS9yLzE5d0ZrTXQwR3QyP2Y9Y3AmdT00ZDE1MWJlM2U0OWFmYzI5XCIsXG4gICAgICBCaWxpQmlsaTogXCJodHRwczovL2IyMy50di84c09KSU13XCIsXG4gICAgICBEaXNjb3JkOiBcImh0dHBzOi8vZGlzY29yZC5nZy9WeHFHdm01RktFXCIsXG4vLyAgICAgIEVtYWlsOiBcImh0dHA6Ly8zMTM5MzczOTg2QHFxLmNvbVwiLFxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9naXRlZS5jb20vRGVuZ0ZlbmdMYWktRlwiLFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZW5mZW5nbGFpXCIsXG4vLyAgICAgIEdtYWlsOiBcImh0dHA6Ly9kZW5nZmVuZ2xhaTU0N0BnbWFpbC5jb21cIixcbiAgICAgIFFROiBcImh0dHA6Ly9xcS5kZW5nZmVuZ2xhaS5jbG91ZC9cIixcbiAgICB9LFxuICB9LFxuXG4gIGVuY3J5cHQ6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIFwiL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXG4gICAgfSxcbiAgfSxcblxuICAvLyBwYWdlIG1ldGFcbiAgbWV0YUxvY2FsZXM6IHtcbiAgICBlZGl0TGluazogXCJcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVwiLFxuICB9LFxuXG4gIHBsdWdpbnM6IHtcbiAgICBibG9nOiB0cnVlLFxuICAgIC8qKiBcdTU0MkZcdTUyQThcdThCQzRcdThCQkFcdTY3MERcdTUyQTEgKi9cbiAgICBjb21tZW50OiB7XG4gICAgICAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxuICAgICAgICBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly93YWxpbmUtdHdvLXZlcnQudmVyY2VsLmFwcC9cIixcbiAgICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAvLyBcdTdFQzRcdTRFRjZcbiAgICAgICAgY29tcG9uZW50czogW1xuICAgICAgICAgIFwiQmlsaUJpbGlcIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgY29weUNvZGU6IHtcbiAgICAgICAgc2hvd0luTW9iaWxlOiB0cnVlXG4gICAgICAgfSwgLy9cdTU3MjhcdTc5RkJcdTUyQThcdTdBRUZcdTU0MkZcdTc1MjhcdTU5MERcdTUyMzZcdTRFRTNcdTc4MDFcbiAgICAgIG1kRW5oYW5jZToge1xuICAgICAgICBoaW50OiB0cnVlLFxuICAgICAgICBWUENhcmQ6IHRydWUsLy9cdTU0MkZcdTc1MjhcdTUzNjFcdTcyNDdcbiAgICAgICAgZmlndXJlOiB0cnVlLC8vIFx1NTQyRlx1NzUyOCBmaWd1cmVcbiAgICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxuICAgICAgICBpbWdNYXJrOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTY4MDdcdThCQjBcbiAgICAgICAgaW1nU2l6ZTogdHJ1ZSwvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTU5MjdcdTVDMEZcbiAgICAgICAgY29kZXRhYnM6IHRydWUsIC8vIFx1NTkxQVx1ODg0Q1x1NEVFM1x1NzgwMVx1NTc1N1xuICAgICAgICBtYXJrOiB0cnVlLCAvL1x1NjgwN1x1OEJCMCAgICAgICAgXG4gICAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgICBhdHRyczogdHJ1ZSxcbiAgICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgICAgaW5jbHVkZTogdHJ1ZSxcblxuICAgICAgcGxheWdyb3VuZDoge1xuICAgICAgICBwcmVzZXRzOiBbXCJ0c1wiLCBcInZ1ZVwiXSxcbiAgICAgIH0sXG4gICAgICBcblxuICAgICAgXG4gICAgICBzdHlsaXplOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHRhYnM6IHRydWUsXG4gICAgICB2UHJlOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59KTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL2RmbC9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9kZmwvc3JjLy52dWVwcmVzcy9uYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvZGZsL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyKFtcbiAgXCIvXCIsXG4gIFxuICB7XG4gICAgdGV4dDogXCJZdW56YWktQm90XHU3RDIyXHU1RjE1XHU1RTkzXCIsXG4gICAgaWNvbjogXCJib29rXCIsXG4gICAgbGluazogXCJodHRwczovL2dpdGVlLmNvbS95aEFyY2FkaWEvWXVuemFpLUJvdC1wbHVnaW5zLWluZGV4XCIsXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvZGZsL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL2RmbC9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvZGZsL3NyYy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyKHtcbiAgXCIvXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXCIsXG4gICAgICBpY29uOiBcImJvb2tcIixcbiAgICAgIHByZWZpeDogXCJwb3N0cy9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gIF0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQThULFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFclYsSUFBTyxpQkFBUSxPQUFPO0FBQUEsRUFDcEI7QUFBQSxFQUVBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7OztBQ1YrVCxTQUFTLGVBQWU7QUFFeFYsSUFBTyxrQkFBUSxRQUFRO0FBQUEsRUFDckIs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
