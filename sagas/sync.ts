import { takeEvery } from "redux-saga/effects";
import { SYNC_SQUADS } from "../actions/sync";
import { USER_DID_LOGIN } from "../actions/user";

// const getUser = (state: AppState) => state.app.user;
// const getSquadronXws = (state: AppState) => state.app.xws;
// const getCollection = (state: AppState) => state.app.collection;
// const getBlueprints = (state: AppState) => state.app.blueprints;
// const getTournaments = (state: AppState) => state.app.tournaments.list;

// function* syncCollection({ collection }: any, user: UserState) {
//   if (!user || !user.jwt) {
//     return;
//   }

//   const localCollection = yield select(getCollection);
//   console.log("SYNC COLLECTION", {
//     local: localCollection.timestamp,
//     remote: collection.timestamp,
//   });

//   if (!localCollection.timestamp) {
//     localCollection.timestamp = 0;
//   }

//   if (
//     // Only replace local collection if the the server one is newer
//     parseInt(localCollection.timestamp) < parseInt(collection.timestamp)
//   ) {
//     console.log("REPLACE LOCAL COLLECTION");
//     type CollectionCount = { [s: string]: string };

//     const newCollection: {
//       expansions: CollectionCount;
//       ships: CollectionCount;
//       pilots: CollectionCount;
//       upgrades: CollectionCount;
//     } = {
//       expansions: {},
//       ships: {},
//       pilots: {},
//       upgrades: {},
//     };

//     collection.expansions &&
//       collection.expansions.map(
//         (c: any) => (newCollection.expansions[c.id] = c.count)
//       );
//     collection.pilots &&
//       collection.pilots.map((c: any) => (newCollection.pilots[c.id] = c.count));
//     collection.ships &&
//       collection.ships.map((c: any) => (newCollection.ships[c.id] = c.count));
//     collection.upgrades &&
//       collection.upgrades.map(
//         (c: any) => (newCollection.upgrades[c.id] = c.count)
//       );

//     yield put({
//       type: SET_COLLECTION,
//       collection: newCollection,
//       timestamp: collection.timestamp, // Use the server timestamp
//     });
//   } else if (
//     parseInt(localCollection.timestamp) > parseInt(collection.timestamp)
//   ) {
//     // Send local one to the server
//     console.log("SEND LOCAL COLLECTION TO SERVER");
//     if (localCollection) {
//       yield call(api.setCollection, localCollection || {}, user.jwt);
//     }
//   }
//   console.log("COLLECTION COMPLETED");
// }

// function* syncSquadrons({ squadrons, removed }: any, user: UserState) {
//   if (!user || !user.jwt) {
//     return;
//   }
//   console.log("SYNC SQUADRONS");

//   const serverSquadrons = squadrons;
//   const localSquadrons: SquadronXWS[] = yield select(getSquadronXws);
//   const deleted = removed;

//   const toSend: SquadronXWS[] = [];
//   const toImport: SquadronXWS[] = [];
//   const toDelete: SquadronXWS[] = [];

//   // Calculate what needs to be synced and where
//   serverSquadrons.map((ss: SquadronXWS) => {
//     // We have a local variant, check which one to keep
//     const ls = localSquadrons.filter((local) => local.uid === ss.uid)[0];

//     if (ls) {
//       const cv = compareVersions(ss.version || "0.0.0", ls.version || "0.0.0");

//       if (cv === -1) {
//         toImport.push(ss); // Import server version
//       } else if (cv === 1) {
//         toSend.push(ls); // Send local version
//       }
//     } else {
//       // Not in local, import it
//       toImport.push(ss);
//     }
//   });

//   localSquadrons.map((ls) => {
//     if (deleted.indexOf(ls.uid) >= 0) {
//       // This should be removed from local
//       toDelete.push(ls);
//     } else if (!serverSquadrons.find((ss: SquadronXWS) => ls.uid === ss.uid)) {
//       // Local squadron not on server, push it
//       toSend.push(ls);
//     }
//   });

//   if (toImport.length > 0) {
//     console.log("IMPORT SQUADRONS", { toImport });
//     for (var i = 0; i < toImport.length; i++) {
//       yield put({ type: IMPORT_SQUADRON, squadron: toImport[i] });
//     }
//   }

//   if (toSend.length > 0) {
//     console.log("SEND SQUADRONS", { toSend });
//     for (var i = 0; i < toSend.length; i++) {
//       yield call(api.setSquadron, toSend[i], user.jwt);
//     }
//   }
//   if (toDelete.length > 0) {
//     console.log("DELETE SQUADRONS", { toDelete });
//     for (var i = 0; i < toDelete.length; i++) {
//       yield put({ type: REMOVE_SQUADRON, squadronUid: toDelete[i].uid });
//     }
//   }
//   console.log("SQUADRONS COMPLETED");
// }

// function* syncBlueprints(
//   { blueprints, removedBlueprints }: any,
//   user: UserState
// ) {
//   if (!user || !user.jwt) {
//     return;
//   }

//   console.log("SYNC BLUEPRINTS");
//   const toImport: BluePrint[] = [];
//   const toRemove: string[] = [];
//   const toSend: BluePrint[] = [];

//   const localBlueprints: BluePrint[] = yield select(getBlueprints);

//   blueprints.map((blueprint: BluePrint) => {
//     if (
//       localBlueprints.filter((local) => local.uid === blueprint.uid).length ===
//       0
//     ) {
//       toImport.push(blueprint);
//     }
//   });

//   localBlueprints.map((local) => {
//     if (removedBlueprints.indexOf(local.uid) >= 0) {
//       // Remove it
//       toRemove.push(local.uid);
//     } else if (!blueprints.find((bp: BluePrint) => bp.uid === local.uid)) {
//       // Send it
//       toSend.push(local);
//     }
//   });

//   for (var i = 0; i < toImport.length; i++) {
//     const blueprint = toImport[i];
//     console.log(`IMPORT ${blueprint}`);
//     yield put({ type: ADD_SYNCED_BLUEPRINT, blueprint });
//   }
//   for (var i = 0; i < toRemove.length; i++) {
//     const uid = toRemove[i];
//     console.log(`REMOVE ${uid}`);
//     yield put({ type: REMOVE_SYNCED_BLUEPRINT, uid });
//   }
//   for (var i = 0; i < toSend.length; i++) {
//     yield call(api.setBlueprint, toSend[i], user.jwt);
//   }
//   console.log("BLUEPRINTS COMPLETED");
// }

// function* syncTournaments(
//   { tournaments, removedTournaments }: any,
//   user: UserState
// ) {
//   if (!user || !user.jwt) {
//     return;
//   }

//   console.log("SYNC TOURNAMENTS");
//   const toImport: Tournament[] = [];
//   const toRemove: Tournament[] = [];
//   const toSend: Tournament[] = [];

//   const localTournaments: Tournament[] = yield select(getTournaments);

//   // Calculate what needs to be synced and where
//   tournaments.map((ss: Tournament) => {
//     // We have a local variant, check which one to keep
//     const ls = localTournaments.filter((local) => local.uid === ss.uid)[0];

//     if (ls) {
//       const cv = compareVersions(ss.version || "0.0.0", ls.version || "0.0.0");

//       if (cv === -1) {
//         toImport.push(ss); // Import server version
//       } else if (cv === 1) {
//         toSend.push(ls); // Send local version
//       }
//     } else {
//       // Not in local, import it
//       toImport.push(ss);
//     }
//   });

//   localTournaments.map((ls) => {
//     if (removedTournaments.indexOf(ls.uid) >= 0) {
//       // This should be removed from local
//       toRemove.push(ls);
//     } else if (!tournaments.find((ss: Tournament) => ls.uid === ss.uid)) {
//       // Local squadron not on server, push it
//       toSend.push(ls);
//     }
//   });

//   for (var i = 0; i < toImport.length; i++) {
//     const tournament = toImport[i];
//     console.log(`IMPORT ${tournament}`);
//     yield put({ type: ADD_SYNCED_TOURNAMENT, tournament });
//   }
//   for (var i = 0; i < toRemove.length; i++) {
//     const uid = toRemove[i];
//     console.log(`REMOVE ${uid}`);
//     yield put({ type: REMOVE_SYNCED_TOURNAMENT, uid });
//   }
//   for (var i = 0; i < toSend.length; i++) {
//     yield call(api.setTournament, toSend[i], user.jwt);
//   }
//   console.log("TOURNAMENTS COMPLETED");
// }

function* doSync(): any {
  return;
}

function* saga(): any {
  yield takeEvery([SYNC_SQUADS, "REDUX_STORAGE_LOAD", USER_DID_LOGIN], doSync);
}

export default saga;
