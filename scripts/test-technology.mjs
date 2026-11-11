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
const { default: Development } = await server.ssrLoadModule('/src/DevelopmentPage.jsx');
const { default: Detail, getTechnologyArea } = await server.ssrLoadModule('/src/TechnologyArea.jsx');
const { automotiveResearch: areas } = await server.ssrLoadModule('/src/automotiveResearch.js');
const render = (component, props) => renderToStaticMarkup(React.createElement(component, props));
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');

test('the technology overview directs visitors to separate development, projects and news pages', () => {
  const html = render(Landing);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal((html.match(/<article class="automotive-research-card/g) || []).length, 0, 'The overview must not repeat the development catalogue.');
  for (const href of ['/vyvoj', '/projekty', '/novinky']) assert.ok(html.includes(`href="${href}"`), `The overview needs a direct link to ${href}.`);
  assert.ok(!html.includes('<form'), 'The technology overview must stay separate from service inquiries.');
});

test('development contains seven illustrated areas in three distinct technical groups', () => {
  const html = render(Development);
  const researchAreas = areas.filter(area => area.detailSlug);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(researchAreas.length, 7);
  assert.equal((html.match(/<article class="automotive-research-card/g) || []).length, 7);
  assert.equal(new Set(researchAreas.map(area => area.image)).size, 7);
  assert.equal(new Set(researchAreas.map(area => area.id)).size, researchAreas.length, 'Research area IDs must remain unique.');
  assert.equal(new Set(researchAreas.map(area => area.href)).size, researchAreas.length, 'Research area destinations must remain unique.');
  for (const area of researchAreas) {
    assert.ok(html.includes(`id="${area.id}"`));
    assert.ok(html.includes(`href="${area.href}"`));
    assert.ok(html.includes(escape(area.imageAlt)));
    assert.ok(fs.existsSync(path.join(process.cwd(), 'public', area.image)));
    assert.ok(area.width > 0 && area.height > 0);
  }
  const expectedGroups = [
    ['pohonne-systemy', ['engine-development', 'transmission-development', 'performance-development']],
    ['konstrukce-podvozek', ['chassis-development', 'automotive-engineering', 'custom-components']],
    ['elektronika-rizeni', ['automotive-electronics']],
  ];
  const sections = [...html.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g)].map(match => match[0]);
  for (const [id, expectedAreas] of expectedGroups) {
    const section = sections.find(markup => markup.includes(`id="${id}"`));
    assert.ok(section, `The ${id} group must be visible.`);
    assert.ok(section.includes('<h2'), `The ${id} group needs its own heading.`);
    assert.equal((section.match(/<article class="automotive-research-card/g) || []).length, expectedAreas.length, id);
    for (const areaId of expectedAreas) assert.ok(section.includes(`id="${areaId}"`), `${areaId} belongs in ${id}.`);
    assert.ok(html.includes(`href="#${id}"`), `The ${id} group needs a working shortcut.`);
  }
  for (const anchor of ['automotive-vyvoj', 'pristup', 'vyzkum', 'software']) assert.ok(html.includes(`id="${anchor}"`), anchor);
  assert.ok(!html.includes('id="future-vehicles"'), 'Vehicle concepts belong in Projects rather than among research areas.');
  assert.ok(html.includes('href="/projekty"'));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Development must not duplicate element IDs.');
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
    assert.ok(html.includes('href="/vyvoj"'), 'Research details must return to the separate development page.');
    for (const related of areas.filter(item => item.id !== area.id)) assert.ok(html.includes(`href="${related.href}"`));
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, 'Detail must not duplicate element IDs.');
  }
  assert.equal(descriptions.size, 7);
});

test('development and all seven detail URLs have their own static metadata, build entries and host rewrites', () => {
  const files = {
    konstrukce: 'technology-engineering.html',
    'vykon-a-chlazeni': 'technology-performance.html',
    elektronika: 'technology-electronics.html',
    'vlastni-komponenty': 'technology-components.html',
    motor: 'technology-engine.html',
    podvozek: 'technology-chassis.html',
    prevodovka: 'technology-transmission.html',
  };
  const rewrites = JSON.parse(fs.readFileSync('vercel.json', 'utf8')).rewrites;
  const inputs = Object.values(server.config.build.rollupOptions.input);
  const developmentHtml = fs.readFileSync('development.html', 'utf8');
  assert.ok(developmentHtml.includes('<title>Vývoj automobilových systémů | PGEX</title>'));
  assert.ok(developmentHtml.includes('rel="canonical" href="https://programenvusxenos.com/vyvoj"'));
  assert.ok(developmentHtml.includes('property="og:url" content="https://programenvusxenos.com/vyvoj"'));
  assert.ok(developmentHtml.includes('name="description"'));
  assert.ok(inputs.some(input => input.endsWith('development.html')));
  assert.ok(rewrites.some(rule => rule.source === '/vyvoj' && rule.destination === '/development.html'));
  assert.equal(Object.keys(files).length, 7);
  for (const area of areas.filter(item => item.detailSlug)) {
    const file = files[area.detailSlug];
    assert.ok(file, `A static HTML entry is required for ${area.href}.`);
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(html.includes(`https://programenvusxenos.com${area.href}`));
    assert.ok(html.includes(escape(area.description)));
    assert.ok(html.includes(escape(area.label)));
    assert.ok(html.includes('rel="canonical"'));
    assert.ok(html.includes('property="og:url"'));
    assert.ok(html.includes(`https://programenvusxenos.com${area.image}`));
    assert.ok(html.includes(escape(area.imageAlt)));
    assert.ok(inputs.some(input => input.endsWith(file)));
    assert.ok(rewrites.some(rule => rule.source === area.href && rule.destination === `/${file}`));
  }
});

test('an unknown development area offers a useful return path instead of displaying another area', () => {
  assert.equal(getTechnologyArea('/technologie/neexistujici-oblast'), undefined);
  const html = render(Detail, { area: undefined });
  assert.ok(html.includes('Oblast nebyla nalezena.'));
  assert.ok(html.includes('href="/vyvoj"'));
});
