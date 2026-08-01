import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Daniel Tolentino portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Daniel Tolentino/);
  assert.match(html, /Sites que transformam/);
  assert.match(html, /Projetos com/);
  assert.match(html, /Falar comigo no WhatsApp/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("includes all six project previews and the social card", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  for (const name of ["Marina Borges", "Daniel Tolentino", "MyHub", "Lovet", "Blog Daniel Tolentino", "SirBarber"]) {
    assert.match(page, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(page, /marina-borges\.png/);
  assert.match(page, /sirbarber\.png/);
  assert.match(page, /wa\.me\/5531995007170/);
  assert.match(layout, /og\.png/);
  assert.match(layout, /lang="pt-BR"|<html lang="pt-BR">/);
});
