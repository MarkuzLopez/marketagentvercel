import { defineAgent } from "eve";

export default defineAgent({
    description: "Investigas noticias de las ultimas 24 horas de una empresa en torno a su cotizacion en la bolsa de valores actual. ",
    model: "anthropic/claude-sonnet-5",
});