import "./style.css";
import Alpine from "alpinejs";
import endpoints from "./data/endpoints.json";

window.Alpine = Alpine;

// Store for global endpoints
Alpine.store("endpoints", {
  categoriesEndpoint: import.meta.env.DEV
    ? endpoints.categories.dev
    : endpoints.categories.prod,
  subscribeEndpoint: import.meta.env.DEV
    ? endpoints.subscribe.dev
    : endpoints.subscribe.prod,
  unsubscribeEndpoint: import.meta.env.DEV
    ? endpoints.unsubscribe.dev
    : endpoints.unsubscribe.prod,
});

Alpine.start();
