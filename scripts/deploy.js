const path = require("path");
const { deploy } = require("ipfs-deploy");

const PINATA_API_KEY = "9aa13e5f59647607cc1d";
const PINATA_API_SECRET =
  "e162c09f59cf81736b825a9f9e14ed2890c08909826b2b9a5b94e722ca414c22";

const CLOUDFLARE_ZONE = "chakra.guru";
const CLOUDFLARE_API_TOKEN = "MHAEsFtOVJhfg41tC9cd7pPAwXu7JTw5iVPj_etK";
const CLOUDFLARE_RECORD = "_dnslink";

async function main() {
  const cid = await deploy({
    dir: path.join(__dirname, "../out"),
    tag: process.argv.tag,
    cid: process.argv.cid,

    copyUrl: !process.argv.C,
    openUrls: process.argv.open,

    pinningServices: ["pinata"],
    dnsProviders: ["cloudflare"],

    dnsProvidersCredentials: {
      cloudflare: {
        apiToken: CLOUDFLARE_API_TOKEN,
        zone: CLOUDFLARE_ZONE,
        record: CLOUDFLARE_RECORD,
      },
    },

    pinningServicesCredentials: {
      pinata: {
        apiKey: PINATA_API_KEY,
        secretApiKey: PINATA_API_SECRET,
      },
    },
  });
  console.log(cid);
}

main();
