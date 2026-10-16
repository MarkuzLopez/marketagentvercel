import { fetchCompanyValues } from "../lib/twelveData";
import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Obtiene los valores de una empresa",
  inputSchema: z.object({
    empresa: z.string().min(1).describe("Simbolo de la empresa en el mercado"),
  }),

execute: async ({ empresa}) => { 
    return await fetchCompanyValues(empresa);
  },
});