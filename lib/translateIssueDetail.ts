import type { IssueDetail } from "@/data/issueDetails";
import { issueDetailsId } from "@/data/issueDetails.id";
import type { Language } from "@/lib/dictionaries";

/* ============================================================
   TRANSLATE ISSUE DETAIL
   ------------------------------------------------------------
   The Indonesian records are complete copies of the English
   template, so the switch is a simple lookup. Anything missing
   falls back to English untouched.
   ============================================================ */

export function translateIssueDetail(
  id: string,
  detail: IssueDetail,
  language: Language
): IssueDetail {
  if (language !== "id") return detail;
  return issueDetailsId[id] ?? detail;
}
