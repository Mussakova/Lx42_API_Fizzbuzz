const explorerController = require("../../lib/controllers/explorerController");

describe("Pruebas del Explorer Controller",()=>{
    test("1. Probando getExplorerByMission", ()=>{
        const testgetExplorerByMission = explorerController.getExplorerByMission("node");
        for (let i = 0; i<testgetExplorerByMission.lenght; i+=1){
            expect(testgetExplorerByMission[i].mission).toBe("node");
        }
    }),
    test("2. Probando getExplorersUsernamesByMission", ()=>{
        const testGetExplorersUsernamesByMission = explorerController.getExplorersUsernamesByMission("node");
        for (let i = 0; i<testGetExplorersUsernamesByMission.lenght; i+=1)
        {expect(testGetExplorersUsernamesByMission[i]).toMatch(/ajolonauta/)}
    }),
    test("3. Probando getExplorersAmonutByMission", ()=>{
        const testgetExplorersAmonutByMission = explorerController.getExplorersAmonutByMission("node");
        const explorers = explorerController.getExplorerByMission("node");
        expect(testgetExplorersAmonutByMission).toBe(explorers.length);
    });
});