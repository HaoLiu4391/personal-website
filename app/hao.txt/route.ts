import { renderPlainText } from "@/lib/plaintext";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderPlainText(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
