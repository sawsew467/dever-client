"use client";

import React, { useEffect } from "react";
import { setI18nTranslator } from ".";
import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

function ProviderI18n({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "error");

  useEffect(() => {
    setI18nTranslator(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return <>{children}</>;
}

export default ProviderI18n;
