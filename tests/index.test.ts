import { describe, test, expect } from "bun:test";
describe("oauth2-token-refresher", () => {
  test("module loads", async () => { const m = await import("./index"); expect(m).toBeDefined(); });
});
