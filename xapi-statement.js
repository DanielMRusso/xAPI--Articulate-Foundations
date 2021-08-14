function sendStatement(verb, verbId, object, objectId, objectDescription, activityType) {
  const player = GetPlayer();
  const uNamejs = player.GetVar("learnerName");
  const uEmailjs = player.GetVar("learnerEmail");
  const conf = {
    "endpoint": "https://trial-lrs.yetanalytics.io/xapi/",
    "auth": "Basic " + toBase64("b7bd9b433979f945f0988664376c4eeb:5ea471e21aab4f446e62d2e119466502")
  };
  ADL.XAPIWrapper.changeConfig(conf); 
  const statement = {
    "actor": {
      "name": uNamejs,
      "mbox": "mailto:" + uEmailjs 
    },
    "verb": {
      "id": verbId,
      "display": { "en-US": verb }
    },
    "object": {
      "id": objectId,
      "definition": {
        "name": { "en-US": object },
        "description": { "en-US": objectDescription },
        "type": activityType
      },
      "objectType": "Activity"
    }
  };
  const result = ADL.XAPIWrapper.sendStatement(statement);
}