

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BlIOlymU.js","_app/immutable/chunks/scheduler.GQjQWUNk.js","_app/immutable/chunks/index.DJhhrnOK.js"];
export const stylesheets = ["_app/immutable/assets/2.BygMRmm9.css"];
export const fonts = [];
