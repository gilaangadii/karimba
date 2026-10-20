import type { ImpactLens, Issue } from "@/data/issues";
import type { Dictionary } from "@/lib/dictionaries";

/* ============================================================
   TRANSLATE ISSUE (LIST)
   ------------------------------------------------------------
   English remains the source of truth: missing entries fall back
   to the original value in /data/issues.ts.
   ============================================================ */

export function translateIssue(dict: Dictionary, issue: Issue): Issue {
  const text = dict.data.issues[issue.id];

  return {
    ...issue,
    category: text?.category ?? issue.category,
    title: text?.title ?? issue.title,
    description: text?.description ?? issue.description,
    impact: text?.impact ?? issue.impact,
  };
}

export function translateImpactLens(
  dict: Dictionary,
  lens: ImpactLens
): ImpactLens {
  const text = dict.data.impactLenses[lens.title.toLowerCase()];

  return {
    ...lens,
    title: text?.title ?? lens.title,
    description: text?.description ?? lens.description,
    label: text?.label ?? lens.label,
  };
}
