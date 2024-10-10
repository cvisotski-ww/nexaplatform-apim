import { 
  RuntimeExtensions,
  LokiLoggingPlugin,
  environment } from "@zuplo/runtime";

// For more information on runtime extensions see:
// https://zuplo.com/docs/articles/runtime-extensions

export function runtimeInit(runtime: RuntimeExtensions) {
/*
  runtime.addPlugin(
    new LokiLoggingPlugin({
    url: "https:/logs-loki.grafana.net/loki/api/v1/push",
    username: "test-username",
    job: "my-api",
    password : environment.LOKI_PASSWORD
  }),
  );*/
}
