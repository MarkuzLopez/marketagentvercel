import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Obtiene los valores de una empresa",
  inputSchema: z.object({
    empresa: z.string().min(1).describe("El nombre de la empresa"),
  }),

execute: async ({ empresa}) => { 
    return `Los valores de la empresa ${empresa} son: ${empresa}`;
  },
});