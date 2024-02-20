import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from "../../chunks/ssr.js";
const Apple1Jpg = "/_app/immutable/assets/apple.D7eaZYYu.jpg";
const Apple2Jpg = "/_app/immutable/assets/蘋果.B6GOrG-g.jpg";
const Apple3Jpg = "/_app/immutable/assets/りんご.CSObgMi8.jpg";
const EnhancedApple1Jpg = {
  sources: {
    avif: "/_app/immutable/assets/apple.C9K-Ddxz.avif 1x, /_app/immutable/assets/apple.CRaZyCSu.avif 2x",
    webp: "/_app/immutable/assets/apple.BSDqVdwF.webp 1x, /_app/immutable/assets/apple.BdyvhPdB.webp 2x",
    jpeg: "/_app/immutable/assets/apple.CSOCE1mP.jpg 1x, /_app/immutable/assets/apple.YR7V9jB_.jpg 2x"
  },
  img: {
    src: "/_app/immutable/assets/apple.YR7V9jB_.jpg",
    w: 2418,
    h: 2192
  }
};
const EnhancedApple2Jpg = {
  sources: {
    avif: "/_app/immutable/assets/%E8%98%8B%E6%9E%9C.BWxEiO_M.avif 1x, /_app/immutable/assets/%E8%98%8B%E6%9E%9C.Be5TAvTE.avif 1.9987995198079231x",
    webp: "/_app/immutable/assets/%E8%98%8B%E6%9E%9C.uD20YsES.webp 1x, /_app/immutable/assets/%E8%98%8B%E6%9E%9C.C8npSy0f.webp 1.9987995198079231x",
    jpeg: "/_app/immutable/assets/%E8%98%8B%E6%9E%9C.B31nlQnl.jpg 1x, /_app/immutable/assets/%E8%98%8B%E6%9E%9C.B5rZrqL7.jpg 1.9987995198079231x"
  },
  img: {
    src: "/_app/immutable/assets/%E8%98%8B%E6%9E%9C.B5rZrqL7.jpg",
    w: 1665,
    h: 1665
  }
};
const EnhancedApple3Jpg = {
  sources: {
    avif: "/_app/immutable/assets/%E3%82%8A%E3%82%93%E3%81%94.CWX8iQsd.avif 1x, /_app/immutable/assets/%E3%82%8A%E3%82%93%E3%81%94.ksNflIUE.avif 2x",
    webp: "/_app/immutable/assets/%E3%82%8A%E3%82%93%E3%81%94.9RqXyi68.webp 1x, /_app/immutable/assets/%E3%82%8A%E3%82%93%E3%81%94.DXMdvZ2I.webp 2x",
    jpeg: "/_app/immutable/assets/%E3%82%8A%E3%82%93%E3%81%94.Bo0xqkpM.jpg 1x, /_app/immutable/assets/%E3%82%8A%E3%82%93%E3%81%94.BBQXR1KF.jpg 2x"
  },
  img: {
    src: "/_app/immutable/assets/%E3%82%8A%E3%82%93%E3%81%94.BBQXR1KF.jpg",
    w: 1600,
    h: 1067
  }
};
const css = {
  code: "p.svelte-1p0buga{font-family:monospace}img.svelte-1p0buga{width:auto;height:100px;border:solid 2px black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p class="svelte-1p0buga" data-svelte-h="svelte-1vc1ga9">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <ol><li><p class="svelte-1p0buga">${escape('<img src="/apple.jpg" />')}</p> <img src="/apple.jpg" alt="img[src=/apple.jpg]" class="svelte-1p0buga"></li> <li><p class="svelte-1p0buga">${escape('<img src="/蘋果.jpg" />')}</p> <img src="/蘋果.jpg" alt="img[src=/蘋果.jpg]" class="svelte-1p0buga"></li> <li><p class="svelte-1p0buga">${escape('<img src="/りんご.jpg" />')}</p> <img src="/りんご.jpg" alt="img[src=/りんご.jpg]" class="svelte-1p0buga"></li> <li><p class="svelte-1p0buga">${escape('<img src={import("$lib/assets/apple.jpg")} />')}</p> <img${add_attribute("src", Apple1Jpg, 0)} alt="img[src=import('apple.jpg')]" class="svelte-1p0buga"></li> <li><p class="svelte-1p0buga">${escape('<img src={import("$lib/assets/蘋果.jpg")} />')}</p> <img${add_attribute("src", Apple2Jpg, 0)} alt="img[src=import('蘋果.jpg')]" class="svelte-1p0buga"></li> <li><p class="svelte-1p0buga">${escape('<img src={import("$lib/assets/りんご.jpg")} />')}</p> <img${add_attribute("src", Apple3Jpg, 0)} alt="img[src=import('りんご.jpg')]" class="svelte-1p0buga"></li> <li><p class="svelte-1p0buga">${escape('<enhanced:img src={import("$lib/assets/apple.jpg?enhanced")} />')}</p> ${typeof EnhancedApple1Jpg === "string" ? `<img${add_attribute("src", EnhancedApple1Jpg.img.src, 0)} alt="enhanced:img[src=import('$lib/assets/apple.jpg?enhanced')]"${add_attribute("width", EnhancedApple1Jpg.img.w, 0)}${add_attribute("height", EnhancedApple1Jpg.img.h, 0)} class="svelte-1p0buga">` : `<picture>${each(Object.entries(EnhancedApple1Jpg.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", EnhancedApple1Jpg.img.src, 0)} alt="enhanced:img[src=import('$lib/assets/apple.jpg?enhanced')]"${add_attribute("width", EnhancedApple1Jpg.img.w, 0)}${add_attribute("height", EnhancedApple1Jpg.img.h, 0)} class="svelte-1p0buga"></picture>`}</li> <li><p class="svelte-1p0buga">${escape('<enhanced:img src={import("$lib/assets/蘋果.jpg?enhanced")} />')}</p> ${typeof EnhancedApple2Jpg === "string" ? `<img${add_attribute("src", EnhancedApple2Jpg.img.src, 0)} alt="enhanced:img[src=import('$lib/assets/蘋果.jpg?enhanced')]"${add_attribute("width", EnhancedApple2Jpg.img.w, 0)}${add_attribute("height", EnhancedApple2Jpg.img.h, 0)} class="svelte-1p0buga">` : `<picture>${each(Object.entries(EnhancedApple2Jpg.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", EnhancedApple2Jpg.img.src, 0)} alt="enhanced:img[src=import('$lib/assets/蘋果.jpg?enhanced')]"${add_attribute("width", EnhancedApple2Jpg.img.w, 0)}${add_attribute("height", EnhancedApple2Jpg.img.h, 0)} class="svelte-1p0buga"></picture>`}</li> <li><p class="svelte-1p0buga">${escape('<enhanced:img src={import("$lib/assets/りんご.jpg?enhanced")} />')}</p> ${typeof EnhancedApple3Jpg === "string" ? `<img${add_attribute("src", EnhancedApple3Jpg.img.src, 0)} alt="enhanced:img[src=import('$lib/assets/りんご.jpg?enhanced')]"${add_attribute("width", EnhancedApple3Jpg.img.w, 0)}${add_attribute("height", EnhancedApple3Jpg.img.h, 0)} class="svelte-1p0buga">` : `<picture>${each(Object.entries(EnhancedApple3Jpg.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", EnhancedApple3Jpg.img.src, 0)} alt="enhanced:img[src=import('$lib/assets/りんご.jpg?enhanced')]"${add_attribute("width", EnhancedApple3Jpg.img.w, 0)}${add_attribute("height", EnhancedApple3Jpg.img.h, 0)} class="svelte-1p0buga"></picture>`}</li> </ol>`;
});
export {
  Page as default
};
