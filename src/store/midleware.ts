import { i18nTranslator } from "@/services/i18n";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { message } from "antd";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
      message.error(i18nTranslator(`${action?.payload?.data?.code}`));
    }

    return next(action);
  };
