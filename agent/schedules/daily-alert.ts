import { defineSchedule } from "eve/schedules";

import slack from "../channels/slack";

export default defineSchedule({
  cron: "40 14 * * *",
  async run({ to, waitUntil, appAuth }) {
    const channelId = process.env.SLACK_CHANNEL_ID;

    if (!channelId) {
      throw new Error("SLACK_CHANNEL_ID is required to send the daily market alert.");
    }

    waitUntil(
      to(slack, { channelId }).send(
        [
          "Alerta diaria: reporta el valor actual de las 3 empresas más valiosas del mundo por capitalización bursátil.",
          "Identifica el ranking, consulta cada símbolo con get_company_values y publica un resumen breve listo para Slack.",
          "Incluye nombre, símbolo y el valor más reciente de cada una. No pidas confirmación extra; este mensaje es el reporte completo.",
        ].join(" "),
        { auth: appAuth },
      ),
    );
  },
});
