const explorerController = require("../../lib/controllers/explorerController");

describe("Pruebas del Explorer Controller",()=>{
    test("1. Probando getExplorerByMission", ()=>{
        const testgetExplorerByMission = explorerController.getExplorerByMission("node");
        expect(testgetExplorerByMission[1].mission).toBe("node");
    }),
    test("2. Probando getExplorersUsernamesByMission", ()=>{
        const testGetExplorersUsernamesByMission = explorerController.getExplorersUsernamesByMission("node");
        expect(testGetExplorersUsernamesByMission[1]).toMatch(/ajolonauta/);
    }),
    test("3. Probando getExplorersAmonutByMission", ()=>{
        const testgetExplorersAmonutByMission = explorerController.getExplorersAmonutByMission("node");
        expect(testgetExplorersAmonutByMission).toBe(10);
    });
});