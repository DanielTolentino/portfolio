import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const serverUrl = new URL("../.vercel/output/functions/__server.func/index.mjs", import.meta.url);
  serverUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: server } = await import(serverUrl.href);

  return server.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { waitUntil() {} },
  );
}

test("server-renders the Daniel Tolentino portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  for (const content of [
    "Daniel Tolentino",
    "Sites que transformam",
    "Projetos com",
    "Como acontece",
    "Entender",
    "Criar",
    "Publicar",
    "Falar comigo no WhatsApp",
    "Sites que aproximam pessoas e boas ideias.",
  ]) {
    assert.match(html, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `missing rendered content: ${content}`);
  }

  for (const project of [
    "Marina Borges",
    "Crochê Arte",
    "Daniel Tolentino",
    "MyHub",
    "Lovet",
    "Blog Daniel Tolentino",
    "SirBarber",
  ]) {
    assert.match(html, new RegExp(project.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `missing rendered project: ${project}`);
  }

  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("defines automatic dark mode in CSS without requiring a browser", async () => {
  const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(
    styles,
    /:root\s*\{[\s\S]*?color-scheme\s*:\s*light\s+dark\s*;[\s\S]*?\}/,
    "global color-scheme declaration is missing",
  );

  const darkMode = styles.match(
    /@media\s*\(\s*prefers-color-scheme\s*:\s*dark\s*\)\s*\{([\s\S]*)\}/,
  );
  assert.ok(darkMode, "automatic dark-mode media query is missing");
  assert.match(darkMode[1], /--[\w-]+\s*:/, "dark mode must override theme values");
});

test("includes all seven project previews and the social card", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  for (const name of ["Marina Borges", "Crochê Arte", "Daniel Tolentino", "MyHub", "Lovet", "Blog Daniel Tolentino", "SirBarber"]) {
    assert.match(page, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(page, /marina-borges\.png/);
  assert.match(page, /croche-arte\.png/);
  assert.match(page, /sirbarber\.png/);
  assert.match(page, /wa\.me\/5531995007170/);
  assert.match(layout, /og\.png/);
  assert.match(layout, /lang="pt-BR"|<html lang="pt-BR">/);
});
