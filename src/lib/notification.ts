import { v4 as uuidv4 } from "uuid";
import { notify } from "@/components";
import { NETWORK_TRANSLATIONS_NAMESPACE } from "@/constants";
import i18n from "@/i18n";
import type { AppErrorItem } from "@/state";

function formatErrorData(arr: string[]) {
  return arr.reduce((acc: Record<string, string>, itm, idx) => {
    acc[idx] = itm;
    return acc;
  }, {});
}

export function displayNotification(errors: AppErrorItem[]) {
  const notifications = errors.map((errItm) => {
    const dynamicData = formatErrorData(errItm.data);
    const translationKey = `${NETWORK_TRANSLATIONS_NAMESPACE}:${errItm.code}`;
    const exists = i18n.exists(translationKey);

    const title = exists
      ? i18n.t(translationKey, dynamicData)
      : i18n.t(`${NETWORK_TRANSLATIONS_NAMESPACE}:DEFAULT_NETWORK_ERROR`);

    return { id: uuidv4(), title };
  });

  notifications.forEach((notification) =>
    notify({
      id: notification.id,
      title: notification.title,
      variant: "error",
    })
  );
}
