import type { ForestDetail } from "@/data/forestDetails";
import { forestDetailsId } from "@/data/forestDetails.id";
import type { Language } from "@/lib/dictionaries";

/* ============================================================
   TRANSLATE FOREST DETAIL INTO INDONESIAN
   ------------------------------------------------------------
   English remains the source of truth: every field that is not
   translated yet falls back to the original value in
   /data/forestDetails.ts.
   ============================================================ */

export function translateForestDetail(
  id: string,
  detail: ForestDetail,
  language: Language
): ForestDetail {
  if (language !== "id") return detail;

  const text = forestDetailsId[id];
  if (!text) return detail;

  return {
    ...detail,
    province: text.province ?? detail.province,
    designation: text.designation ?? detail.designation,
    elevation: text.elevation ?? detail.elevation,
    profileHeading: text.profileHeading ?? detail.profileHeading,
    profile: text.profile ?? detail.profile,
    ecosystems: text.ecosystems ?? detail.ecosystems,
    flora: detail.flora.map((item, index) => ({
      ...item,
      name: text.flora?.[index]?.name ?? item.name,
      habitat: text.flora?.[index]?.habitat ?? item.habitat,
      description:
        text.flora?.[index]?.description ?? item.description,
    })),
    importanceSubtitle:
      text.importanceSubtitle ?? detail.importanceSubtitle,
    importance: detail.importance.map((item, index) => ({
      ...item,
      title: text.importance?.[index]?.title ?? item.title,
      description:
        text.importance?.[index]?.description ?? item.description,
    })),
    extraStats: detail.extraStats.map((item, index) => ({
      ...item,
      label: text.extraStats?.[index]?.label ?? item.label,
      value: text.extraStats?.[index]?.value ?? item.value,
    })),
    timeline: detail.timeline.map((item, index) => ({
      ...item,
      period: text.timeline?.[index]?.period ?? item.period,
      title: text.timeline?.[index]?.title ?? item.title,
      description:
        text.timeline?.[index]?.description ?? item.description,
    })),
    threatSpotlight:
      detail.threatSpotlight && text.threatSpotlight
        ? { ...detail.threatSpotlight, ...text.threatSpotlight }
        : detail.threatSpotlight,
  };
}
