import { RouteOptions } from "@fastify/websocket";
import { FastifySchema, RegisterOptions, RouteHandler } from "fastify";
import * as controller from "./controller";

export const opts: RegisterOptions = {
  prefix: "/anime"
};

export const routes: RouteOptions[] = [
  {
    method: "POST",
    url: "/createAnime",
    handler: <RouteHandler>controller.createAnime
  },
  {
    method: "GET",
    url: "/:title",
    handler: <RouteHandler>controller.readAnime
  },
  {
    method: "POST",
    url: "/updateAnime",
    handler: <RouteHandler>controller.updateAnime
  },
  {
    method: "DELETE",
    url: "/:title",
    handler: <RouteHandler>controller.deleteAnime
  },
  {
    method: "GET",
    url: "/fromMal",
    handler: <RouteHandler>controller.fetchFilteredAnime
  }
];
