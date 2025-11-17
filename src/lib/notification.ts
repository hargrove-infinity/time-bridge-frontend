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

export function displayNotification(error: AppErrorItem[]) {
  const notifications = error.map((errItm) => {
    const dynamicData = formatErrorData(errItm.data);

    return {
      id: uuidv4(),
      title: i18n.t(
        `${NETWORK_TRANSLATIONS_NAMESPACE}:${errItm.code}`,
        dynamicData
      ),
    };
  });

  notifications.forEach((notification) =>
    notify({
      id: notification.id,
      title: notification.title,
      variant: "error",
    })
  );
}
