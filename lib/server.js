const explorerController = require("./controllers/explorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:missionx", (request, response)=>{
    const mission = request.params.missionx;
    const explorersInMission = explorerController.getExplorerByMission(mission);
    response.json(explorersInMission);
});
app.get("/v1/explorers/amount/:amountx", (request, response)=>{
    const amount = request.params.amountx;
    const explorersInMission = explorerController.getExplorersAmonutByMission(amount);
    response.json(explorersInMission);
});
app.get("/v1/explorers/usernames/:usernamesx", (request, response)=>{
    const usernames = request.params.usernamesx;
    const explorersInMission = explorerController.getExplorersUsernamesByMission(usernames);
    response.json(explorersInMission);
});