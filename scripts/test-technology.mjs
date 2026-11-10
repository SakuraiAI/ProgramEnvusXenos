import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const server = await createServer({ clearScreen: false, server: { middlewareMode: true, hmr: false }, appType: 'custom' });
after(() => server.close());
const { default: Landing } = await server.ssrLoadModule('/src/TechnologyLanding.jsx');
const { default: Detail, getTechnologyArea } = await server.ssrLoadModule('/src/TechnologyArea.jsx');
const { automotiveResearch: areas } = await server.ssrLoadModule('/src/automotiveResearch.js');
const render = (component, props) => renderToStaticMarkup(React.createElement(component, props));
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');

test('the technology landing preserves five anchors and opens five distinct illustrated areas', () => {
  const html = render(Landing);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal((html.match(/<article class="automotive-research-card/g) || []).length, 5);
  assert.equal(new Set(areas.map(area => area.image)).size, 5);
  for (const area of areas) {
    assert.ok(html.includes(`id="${area.id}"`));
    assert.ok(html.includes(`href="${area.href}"`));
    assert.ok(html.includes(escape(area.imageAlt)));
    assert.ok(fs.existsSync(path.join(process.cwd(), 'public', area.image)));
    assert.ok(area.width > 0 && area.height > 0);
  }
  for (const anchor of ['automotive-vyvoj', 'revenant', 'pristup', 'sakura', 'postavy', 'pgex-ai', 'vyzkum', 'software']) assert.ok(html.includes(`id="${anchor}"`), anchor);
  assert.ok(!html.includes('disabled'), 'All visible development actions should be usable.');
  assert.ok(!html.includes('<form'), 'Development must stay separate from the service inquiry.');
});

test('each new detail renders its own questions, evidence limits, outputs and related links', () => {
  const descriptions = new Set();
  for (const area of areas.filter(item => item.detailSlug)) {
    assert.equal(getTechnologyArea(area.href)?.id, area.id);
    const html = render(Detail, { area });
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.ok(html.includes(escape(area.label)));
    assert.ok(!descriptions.has(area.description));
    descriptions.add(area.description);
    for (const text of [...area.detail.intro, ...area.detail.questions, ...area.detail.outputs, area.detail.limits, area.detail.nextStep]) assert.ok(html.includes(escape(text)), area.id);
    assert.equal(area.detail.focus.length, 3);
    assert.ok(html.includes('href="/technologie"'));
    for (const related of areas.filter(item => item.id !== area.id)) assert.ok(html.includes(`href="${related.href}"`));
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, 'Detail must not duplicate element IDs.');
  }
  assert.equal(descriptions.size, 4);
});

test('all four direct URLs have their own static metadata, build entries and host rewrites', () => {
  const files = ['technology-engineering.html', 'technology-performance.html', 'technology-electronics.html', 'technology-components.html'];
  const rewrites = JSON.parse(fs.readFileSync('vercel.json', 'utf8')).rewrites;
  const inputs = Object.values(server.config.build.rollupOptions.input);
  for (const [index, area] of areas.filter(item => item.detailSlug).entries()) {
    const file = files[index];
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(html.includes(`https://programenvusxenos.com${area.href}`));
    assert.ok(html.includes(escape(area.description)));
    assert.ok(html.includes(escape(area.label)));
    assert.ok(html.includes('rel="canonical"'));
    assert.ok(html.includes('property="og:url"'));
    assert.ok(inputs.some(input => input.endsWith(file)));
    assert.ok(rewrites.some(rule => rule.source === area.href && rule.destination === `/${file}`));
  }
});

test('an unknown development area offers a useful return path instead of displaying another area', () => {
  assert.equal(getTechnologyArea('/technologie/neexistujici-oblast'), undefined);
  const html = render(Detail, { area: undefined });
  assert.ok(html.includes('Oblast nebyla nalezena.'));
  assert.ok(html.includes('href="/technologie"'));
});
