import { buildCatalog } from "../../util/catalog";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildCatalog(), {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
