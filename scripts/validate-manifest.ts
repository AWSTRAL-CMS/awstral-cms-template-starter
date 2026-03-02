import { validateBlockManifest } from "@platform/shared";
import manifest from "../block-manifest.json" assert { type: "json" };

console.log("Validating block-manifest.json...");

const result = validateBlockManifest(manifest);

if (result) {
  console.log("✓ Block manifest is valid");
  console.log(`  - Version: ${result.version}`);
  console.log(`  - Template: ${result.template}`);
  console.log(`  - Blocks: ${result.blocks.length}`);
  process.exit(0);
} else {
  console.error("✗ Block manifest validation failed");
  process.exit(1);
}
