// vite.config.js
import { ViteImageOptimizer } from "file:///C:/htmlacademy/projects/intership/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import VitePluginSvgSpritemap from "file:///C:/htmlacademy/projects/intership/node_modules/@spiriit/vite-plugin-svg-spritemap/dist/index.js";
import { ViteMinifyPlugin } from "file:///C:/htmlacademy/projects/intership/node_modules/vite-plugin-minify/dist/index.js";
var vite_config_default = {
  plugins: [
    VitePluginSvgSpritemap("source/img/sprite/*.svg", {
      styles: false,
      injectSVGOnDev: true
    }),
    // input https://www.npmjs.com/package/html-minifier-terser options
    ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false
                },
                removeViewBox: false
                // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: false,
                remove: false
              },
              convertPathData: false
            }
          },
          "removeDimensions"
        ]
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
        palette: true
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      // Cache assets in cacheLocation. When enabled, reads and writes asset files with their hash suffix from the specified path.
      cache: true,
      cacheLocation: "./.cache"
    })
  ],
  css: {
    devSourcemap: true
  },
  publicDir: "public",
  root: "./source",
  build: {
    outDir: "../dist"
  },
  base: "./",
  server: {
    port: 3e3
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxodG1sYWNhZGVteVxcXFxwcm9qZWN0c1xcXFxpbnRlcnNoaXBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXGh0bWxhY2FkZW15XFxcXHByb2plY3RzXFxcXGludGVyc2hpcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovaHRtbGFjYWRlbXkvcHJvamVjdHMvaW50ZXJzaGlwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcclxuaW1wb3J0IFZpdGVQbHVnaW5TdmdTcHJpdGVtYXAgZnJvbSAnQHNwaXJpaXQvdml0ZS1wbHVnaW4tc3ZnLXNwcml0ZW1hcCc7XHJcbmltcG9ydCB7IFZpdGVNaW5pZnlQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1taW5pZnknO1xyXG5cclxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgVml0ZVBsdWdpblN2Z1Nwcml0ZW1hcCgnc291cmNlL2ltZy9zcHJpdGUvKi5zdmcnLCB7XHJcbiAgICAgIHN0eWxlczogZmFsc2UsXHJcbiAgICAgIGluamVjdFNWR09uRGV2OiB0cnVlLFxyXG4gICAgfSksXHJcbiAgICAvLyBpbnB1dCBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9odG1sLW1pbmlmaWVyLXRlcnNlciBvcHRpb25zXHJcbiAgICBWaXRlTWluaWZ5UGx1Z2luKHt9KSxcclxuICAgIFZpdGVJbWFnZU9wdGltaXplcih7XHJcbiAgICAgIHRlc3Q6IC9cXC4oanBlP2d8cG5nfHN2ZykkL2ksXHJcbiAgICAgIGluY2x1ZGVQdWJsaWM6IGZhbHNlLFxyXG4gICAgICBsb2dTdGF0czogdHJ1ZSxcclxuICAgICAgYW5zaUNvbG9yczogdHJ1ZSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbXVsdGlwYXNzOiB0cnVlLFxyXG4gICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3ByZXNldC1kZWZhdWx0JyxcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgb3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhbnVwTnVtZXJpY1ZhbHVlczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb252ZXJ0UGF0aERhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgZmxvYXRQcmVjaXNpb246IDIsXHJcbiAgICAgICAgICAgICAgICAgIGZvcmNlQWJzb2x1dGVQYXRoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgdXRpbGl6ZUFic29sdXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW1vdmVWaWV3Qm94OiBmYWxzZSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2Zy9zdmdvL2lzc3Vlcy8xMTI4XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjbGVhbnVwSURzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNvbnZlcnRQYXRoRGF0YTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAncmVtb3ZlRGltZW5zaW9ucycsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgcG5nOiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I3BuZ1xyXG4gICAgICAgIHF1YWxpdHk6IDgwLFxyXG4gICAgICAgIHBhbGV0dGU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAganBlZzoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNqcGVnXHJcbiAgICAgICAgcXVhbGl0eTogODAsXHJcbiAgICAgICAgcHJvZ3Jlc3NpdmU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAganBnOiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I2pwZWdcclxuICAgICAgICBxdWFsaXR5OiA4MCxcclxuICAgICAgICBwcm9ncmVzc2l2ZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBDYWNoZSBhc3NldHMgaW4gY2FjaGVMb2NhdGlvbi4gV2hlbiBlbmFibGVkLCByZWFkcyBhbmQgd3JpdGVzIGFzc2V0IGZpbGVzIHdpdGggdGhlaXIgaGFzaCBzdWZmaXggZnJvbSB0aGUgc3BlY2lmaWVkIHBhdGguXHJcbiAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICBjYWNoZUxvY2F0aW9uOiAnLi8uY2FjaGUnLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjc3M6IHtcclxuICAgIGRldlNvdXJjZW1hcDogdHJ1ZVxyXG4gIH0sXHJcbiAgcHVibGljRGlyOiAncHVibGljJyxcclxuICByb290OiAnLi9zb3VyY2UnLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICB9LFxyXG4gIGJhc2U6ICcuLycsXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gIH1cclxufTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UixTQUFTLDBCQUEwQjtBQUNoVSxPQUFPLDRCQUE0QjtBQUNuQyxTQUFTLHdCQUF3QjtBQUdqQyxJQUFPLHNCQUFRO0FBQUEsRUFDYixTQUFTO0FBQUEsSUFDUCx1QkFBdUIsMkJBQTJCO0FBQUEsTUFDaEQsUUFBUTtBQUFBLE1BQ1IsZ0JBQWdCO0FBQUEsSUFDbEIsQ0FBQztBQUFBO0FBQUEsSUFFRCxpQkFBaUIsQ0FBQyxDQUFDO0FBQUEsSUFDbkIsbUJBQW1CO0FBQUEsTUFDakIsTUFBTTtBQUFBLE1BQ04sZUFBZTtBQUFBLE1BQ2YsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osS0FBSztBQUFBLFFBQ0gsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxjQUNOLFdBQVc7QUFBQSxnQkFDVCxzQkFBc0I7QUFBQSxnQkFDdEIsaUJBQWlCO0FBQUEsa0JBQ2YsZ0JBQWdCO0FBQUEsa0JBQ2hCLG1CQUFtQjtBQUFBLGtCQUNuQixpQkFBaUI7QUFBQSxnQkFDbkI7QUFBQSxnQkFDQSxlQUFlO0FBQUE7QUFBQSxjQUNqQjtBQUFBLGNBQ0EsWUFBWTtBQUFBLGdCQUNWLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsaUJBQWlCO0FBQUEsWUFDbkI7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUE7QUFBQSxRQUVILFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUE7QUFBQSxRQUVKLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQSxLQUFLO0FBQUE7QUFBQSxRQUVILFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxNQUNmO0FBQUE7QUFBQSxNQUVBLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxJQUNqQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
